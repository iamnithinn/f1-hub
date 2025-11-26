"use client";

import { motion } from "framer-motion";

export default function FerrariPage() {
  return (
    <main className="pt-24 px-6 text-white max-w-6xl mx-auto">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-6 mb-10"
      >
        <img
          src="/team-logos/ferrari-logo.png"
          alt="Ferrari Logo"
          className="h-24 drop-shadow-xl"
        />
        <div>
          <h1 className="text-5xl font-extrabold text-red-500">Scuderia Ferrari HP</h1>
          <p className="opacity-70 text-lg">Maranello, Italy • Founded 1950</p>
        </div>
      </motion.div>

      {/* CAR IMAGE */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src="/cars/ferrari.png"
        className="w-full max-w-3xl mx-auto drop-shadow-[0_20px_40px_rgba(255,0,0,0.3)] mb-12"
        alt="Ferrari SF-25"
      />

      {/* GRID */}
      <div className="grid grid-cols-12 gap-6">

        {/* Overview */}
        <div className="col-span-12 lg:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-2">Team Overview</h2>
          <p className="text-sm opacity-80">Team Principal: Frédéric Vasseur</p>
          <p className="text-sm opacity-80">Base: Maranello, Italy</p>
          <p className="text-sm opacity-80">World Championships: 16</p>
          <p className="text-sm opacity-80">First Race: 1950 Monaco GP</p>
        </div>

        {/* 2025 Form */}
        <div className="col-span-12 lg:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-2">2025 Season Form</h2>
          <p className="text-sm opacity-80">Constructor Position: 1st</p>
          <p className="text-sm opacity-80">Points: 103</p>
          <p className="text-sm opacity-80">Podiums: 4</p>
          <p className="text-sm opacity-80">Average Race Pace: 92</p>
        </div>

        {/* Driving Style */}
        <div className="col-span-12 lg:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-2">SF-25 Strengths</h2>
          <p className="text-sm opacity-80">✔ Strong traction and rotation</p>
          <p className="text-sm opacity-80">✔ Improved tyre wear</p>
          <p className="text-sm opacity-80">✔ Redesign with new aerodynamic concept</p>
          <p className="text-sm opacity-80">✔ High corner entry stability</p>
        </div>

        {/* Drivers */}
        <div className="col-span-12 bg-[#161618] p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-4">2025 Driver Lineup</h2>

          <div className="grid grid-cols-12 gap-6">

            <a href="/drivers/hamilton" className="col-span-12 sm:col-span-6 bg-black/40 p-5 rounded-xl border border-white/5 hover:bg-white/10 transition">
              <img src="/drivers/hamilton.png" className="h-32 mx-auto" />
              <h3 className="text-center text-lg mt-2 font-semibold">Lewis Hamilton</h3>
              <p className="text-center opacity-60 text-sm">#44 • 7x World Champion</p>
            </a>

            <a href="/drivers/leclerc" className="col-span-12 sm:col-span-6 bg-black/40 p-5 rounded-xl border border-white/5 hover:bg-white/10 transition">
              <img src="/drivers/leclerc.png" className="h-32 mx-auto" />
              <h3 className="text-center text-lg mt-2 font-semibold">Charles Leclerc</h3>
              <p className="text-center opacity-60 text-sm">#16 • Elite Qualifier</p>
            </a>

          </div>
        </div>

      </div>
    </main>
  );
}