"use client";

import { motion } from "framer-motion";

export function SidebarGraph() {
  const races = [
    "BAH",
    "JED",
    "AUS",
    "JPN",
    "CHN",
    "MIA",
    "MON",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        h-64
        rounded-2xl 
        bg-[#161618] 
        border border-white/5 
        shadow-lg shadow-black/20
        p-6
        flex
        flex-col
        text-white
        items-center
        min-h-[340px]
        gap-4
      "
    >
      <p className="text-sm opacity-60 mb-3">Pole Gap Graph</p>

      <div className="relative flex flex-col items-center h-full">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-white/10"></div>

        {/* Race dots */}
        {races.map((race, index) => (
          <div key={index} className="flex flex-col items-center mb-2">
            {/* Dot */}
            <div className="w-3 h-3 bg-white rounded-full z-10"></div>

            {/* Label */}
            <span className="text-[10px] opacity-70 mt-1">{race}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}