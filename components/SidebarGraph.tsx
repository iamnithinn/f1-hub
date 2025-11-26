"use client";

import { motion } from "framer-motion";

export function SidebarGraph() {
  const rounds = ["BAH", "JED", "AUS", "JPN", "CHN", "MIA", "MON", "CAN"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        rounded-2xl 
        bg-[#161618] 
        border border-white/10 
        shadow-lg shadow-black/30
        p-6
        text-white
        flex flex-col items-center
      "
    >
      <p className="text-sm opacity-60 mb-4">Pole Gap Graph</p>

      <div className="flex flex-col gap-3">
        {rounds.map((r) => (
          <div key={r} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span className="text-xs opacity-80">{r}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}