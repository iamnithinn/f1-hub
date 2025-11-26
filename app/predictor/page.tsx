"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
} from "recharts";

const DRIVERS = ["Hamilton", "Leclerc", "Verstappen", "Tsunoda"] as const;

type Driver = (typeof DRIVERS)[number];

// ---------------------
// FAKE ML ENGINE
// ---------------------
function getPrediction(driver: Driver) {
  const base: Record<Driver, number> = {
    Hamilton: 92,
    Leclerc: 88,
    Verstappen: 96,
    Tsunoda: 80,
  };

  const score = base[driver];

  return {
    paceData: [
      { session: "FP1", pace: score - 4 },
      { session: "FP2", pace: score - 2 },
      { session: "FP3", pace: score - 1 },
      { session: "Quali", pace: score },
      { session: "Race", pace: score - 1 },
    ],
    positionData: [
      { race: "Bahrain", position: Math.floor((100 - score) / 12) + 1 },
      { race: "Jeddah", position: Math.floor((100 - score) / 14) + 1 },
      { race: "Australia", position: Math.floor((100 - score) / 16) + 1 },
    ],
    summary: {
      winner: score > 90 ? driver : "Verstappen",
      confidence: Math.min(95, score),
    },
    probabilities: [
      { label: "Win", value: Math.floor((score / 100) * 70) },
      { label: "Podium", value: Math.floor((score / 100) * 90) },
      { label: "Top 5", value: 100 },
    ],
  };
}

