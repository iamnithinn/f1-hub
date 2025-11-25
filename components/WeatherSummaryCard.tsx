"use client";

import { motion } from "framer-motion";

export function WeatherSummaryCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        rounded-2xl bg-[#161618] border border-white/10
        shadow-lg shadow-black/30 p-5 flex flex-col gap-3
      "
    >
      <p className="text-xs uppercase opacity-60">Weather · Bahrain GP</p>
      <div className="flex justify-between text-sm">
        <div>
          <p className="opacity-70">Air temp</p>
          <p className="font-semibold">27°C</p>
        </div>
        <div>
          <p className="opacity-70">Track temp</p>
          <p className="font-semibold">38°C</p>
        </div>
        <div>
          <p className="opacity-70">Wind</p>
          <p className="font-semibold">9 km/h</p>
        </div>
      </div>
      <div className="flex justify-between text-xs opacity-70 mt-2">
        <span>Humidity: 32%</span>
        <span>Rain: &lt;1%</span>
        <span>Session: Night</span>
      </div>
      <p className="text-[11px] opacity-60 mt-1">
        Hot night race · higher rear tyre degradation expected.
      </p>
    </motion.div>
  );
}