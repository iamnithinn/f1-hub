"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VerstappenPage() {
  return (
    <main className="pt-24 pb-20 px-6 max-w-6xl mx-auto text-white">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          relative w-full h-80 rounded-2xl overflow-hidden 
          bg-gradient-to-r from-[#002EFF] to-[#1E41FF]
        "
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

        <div className="relative z-10 h-full flex flex-col justify-center px-10">
          <p className="text-sm opacity-80">2025 Driver Profile</p>

          <h1 className="text-5xl font-extrabold leading-tight">
            Max <br /> Verstappen
          </h1>

          <p className="text-lg mt-2 font-semibold opacity-90">
            #1 · Oracle Red Bull Racing · 🇳🇱 Netherlands
          </p>
        </div>

        <Image
          src="/drivers/verstappen.png"
          alt="Max Verstappen"
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
            ["World Championships", "3"],
            ["Race Wins", "60+"],
            ["Podiums", "90+"],
            ["Poles", "35+"],
            ["Fastest Laps", "30+"],
            ["Debut", "2015"],
          ]}
        />

        {/* SEASON SUMMARY */}
        <StatCard
          title="2025 Season Summary"
          delay={0.5}
          stats={[
            ["Points", "62"],
            ["Wins", "3"],
            ["Podiums", "4"],
            ["Avg Finish", "1.8"],
            ["DNFs", "0"],
            ["Quali vs Teammate", "6–1"],
            ["Race vs Teammate", "6–1"],
          ]}
        />

        {/* DRIVING STYLE */}
        <ListCard
          title="Driving Style & Strengths"
          delay={0.7}
          items={[
            "Unmatched consistency on long runs",
            "Aggressive but controlled corner entry",
            "Exceptional tyre preservation in hot conditions",
            "Fastest high-speed corner driver on the grid",
            "Incredible racecraft under pressure",
            "One of the best defensive drivers in F1 history",
          ]}
        />

        {/* COMPARISON */}
        <ComparisonCard
          title="Teammate Comparison — Verstappen vs Tsunoda (2025)"
          delay={0.9}
          left={[
            ["Qualifying", "6"],
            ["Race Results", "6"],
            ["Avg Pace Delta", "+0.20s"],
            ["Overtakes Completed", "14"],
            ["Tyre Wear", "Low"],
          ]}
          right={[
            ["Qualifying", "1"],
            ["Race Results", "1"],
            ["Avg Pace Delta", "-0.20s"],
            ["Overtakes Completed", "9"],
            ["Tyre Wear", "High"],
          ]}
        />
      </div>
    </main>
  );
}

/* Reuse the same components as Leclerc page */
const StatCard = (props: any) => LeclercPageComponents.StatCard(props);
const ListCard = (props: any) => LeclercPageComponents.ListCard(props);
const ComparisonCard = (props: any) => LeclercPageComponents.ComparisonCard(props);

const LeclercPageComponents = {
  StatCard({ title, delay, stats }: any) {
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
  },
  ListCard({ title, delay, items }: any) {
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
  },
  ComparisonCard({ title, delay, left, right }: any) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.5 }}
        className="col-span-12 bg-[#161618] p-6 rounded-2xl border border-white/10 shadow-lg shadow-black/40"
      >
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        <div className="grid grid-cols-2 text-sm">
          <div className="flex flex-col gap-2 border-r border-white/10 pr-6">
            {left.map(([label, value]: any) => (
              <div key={label} className="flex justify-between opacity-90">
                <span>{label}</span>
                <span className="font-semibold">{value}</span>
              </div>
            ))}
          </div>

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
  },
};