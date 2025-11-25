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
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const DRIVERS = ["Hamilton", "Leclerc", "Verstappen", "Tsunoda"];

// 1) Session pace index per driver (0–100, higher = faster)
const paceDataByDriver: Record<string, { session: string; pace: number }[]> = {
  Hamilton: [
    { session: "FP1", pace: 92 },
    { session: "FP2", pace: 94 },
    { session: "FP3", pace: 93 },
    { session: "Quali", pace: 97 },
    { session: "Race", pace: 96 },
  ],
  Leclerc: [
    { session: "FP1", pace: 91 },
    { session: "FP2", pace: 93 },
    { session: "FP3", pace: 95 },
    { session: "Quali", pace: 96 },
    { session: "Race", pace: 95 },
  ],
  Verstappen: [
    { session: "FP1", pace: 94 },
    { session: "FP2", pace: 96 },
    { session: "FP3", pace: 97 },
    { session: "Quali", pace: 98 },
    { session: "Race", pace: 99 },
  ],
  Tsunoda: [
    { session: "FP1", pace: 88 },
    { session: "FP2", pace: 90 },
    { session: "FP3", pace: 91 },
    { session: "Quali", pace: 92 },
    { session: "Race", pace: 93 },
  ],
};

// 2) Predicted finishing position for next 3 races
const predictedPositionsByDriver: Record<
  string,
  { race: string; position: number }[]
> = {
  Hamilton: [
    { race: "Bahrain", position: 1 },
    { race: "Jeddah", position: 2 },
    { race: "Australia", position: 1 },
  ],
  Leclerc: [
    { race: "Bahrain", position: 3 },
    { race: "Jeddah", position: 1 },
    { race: "Australia", position: 2 },
  ],
  Verstappen: [
    { race: "Bahrain", position: 2 },
    { race: "Jeddah", position: 3 },
    { race: "Australia", position: 3 },
  ],
  Tsunoda: [
    { race: "Bahrain", position: 6 },
    { race: "Jeddah", position: 5 },
    { race: "Australia", position: 4 },
  ],
};

// 3) Race pace delta vs baseline (Verstappen) – negative = slower, positive = faster
const paceDeltaByDriver: Record<
  string,
  { lap: number; delta: number }[]
> = {
  Hamilton: [
    { lap: 5, delta: -0.12 },
    { lap: 10, delta: -0.08 },
    { lap: 15, delta: 0.02 },
    { lap: 20, delta: 0.05 },
    { lap: 25, delta: 0.03 },
  ],
  Leclerc: [
    { lap: 5, delta: -0.18 },
    { lap: 10, delta: -0.10 },
    { lap: 15, delta: -0.04 },
    { lap: 20, delta: 0.0 },
    { lap: 25, delta: 0.01 },
  ],
  Verstappen: [
    { lap: 5, delta: 0 },
    { lap: 10, delta: 0 },
    { lap: 15, delta: 0 },
    { lap: 20, delta: 0 },
    { lap: 25, delta: 0 },
  ],
  Tsunoda: [
    { lap: 5, delta: -0.35 },
    { lap: 10, delta: -0.28 },
    { lap: 15, delta: -0.22 },
    { lap: 20, delta: -0.18 },
    { lap: 25, delta: -0.15 },
  ],
};

// 4) Tyre degradation: higher = more wear
const tyreDegradationByDriver: Record<
  string,
  { compound: string; wear: number }[]
> = {
  Hamilton: [
    { compound: "Soft", wear: 78 },
    { compound: "Medium", wear: 55 },
    { compound: "Hard", wear: 38 },
  ],
  Leclerc: [
    { compound: "Soft", wear: 80 },
    { compound: "Medium", wear: 57 },
    { compound: "Hard", wear: 40 },
  ],
  Verstappen: [
    { compound: "Soft", wear: 72 },
    { compound: "Medium", wear: 50 },
    { compound: "Hard", wear: 35 },
  ],
  Tsunoda: [
    { compound: "Soft", wear: 85 },
    { compound: "Medium", wear: 62 },
    { compound: "Hard", wear: 45 },
  ],
};

// 5) Sector performance radar data
const sectorPerformanceByDriver: Record<
  string,
  { sector: string; value: number }[]
