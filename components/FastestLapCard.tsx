"use client";

import { motion } from "framer-motion";

export function FastestLapCard() {
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
      <p className="text-xs uppercase opacity-60">Fastest lap · Bahrain</p>

      <div className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <span>Max Verstappen</span>
          <span>1:30.188</span>
        </div>
        <div className="flex justify-between">
          <span>Lewis Hamilton</span>
          <span>1:30.224</span>
        </div>
      </div>

      <div className="mt-2">
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-1">
          <div className="h-full bg-red-600 w-4/5" />
        </div>
        <p className="text-[11px] opacity-60">
          Hamilton was +0.036s off Verstappen&apos;s fastest lap.
        </p>
      </div>
    </motion.div>
  );
}