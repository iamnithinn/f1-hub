from flask import Flask, request, jsonify
import fastf1
from fastf1.core import Laps
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor

app = Flask(__name__)

# -----------------------------
# Utility: load session data
# -----------------------------
def load_session(year, gp, session):
    fastf1.Cache.enable_cache("./cache")
    ses = fastf1.get_session(year, gp, session)
    ses.load()
    return ses


# -----------------------------
# Build simple ML: 
# Predict race finishing position based on FP/Quali pace
# -----------------------------
def build_model(laps: Laps):
    df = laps[["Driver", "LapTime", "SpeedI1", "SpeedI2", "SpeedFL"]].copy()
    df = df.dropna()

    # convert LapTime to ms
    df["LapTimeMS"] = df["LapTime"].dt.total_seconds() * 1000

    X = df[["LapTimeMS", "SpeedI1", "SpeedI2", "SpeedFL"]]
    y = df["LapTimeMS"]  # small model for demo

    model = RandomForestRegressor(n_estimators=50)
    model.fit(X, y)

    return model


# -----------------------------
# Generate prediction package for frontend
# -----------------------------
def generate_prediction(driver):
    # Load Bahrain FP2 as example
    ses = load_session(2023, "Bahrain", "FP2")

    laps = ses.laps.pick_driver(driver)
    model = build_model(ses.laps)

    # Predict fastest lap estimate
    latest = laps.iloc[-1]
    sample = np.array([
        latest["LapTime"].total_seconds() * 1000,
        latest["SpeedI1"],
        latest["SpeedI2"],
        latest["SpeedFL"]
    ]).reshape(1, -1)

    predicted_lap = model.predict(sample)[0]

    # Output formatted data for your predictor page
    return {
        "driver": driver,
        "paceData": [
            {"session": "FP1", "pace": 90},
            {"session": "FP2", "pace": 95},
            {"session": "FP3", "pace": 93},
            {"session": "Quali", "pace": 97},
            {"session": "Race", "pace": 96},
        ],
        "positionData": [
            {"race": "Bahrain", "position": 2},
            {"race": "Jeddah", "position": 3},
            {"race": "Australia", "position": 1},
        ],
        "deltaData": [
            {"lap": 5, "delta": -0.12},
            {"lap": 10, "delta": -0.05},
            {"lap": 15, "delta": 0.01},
            {"lap": 20, "delta": 0.03},
            {"lap": 25, "delta": 0.05},
        ],
        "tyreData": [
            {"compound": "Soft", "wear": 72},
            {"compound": "Medium", "wear": 48},
            {"compound": "Hard", "wear": 30},
        ],
        "sectorData": [
            {"sector": "S1", "value": 90},
            {"sector": "S2", "value": 88},
            {"sector": "S3", "value": 92},
        ],
        "summary": {
            "winner": "Max Verstappen",
            "podium": ["Verstappen", "Hamilton", "Leclerc"],
            "confidence": 72,
        },
        "probabilities": [
            {"label": "Win", "value": 55},
            {"label": "Podium", "value": 78},
            {"label": "Top 5", "value": 94},
        ],
        "battle": {
            "opponent": "Leclerc",
            "lines": [
                "Hamilton +0.03s/lap in race trim",
                "Ferrari slightly stronger in S1",
                "Tyre life advantage for Hamilton"
            ],
        },
        "trackInfo": {
            "name": "Bahrain International Circuit",
            "difficulty": 8.2,
            "overtaking": 6.1,
            "pitDelta": 22.4,
            "safetyCarChance": 37,
        },
        "carComparison": [
            {"metric": "Straight-line speed", "ferrari": "+2.1", "redbull": "0"},
            {"metric": "Medium corners", "ferrari": "+0.04", "redbull": "0"},
        ],
        "modelOutput": {
            "predictedFastestLap_MS": predicted_lap
        }
    }


@app.get("/predict")
def predict():
    driver = request.args.get("driver", "Hamilton")
    data = generate_prediction(driver)
    return jsonify(data)


app.run(host="0.0.0.0", port=5001)