> = {
  Hamilton: [
    { sector: "S1", value: 88 },
    { sector: "S2", value: 92 },
    { sector: "S3", value: 90 },
  ],
  Leclerc: [
    { sector: "S1", value: 86 },
    { sector: "S2", value: 90 },
    { sector: "S3", value: 91 },
  ],
  Verstappen: [
    { sector: "S1", value: 92 },
    { sector: "S2", value: 95 },
    { sector: "S3", value: 94 },
  ],
  Tsunoda: [
    { sector: "S1", value: 80 },
    { sector: "S2", value: 83 },
    { sector: "S3", value: 82 },
  ],
};

// 6) Prediction summary (could be ML output later)
const predictionSummaryByDriver: Record<
  string,
  { winner: string; podium: string[]; confidence: number }
> = {
  Hamilton: {
    winner: "Lewis Hamilton",
    podium: ["Hamilton", "Verstappen", "Leclerc"],
    confidence: 72,
  },
  Leclerc: {
    winner: "Charles Leclerc",
    podium: ["Leclerc", "Hamilton", "Verstappen"],
    confidence: 68,
  },
  Verstappen: {
    winner: "Max Verstappen",
    podium: ["Verstappen", "Hamilton", "Leclerc"],
    confidence: 80,
  },
  Tsunoda: {
    winner: "Max Verstappen",
    podium: ["Verstappen", "Hamilton", "Leclerc"],
    confidence: 55,
  },
};

// 7) Position probability (could be from ML)
const positionProbabilitiesByDriver: Record<
  string,
  { label: string; value: number }[]
> = {
  Hamilton: [
    { label: "Win", value: 42 },
    { label: "Podium", value: 68 },
    { label: "Top 5", value: 91 },
  ],
  Leclerc: [
    { label: "Win", value: 36 },
    { label: "Podium", value: 62 },
    { label: "Top 5", value: 88 },
  ],
  Verstappen: [
    { label: "Win", value: 55 },
    { label: "Podium", value: 78 },
    { label: "Top 5", value: 94 },
  ],
  Tsunoda: [
    { label: "Win", value: 8 },
    { label: "Podium", value: 18 },
    { label: "Top 5", value: 40 },
  ],
};

// 8) Battle forecast: Hamilton vs someone (dummy)
const battleForecastByDriver: Record<
  string,
  { opponent: string; lines: string[] }
> = {
  Hamilton: {
    opponent: "Leclerc",
    lines: [
      "Race pace: HAM +0.03s/lap",
      "High-speed corners: LEC slightly stronger",
      "Tyre life: HAM manages degradation better on Softs",
      "Starts: LEC average launch, HAM excellent",
    ],
  },
  Leclerc: {
    opponent: "Hamilton",
    lines: [
      "Quali pace: LEC +0.04s in S3",
      "Race pace: almost equal, slight tyre advantage to HAM",
      "Ferrari setup: better rotation in low-speed",
      "Braking: both very strong into heavy stops",
    ],
  },
  Verstappen: {
    opponent: "Hamilton",
    lines: [
      "Race pace: VER +0.08s/lap baseline",
      "Tyre life: very stable degradation on Mediums",
      "Starts: similar, VER slightly better in recent races",
      "ERS deployment: Red Bull slightly more efficient",
    ],
  },
  Tsunoda: {
    opponent: "Leclerc",
    lines: [
      "Race pace: TSU -0.22s/lap vs top 3",
      "Tyre life: aggressive on Soft, better on Medium",
      "Overtaking: strong late braking moves",
      "Quali: potential Q3 if nailed lap",
    ],
  },
};

// 9) Track difficulty widget (static for now)
const trackInfo = {
  name: "Bahrain International Circuit",
  difficulty: 8.2,
  overtaking: 6.1,
  pitDelta: 22.4,
  safetyCarChance: 37,
};

// 10) Car comparison (Ferrari vs Red Bull, dummy)
const carComparison = [
  { metric: "Straight-line speed", ferrari: "+2.1 km/h", redbull: "Baseline" },
  { metric: "High-speed corners", ferrari: "-0.03s", redbull: "Baseline" },
  { metric: "Medium-speed corners", ferrari: "+0.04s", redbull: "Baseline" },
  { metric: "ERS efficiency", ferrari: "+2.5%", redbull: "Baseline" },
  { metric: "Tyre degradation", ferrari: "-3%", redbull: "Baseline" },
];

