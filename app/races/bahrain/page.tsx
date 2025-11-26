"use client";

import { motion } from "framer-motion";

export default function BahrainTrackPage() {
  return (
    <main className="pt-24 px-6 text-white max-w-5xl mx-auto">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-6 mb-10"
      >
        <img src="/flags/bahrain.png" alt="Bahrain Flag" className="h-16 rounded-md" />
        <div>
          <h1 className="text-5xl font-extrabold">Bahrain International Circuit</h1>
          <p className="opacity-60">Sakhir • First Race: 2004</p>
        </div>
      </motion.div>

      {/* TRACK MAP */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src="/tracks/bahrain.png"
        className="w-full max-w-xl mx-auto drop-shadow-[0_20px_40px_rgba(255,255,255,0.12)] mb-12"
        alt="Bahrain Track Map"
      />

      <div className="grid grid-cols-12 gap-6">

        {/* Stats */}
        <div className="col-span-12 md:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-3">Track Stats</h2>
          <p className="text-sm opacity-80">Length: 5.412 km</p>
          <p className="text-sm opacity-80">Laps: 57</p>
          <p className="text-sm opacity-80">Race Distance: 308.238 km</p>
          <p className="text-sm opacity-80">Corners: 15</p>
          <p className="text-sm opacity-80">DRS Zones: 3</p>
        </div>

        {/* Characteristics */}
        <div className="col-span-12 md:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-3">Characteristics</h2>
          <p className="text-sm opacity-80">✔ High braking demand</p>
          <p className="text-sm opacity-80">✔ Medium tyre degradation</p>
          <p className="text-sm opacity-80">✔ Heavy traction zones</p>
          <p className="text-sm opacity-80">✔ High-speed turns</p>
        </div>

        {/* Weather */}
        <div className="col-span-12 md:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-3">Weather</h2>
          <p className="text-sm opacity-80">Temperature: 28–34°C</p>
          <p className="text-sm opacity-80">Wind: Moderate</p>
          <p className="text-sm opacity-80">Rain Chance: <span className="text-red-400">Very Low</span></p>
          <p className="text-sm opacity-80">Humidity: ~55%</p>
        </div>

        {/* Tyres */}
        <div className="col-span-12 bg-[#161618] p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-4">Tyre Strategy</h2>
          <p className="text-sm opacity-80 mb-3">Pirelli Compounds: C1 (Hard), C2 (Medium), C3 (Soft)</p>
          <p className="text-sm opacity-80">Common Strategies:</p>
          <p className="text-sm opacity-70 mt-1">✔ 2-stop: Soft → Medium → Medium</p>
          <p className="text-sm opacity-70">✔ 1-stop: Medium → Hard</p>
        </div>

        {/* Winners */}
        <div className="col-span-12 bg-[#161618] p-6 rounded-2xl border border-white/10 mt-4">
          <h2 className="text-xl font-semibold mb-4">Recent Winners</h2>
          <ul className="opacity-80 text-sm space-y-1">
            <li>2024 — Max Verstappen</li>
            <li>2023 — Max Verstappen</li>
            <li>2022 — Charles Leclerc</li>
            <li>2021 — Lewis Hamilton</li>
          </ul>
        </div>

      </div>
    </main>
  );
}