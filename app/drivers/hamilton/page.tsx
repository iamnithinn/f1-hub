"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HamiltonPage() {
  return (
    <main className="pt-24 pb-20 px-6 max-w-6xl mx-auto text-white">

      {/* ===========================
          A. HERO SECTION
      ============================ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative w-full h-80 rounded-2xl overflow-hidden 
          bg-gradient-to-r from-[#C30000] to-[#E10600]
        "
      >
        {/* blurred overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        {/* driver info */}
        <div className="relative z-10 h-full flex flex-col justify-center px-10">
          <p className="text-sm opacity-80">2025 Driver Profile</p>

          <h1 className="text-5xl font-extrabold leading-tight">
            Lewis <br /> Hamilton
          </h1>

          <p className="text-lg mt-2 font-semibold opacity-90">
            #44 · Scuderia Ferrari HP · 🇬🇧 United Kingdom
          </p>
        </div>

        {/* Driver image */}
        <Image
          src="/drivers/hamilton.png"
          alt="Lewis Hamilton"
          width={500}
          height={500}
          className="
            absolute bottom-0 right-0 h-full w-auto 
            object-contain drop-shadow-[0_8px_25px_rgba(0,0,0,0.8)]
            translate-x-4
          "
        />
      </motion.div>

      <div className="grid grid-cols-12 gap-6 mt-10">

        {/* ===========================
            B. CAREER STATS
        ============================ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="col-span-12 lg:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10 shadow-lg shadow-black/40"
        >
          <h2 className="text-xl font-bold mb-4">Career Stats</h2>

          <div className="flex flex-col gap-3 text-sm">
            <Stat label="World Championships" value="7" />
            <Stat label="Race Wins" value="103" />
            <Stat label="Podiums" value="201" />
            <Stat label="Pole Positions" value="104" />
            <Stat label="Fastest Laps" value="65" />
            <Stat label="Career Starts" value="350+" />
            <Stat label="Debut Year" value="2007" />
          </div>
        </motion.div>

        {/* ===========================
            G. 2025 SEASON SUMMARY
        ============================ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="col-span-12 lg:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10 shadow-lg shadow-black/40"
        >
          <h2 className="text-xl font-bold mb-4">2025 Season Summary</h2>

          <div className="flex flex-col gap-3 text-sm">
            <Stat label="Points" value="54" />
            <Stat label="Wins" value="2" />
            <Stat label="Podiums" value="4" />
            <Stat label="Average Finish" value="2.1" />
            <Stat label="DNFs" value="0" />
            <Stat label="Quali vs Teammate" value="4–3 (Leclerc)" />
            <Stat label="Race vs Teammate" value="5–2 (Leclerc)" />
          </div>
        </motion.div>

        {/* ===========================
            D. DRIVING STYLE & STRENGTHS
        ============================ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="col-span-12 lg:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10 shadow-lg shadow-black/40"
        >
          <h2 className="text-xl font-bold mb-4">Driving Style & Strengths</h2>

          <ul className="list-disc pl-5 text-sm opacity-90 space-y-2">
            <li>Elite tyre management in long stints</li>
            <li>Exceptionally strong in wet conditions</li>
            <li>High-precision qualifying laps</li>
            <li>Consistent race pace with low degradation</li>
            <li>Excellent overtaking judgement & defensive driving</li>
            <li>Strong adaptability to changing track conditions</li>
          </ul>
        </motion.div>

        {/* ===========================
            J. TEAMMATE COMPARISON
        ============================ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="col-span-12 bg-[#161618] p-6 rounded-2xl border border-white/10 shadow-lg shadow-black/40"
        >
          <h2 className="text-xl font-bold mb-4">Teammate Comparison — Hamilton vs Leclerc (2025)</h2>

          <div className="grid grid-cols-2 text-sm">
            {/* Hamilton */}
            <div className="flex flex-col gap-2 border-r border-white/10 pr-6">
              <Comp label="Qualifying" a="4" b="3" />
              <Comp label="Race Results" a="5" b="2" />
              <Comp label="Avg Pace Delta" a="+0.06s" b="" />
              <Comp label="Overtakes Completed" a="21" b="" />
              <Comp label="Tyre Wear Index" a="Low" b="" />
            </div>

            {/* Leclerc */}
            <div className="flex flex-col gap-2 pl-6">
              <Comp label="Qualifying" a="" b="3" />
              <Comp label="Race Results" a="" b="2" />
              <Comp label="Avg Pace Delta" a="" b="-0.06s" />
              <Comp label="Overtakes Completed" a="" b="17" />
              <Comp label="Tyre Wear Index" a="" b="Medium" />
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}

/* -------------------------------------
   Small Reusable Components
------------------------------------- */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between opacity-90">
      <span>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function Comp({ label, a, b }: { label: string; a: string; b: string }) {
  return (
    <div className="flex justify-between opacity-90">
      <span>{label}</span>
      <span className="font-semibold">
        {a && b ? `${a} — ${b}` : a ? a : b}
      </span>
    </div>
  );
}