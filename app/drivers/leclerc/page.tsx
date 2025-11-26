"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LeclercPage() {
  return (
    <main className="pt-24 pb-20 px-6 max-w-6xl mx-auto text-white">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative w-full h-80 rounded-2xl overflow-hidden 
          bg-gradient-to-r from-[#C30000] to-[#E10600]
        "
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        <div className="relative z-10 h-full flex flex-col justify-center px-10">
          <p className="text-sm opacity-80">2025 Driver Profile</p>

          <h1 className="text-5xl font-extrabold leading-tight">
            Charles <br /> Leclerc
          </h1>

          <p className="text-lg mt-2 font-semibold opacity-90">
            #16 · Scuderia Ferrari HP · 🇲🇨 Monaco
          </p>
        </div>

        <Image
          src="/drivers/leclerc.png"
          alt="Charles Leclerc"
          width={500}
          height={500}
          className="absolute bottom-0 right-0 h-full w-auto object-contain drop-shadow-[0_8px_25px_rgba(0,0,0,0.8)] translate-x-4"
        />
      </motion.div>

      <div className="grid grid-cols-12 gap-6 mt-10">

        {/* STATS */}
        <StatCard
          title="Career Stats"
          delay={0.3}
          stats={[
            ["Race Wins", "5"],
            ["Podiums", "35+"],
            ["Poles", "24"],
            ["Fastest Laps", "10"],
            ["Starts", "150+"],
            ["Debut", "2018"],
          ]}
        />

        {/* SEASON SUMMARY */}
        <StatCard
          title="2025 Season Summary"
          delay={0.5}
          stats={[
            ["Points", "48"],
            ["Wins", "1"],
            ["Podiums", "3"],
            ["Average Finish", "3.0"],
            ["DNFs", "0"],
            ["Quali vs Teammate", "3–4 (Hamilton)"],
            ["Race vs Teammate", "2–5 (Hamilton)"],
          ]}
        />

        {/* DRIVING STYLE */}
        <ListCard
          title="Driving Style & Strengths"
          delay={0.7}
          items={[
            "Aggressive qualifying pace",
            "Strong trail braking ability",
            "Excellent rotation in low-speed corners",
            "High adaptability to setup changes",
            "Very quick single-lap form",
            "Calm under pressure in wheel-to-wheel battles",
          ]}
        />

        {/* COMPARISON */}
        <ComparisonCard
          title="Teammate Comparison — Leclerc vs Hamilton (2025)"
          delay={0.9}
          left={[
            ["Qualifying", "3"],
            ["Race Results", "2"],
            ["Avg Pace Delta", "-0.06s"],
            ["Overtakes Completed", "17"],
            ["Tyre Wear Index", "Medium"],
          ]}
          right={[
            ["Qualifying", "4"],
            ["Race Results", "5"],
            ["Avg Pace Delta", "+0.06s"],
            ["Overtakes Completed", "21"],
            ["Tyre Wear Index", "Low"],
          ]}
        />
      </div>
    </main>
  );
}

/* Reusable Components */
function StatCard({ title, delay, stats }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="col-span-12 lg:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10 shadow-lg shadow-black/40"
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex flex-col gap-3 text-sm">
        {stats.map(([label, value]: any) => (
          <div key={label} className="flex justify-between opacity-90">
            <span>{label}</span>
            <span className="font-semibold">{value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ListCard({ title, delay, items }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="col-span-12 lg:col-span-4 bg-[#161618] p-6 rounded-2xl border border-white/10 shadow-lg shadow-black/40"
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <ul className="list-disc pl-5 text-sm opacity-90 space-y-2">
        {items.map((item: any, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function ComparisonCard({ title, delay, left, right }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="col-span-12 bg-[#161618] p-6 rounded-2xl border border-white/10 shadow-lg shadow-black/40"
    >
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <div className="grid grid-cols-2 text-sm">
        {/* Left */}
        <div className="flex flex-col gap-2 border-r border-white/10 pr-6">
          {left.map(([label, value]: any) => (
            <div key={label} className="flex justify-between opacity-90">
              <span>{label}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="flex flex-col gap-2 pl-6">
          {right.map(([label, value]: any) => (
            <div key={label} className="flex justify-between opacity-90">
              <span>{label}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}