export default function PredictorPage() {
  const [selectedDriver, setSelectedDriver] = useState<string>("Hamilton");

  const paceData = paceDataByDriver[selectedDriver];
  const positionData = predictedPositionsByDriver[selectedDriver];
  const deltaData = paceDeltaByDriver[selectedDriver];
  const tyreData = tyreDegradationByDriver[selectedDriver];
  const sectorData = sectorPerformanceByDriver[selectedDriver];
  const summary = predictionSummaryByDriver[selectedDriver];
  const probData = positionProbabilitiesByDriver[selectedDriver];
  const battle = battleForecastByDriver[selectedDriver];

  return (
    <main className="pt-24 px-8 max-w-7xl mx-auto text-white">
      {/* HEADER */}
      <header className="mb-8 flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Race Predictor</h1>
        <p className="text-sm opacity-60 max-w-2xl">
            View Basic Statistics and use our Predictor to find out who has the best possibilty of winning the upcoming races.
        </p>
      </header>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT COLUMN — driver picker + summary + probabilities */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          {/* Driver picker */}
          <div className="rounded-2xl bg-[#161618] border border-white/10 shadow-lg shadow-black/30 p-5">
            <p className="text-xs opacity-60 uppercase mb-2">Choose driver</p>
            <div className="flex flex-wrap gap-2">
              {DRIVERS.map((driver) => (
                <motion.button
                  key={driver}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedDriver(driver)}
                  className={`px-3 py-2 rounded-full text-sm ${
                    selectedDriver === driver
                      ? "bg-red-600"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                >
                  {driver}
                </motion.button>
              ))}
            </div>

            <div className="mt-4 text-sm opacity-70">
              <p>
                Showing predicted race pace and finishing positions for{" "}
                <span className="font-semibold opacity-100">
                  {selectedDriver}
                </span>
                .
              </p>
              <p className="mt-1">
                Later, this can be driven by live FastF1 timing & telemetry +
                your ML model.
              </p>
            </div>
          </div>

          {/* Prediction summary card */}
          <div className="rounded-2xl bg-[#161618] border border-white/10 shadow-lg shadow-black/30 p-5 flex flex-col gap-3">
            <p className="text-xs opacity-60 uppercase">Prediction summary</p>
            <p className="text-sm">
              Predicted winner:{" "}
              <span className="font-semibold">{summary.winner}</span>
            </p>
            <p className="text-sm">
              Podium:{" "}
              <span className="opacity-80">
                {summary.podium.join(" · ")}
              </span>
            </p>
            <p className="text-sm">
              Confidence:{" "}
              <span className="font-semibold">{summary.confidence}%</span>
            </p>
            <p className="text-xs opacity-60 mt-1">
              Based on session pace, tyre degradation and sector performance
              (placeholder logic).
            </p>
          </div>

          {/* Probability bars */}
          <div className="rounded-2xl bg-[#161618] border border-white/10 shadow-lg shadow-black/30 p-5 flex flex-col gap-3">
            <p className="text-xs uppercase opacity-60">
              Position probabilities
            </p>
            <div className="flex flex-col gap-2">
              {probData.map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="opacity-70">{row.label}</span>
                    <span>{row.value}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-red-600"
                      style={{ width: `${row.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — main charts */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          {/* Session pace line chart */}
          <div className="rounded-2xl bg-[#161618] border border-white/10 shadow-lg shadow-black/30 p-5 h-64">
            <p className="text-sm opacity-70 mb-2">
              Session pace index (higher = faster)
            </p>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={paceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="session" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111",
                    border: "1px solid #333",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="pace"
                  stroke="#ff4d4d"
                  strokeWidth={2}
                  dot
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Predicted positions bar chart */}
          <div className="rounded-2xl bg-[#161618] border border-white/10 shadow-lg shadow-black/30 p-5 h-64">
            <p className="text-sm opacity-70 mb-2">
              Predicted finishing position (lower = better)
            </p>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={positionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="race" stroke="#888" />
                <YAxis
                  reversed
                  allowDecimals={false}
                  stroke="#888"
                  domain={[1, 10]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111",
                    border: "1px solid #333",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                  }}
                />
                <Legend />
                <Bar dataKey="position" fill="#ff4d4d" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* SECOND ROW — deltas + tyres + sectors */}
      <div className="grid grid-cols-12 gap-6 mt-6">
        {/* Pace delta vs Verstappen */}
        <div className="col-span-12 lg:col-span-4">
          <div className="rounded-2xl bg-[#161618] border border-white/10 shadow-lg shadow-black/30 p-5 h-64">
            <p className="text-sm opacity-70 mb-2">
              Race pace delta vs Verstappen (s/lap)
            </p>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={deltaData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="lap" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111",
                    border: "1px solid #333",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="delta"
                  stroke="#4dd2ff"
                  strokeWidth={2}
                  dot
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tyre degradation */}
        <div className="col-span-12 lg:col-span-4">
          <div className="rounded-2xl bg-[#161618] border border-white/10 shadow-lg shadow-black/30 p-5 h-64">
            <p className="text-sm opacity-70 mb-2">
              Tyre degradation index (higher = more wear)
            </p>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tyreData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="compound" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111",
                    border: "1px solid #333",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                  }}
                />
                <Bar dataKey="wear" fill="#ffb84d" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sector performance radar */}
        <div className="col-span-12 lg:col-span-4">
          <div className="rounded-2xl bg-[#161618] border border-white/10 shadow-lg shadow-black/30 p-5 h-64">
            <p className="text-sm opacity-70 mb-2">
              Sector performance index (S1/S2/S3)
            </p>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={sectorData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="sector" stroke="#888" />
                <PolarRadiusAxis stroke="#555" />
                <Radar
                  name="Performance"
                  dataKey="value"
                  stroke="#ff4d4d"
                  fill="#ff4d4d"
                  fillOpacity={0.5}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* THIRD ROW — strategy / battle / track / car */}
      <div className="grid grid-cols-12 gap-6 mt-6">
        {/* Pit strategy widget */}
        <div className="col-span-12 lg:col-span-4">
          <div className="rounded-2xl bg-[#161618] border border-white/10 shadow-lg shadow-black/30 p-5 flex flex-col gap-3">
            <p className="text-xs uppercase opacity-60">Pit strategy</p>
            <div className="text-sm">
              <p className="opacity-70 mb-1">Optimal strategy:</p>
              <p className="font-semibold">
                2-stop · Soft → Medium → Hard
              </p>
              <p className="text-xs opacity-60 mt-1">
                Pit windows: Lap 14–16, Lap 32–35
              </p>
            </div>
            <div className="text-sm mt-2">
              <p className="opacity-70 mb-1">Alternative strategy:</p>
              <p className="font-semibold">
                1-stop · Medium → Hard
              </p>
              <p className="text-xs opacity-60 mt-1">
                Pit window: Lap 22–26. Lower track position risk, but more tyre
                management required.
              </p>
            </div>
          </div>
        </div>

        {/* Battle forecast */}
        <div className="col-span-12 lg:col-span-4">
          <div className="rounded-2xl bg-[#161618] border border-white/10 shadow-lg shadow-black/30 p-5 flex flex-col gap-3">
            <p className="text-xs uppercase opacity-60">
              Battle forecast
            </p>
            <p className="text-sm">
              Likely head-to-head:{" "}
              <span className="font-semibold">
                {selectedDriver} vs {battle.opponent}
              </span>
            </p>
            <ul className="text-xs opacity-80 list-disc pl-4 space-y-1 mt-1">
              {battle.lines.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Track difficulty + car comparison compact */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <div className="rounded-2xl bg-[#161618] border border-white/10 shadow-lg shadow-black/30 p-5 flex flex-col gap-2">
            <p className="text-xs uppercase opacity-60">Track profile</p>
            <p className="text-sm font-semibold">{trackInfo.name}</p>
            <p className="text-xs opacity-70 mt-1">
              Difficulty: <span className="font-semibold">{trackInfo.difficulty}/10</span>
              <br />
              Overtaking:{" "}
              <span className="font-semibold">{trackInfo.overtaking}/10</span>
              <br />
              Pit delta:{" "}
              <span className="font-semibold">{trackInfo.pitDelta}s</span>
              <br />
              Safety car chance:{" "}
              <span className="font-semibold">
                {trackInfo.safetyCarChance}%
              </span>
            </p>
          </div>

          <div className="rounded-2xl bg-[#161618] border border-white/10 shadow-lg shadow-black/30 p-5 flex flex-col gap-2">
            <p className="text-xs uppercase opacity-60">
              Car comparison · Ferrari vs Red Bull
            </p>
            <div className="flex flex-col gap-1 text-xs">
              {carComparison.map((row) => (
                <div
                  key={row.metric}
                  className="flex justify-between gap-2 bg-black/40 border border-white/5 rounded-xl px-3 py-2"
                >
                  <span className="opacity-80">{row.metric}</span>
                  <div className="text-right">
                    <p className="text-[11px] text-red-300">
                      Ferrari: {row.ferrari}
                    </p>
                    <p className="text-[11px] text-blue-300">
                      Red Bull: {row.redbull}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}