"use client";

import { motion } from "framer-motion";

export default function RedBullPage() {
  return (
    <main className="pt-24 px-6 text-white max-w-6xl mx-auto">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-6 mb-10"
      >
        <img
          src="/team-logos/redbull-logoo.png"
          alt="Red Bull Logo"
          className="h-24 drop-shadow-xl"
        />
        <div>
          <h1 className="text-5xl font-extrabold text-[#1E41FF]">Oracle Red Bull Racing</h1>
          <p className="opacity-70 text-lg">Milton Keynes, UK • Founded 2005</p>
        </div>
      </motion.div>

      {/* CAR IMAGE */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src="/cars/redbull.png"
        className="w-full max-w-3xl mx-auto drop-shadow-[0_20px_40px_rgba(50,50,255,0.3)] mb-12"
        alt="Red Bull RB21"
      />

      {/* GRID */}
      <div className="grid grid-cols-12 gap-6">

        {/* Overview */}
        <div className="col-span-12 lg:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-2">Team Overview</h2>
          <p className="text-sm opacity-80">Team Principal: Christian Horner</p>
          <p className="text-sm opacity-80">Base: Milton Keynes, UK</p>
          <p className="text-sm opacity-80">World Championships: 6</p>
          <p className="text-sm opacity-80">First Race: 2005 Australian GP</p>
        </div>

        {/* 2025 Form */}
        <div className="col-span-12 lg:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-2">2025 Season Form</h2>
          <p className="text-sm opacity-80">Constructor Position: 2nd</p>
          <p className="text-sm opacity-80">Points: 82</p>
          <p className="text-sm opacity-80">Podiums: 3</p>
          <p className="text-sm opacity-80">Average Race Pace: 94</p>
        </div>

        {/* Strengths */}
        <div className="col-span-12 lg:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-2">RB21 Strengths</h2>
          <p className="text-sm opacity-80">✔ Dominant high-speed cornering</p>
          <p className="text-sm opacity-80">✔ Strong DRS efficiency</p>
          <p className="text-sm opacity-80">✔ Verstappen’s stable braking style suits the car</p>
          <p className="text-sm opacity-80">✔ Top-tier aero efficiency</p>
        </div>

        {/* Drivers */}
        <div className="col-span-12 bg-[#161618] p-6 rounded-2xl border border-white/10">
          <h2 className="text-xl font-semibold mb-4">2025 Driver Lineup</h2>

          <div className="grid grid-cols-12 gap-6">

            <a href="/drivers/verstappen" className="col-span-12 sm:col-span-6 bg-black/40 p-5 rounded-xl border border-white/5 hover:bg-white/10 transition">
              <img src="/drivers/verstappen.png" className="h-32 mx-auto" />
              <h3 className="text-center text-lg mt-2 font-semibold">Max Verstappen</h3>
              <p className="text-center opacity-60 text-sm">#1 • 4x World Champion</p>
            </a>

            <a href="/drivers/tsunoda" className="col-span-12 sm:col-span-6 bg-black/40 p-5 rounded-xl border border-white/5 hover:bg-white/10 transition">
              <img src="/drivers/tsunoda.png" className="h-32 mx-auto" />
              <h3 className="text-center text-lg mt-2 font-semibold">Yuki Tsunoda</h3>
              <p className="text-center opacity-60 text-sm">#22 • Sharp & improving</p>
            </a>

          </div>
        </div>

      </div>
    </main>
  );
}