// ---------------------
// UI PAGE
// ---------------------
export default function PredictorPage() {
  const [mode, setMode] = useState<"single" | "compare">("single");

  const [driverA, setDriverA] = useState<Driver>("Hamilton");
  const [driverB, setDriverB] = useState<Driver>("Verstappen");

  const dataA = getPrediction(driverA);
  const dataB = mode === "compare" ? getPrediction(driverB) : null;

  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto text-white">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold">Race Predictor</h1>
        <p className="opacity-70">AI-style prediction using simulated data.</p>

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => setMode("single")}
            className={`px-5 py-2 rounded-xl ${
              mode === "single" ? "bg-red-600" : "bg-white/10"
            }`}
          >
            Single Driver
          </button>

          <button
            onClick={() => setMode("compare")}
            className={`px-5 py-2 rounded-xl ${
              mode === "compare" ? "bg-red-600" : "bg-white/10"
            }`}
          >
            Compare Drivers
          </button>
        </div>
      </motion.div>

      {/* DRIVER SELECTORS */}
      <div className="grid grid-cols-12 gap-6">

        {/* Driver A Picker */}
        <div className="col-span-12 lg:col-span-4 bg-[#161618] p-5 rounded-2xl border border-white/10">
          <p className="text-xs opacity-60 mb-2">Driver A</p>
          <div className="flex flex-wrap gap-2">
            {DRIVERS.map((d) => (
              <button
                key={d}
                onClick={() => setDriverA(d)}
                className={`px-3 py-1 rounded-full text-sm ${
                  driverA === d ? "bg-red-500" : "bg-white/10"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Driver B Picker (compare only) */}
        {mode === "compare" && (
          <div className="col-span-12 lg:col-span-4 bg-[#161618] p-5 rounded-2xl border border-white/10">
            <p className="text-xs opacity-60 mb-2">Driver B</p>
            <div className="flex flex-wrap gap-2">
              {DRIVERS.map((d) => (
                <button
                  key={d}
                  onClick={() => setDriverB(d)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    driverB === d ? "bg-blue-500" : "bg-white/10"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* STATS + CHARTS */}
      <div className="grid grid-cols-12 gap-6 mt-6">

        {/* SUMMARY */}
        {/* ADVANCED PREDICTION SUMMARY */}
<div className="col-span-12 lg:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10 flex flex-col gap-3">
  <h2 className="text-lg mb-2 font-semibold">Prediction Summary</h2>

  <div className="text-sm flex flex-col gap-1">
    <p>🏆 Predicted Winner: <span className="font-bold">{dataA.summary.winner}</span></p>
    <p>📊 Confidence Score: <span className="font-bold">{dataA.summary.confidence}%</span></p>
    <p>📍 Expected Finishing Position: <span className="font-bold">{dataA.positionData[0].position}</span></p>
    <p>⚡ Qualifying Pace Rating: <span className="font-bold">{dataA.paceData[3].pace}</span></p>
    <p>🔥 Race Pace Rating: <span className="font-bold">{dataA.paceData[4].pace}</span></p>
    <p>🛞 Tyre Deg Score: <span className="font-bold">{100 - dataA.paceData[4].pace + 10}</span></p>
    <p>🔧 Reliability Risk: <span className="font-bold">{Math.floor(100 - dataA.summary.confidence / 1.3)}%</span></p>
    <p>⚔️ Overtake Difficulty: <span className="font-bold">{Math.floor(Math.random() * 10) + 1}/10</span></p>
    <p>🧠 Driver Form Score (Last 5 races): <span className="font-bold">{Math.floor(dataA.summary.confidence / 1.2)}</span></p>
  </div>

  <div className="mt-3 text-xs opacity-70 border-t border-white/10 pt-3">
    <p>
      Recommended Strategy:{" "}
      <span className="font-semibold">
        {dataA.paceData[4].pace > 85 ? "Soft → Medium → Hard (2-stop)" : "Medium → Hard (1-stop)"}
      </span>
    </p>
  </div>

  {/* Compare Mode */}
  {mode === "compare" && dataB && (
    <div className="mt-4 border-t border-white/10 pt-4">
      <p className="text-xs opacity-60 mb-1">Head-to-Head</p>
      <p className="text-sm flex gap-1">
        Faster Driver:
        <span className="font-bold">
          {dataA.summary.confidence > dataB.summary.confidence ? driverA : driverB}
        </span>
      </p>
      <p className="text-sm">
        Expected Duel Outcome:{" "}
        <span className="font-bold">
          {dataA.paceData[3].pace > (dataB?.paceData[3].pace ?? 0)
            ? `${driverA} edges ahead in quali`
            : `${driverB} stronger in qualifying`}
        </span>
      </p>
    </div>
  )}
</div>

        {/* Pace chart */}
        <div className="col-span-12 lg:col-span-8 bg-[#161618] p-6 rounded-2xl border border-white/10 h-64">
          <p className="opacity-70 text-sm mb-2">Session Pace</p>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />

              <XAxis dataKey="session" stroke="#888" />
              <YAxis stroke="#888" />

              <Tooltip />

              {/* Driver A */}
              <Line
                type="monotone"
                data={dataA.paceData}
                dataKey="pace"
                stroke="#ff4d4d"
                strokeWidth={2}
              />

              {/* Driver B in compare mode */}
              {mode === "compare" && dataB && (
                <Line
                  type="monotone"
                  data={dataB.paceData}
                  dataKey="pace"
                  stroke="#4da6ff"
                  strokeWidth={2}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Probabilities + finishing position */}
      <div className="grid grid-cols-12 gap-6 mt-6">

        {/* Probabilities */}
        <div className="col-span-12 lg:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10">
          <p className="text-sm opacity-60 mb-3">Finishing Probabilities</p>

          {dataA.probabilities.map((row) => (
            <div key={row.label} className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span>{row.label}</span>
                <span>{row.value}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full">
                <div
                  className="bg-red-600 h-full rounded-full"
                  style={{ width: `${row.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Predicted finishing position */}
        <div className="col-span-12 lg:col-span-8 bg-[#161618] p-6 rounded-2xl border border-white/10 h-64">
          <p className="opacity-70 text-sm mb-2">Predicted Position</p>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataA.positionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="race" stroke="#888" />
              <YAxis reversed stroke="#888" />

              <Bar dataKey="position" fill="#ff4d4d" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </main>
  );
}