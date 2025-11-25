"use client";

import { motion } from "framer-motion";
import { TEAM_COLORS } from "./teamColors";

const CONSTRUCTOR_STANDINGS = [
  { pos: 1, name: "Scuderia Ferrari HP", id: "ferrari", points: 102 },
  { pos: 2, name: "Oracle Red Bull Racing", id: "redbull", points: 99 },
  { pos: 3, name: "McLaren F1 Team", id: "mclaren", points: 68 },
  { pos: 4, name: "Mercedes-AMG Petronas", id: "mercedes", points: 60 },
  { pos: 5, name: "Aston Martin Aramco", id: "astonmartin", points: 39 },
];

export function ConstructorStandingsCard() {
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
      <p className="text-xs uppercase opacity-60">Constructor standings</p>

      <div className="flex flex-col gap-2">
        {CONSTRUCTOR_STANDINGS.map((t) => (
          <div
            key={t.pos}
            className="
              flex items-center justify-between 
              bg-black/40 border border-white/5 
              rounded-xl px-3 py-2
            "
          >
            <div className="flex items-center gap-2">
              <span className="text-xs opacity-60 w-5">#{t.pos}</span>
              <p className="text-sm font-semibold">{t.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-2 rounded-full"
                style={{ backgroundColor: TEAM_COLORS[t.id] }}
              />
              <span className="text-sm font-semibold">{t.points}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}