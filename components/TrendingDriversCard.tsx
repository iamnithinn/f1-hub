"use client";

import { motion } from "framer-motion";

const TRENDING = [
  { name: "Yuki Tsunoda", change: "+12%", direction: "up" },
  { name: "Oscar Piastri", change: "+9%", direction: "up" },
  { name: "Fernando Alonso", change: "-4%", direction: "down" },
  { name: "Lewis Hamilton", change: "+15%", direction: "up" },
];

export function TrendingDriversCard() {
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
      <p className="text-xs uppercase opacity-60">Trending drivers</p>

      <div className="flex flex-col gap-2 text-sm">
        {TRENDING.map((d) => (
          <div
            key={d.name}
            className="flex items-center justify-between bg-black/40 border border-white/5 rounded-xl px-3 py-2"
          >
            <span>{d.name}</span>
            <span
              className={
                "text-xs font-semibold " +
                (d.direction === "up" ? "text-green-400" : "text-red-400")
              }
            >
              {d.change}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}