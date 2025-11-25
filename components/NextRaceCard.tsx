"use client";

import { motion } from "framer-motion";

export function NextRaceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        rounded-2xl bg-[#161618] border border-white/10
        shadow-lg shadow-black/30 p-5
        flex flex-col gap-3
      "
    >
      <p className="text-xs uppercase opacity-60">Next race</p>

      <h2 className="text-lg font-semibold">Bahrain Grand Prix</h2>
      <p className="text-xs opacity-60">
        Bahrain International Circuit · Sakhir
      </p>

      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-bold">03</span>
        <span className="text-xs opacity-70 uppercase">days</span>
        <span className="text-xl font-semibold ml-3">12</span>
        <span className="text-xs opacity-70 uppercase">hours</span>
      </div>

      <p className="text-xs opacity-60 mt-1">
        Lights out: Sunday · 10:30 PM IST (placeholder)
      </p>
    </motion.div>
  );
}