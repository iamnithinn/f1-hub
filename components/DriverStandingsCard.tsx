"use client";

import { motion } from "framer-motion";
import { TEAM_COLORS } from "./teamColors";

const DRIVER_STANDINGS = [
  { pos: 1, name: "Lewis Hamilton", code: "HAM", team: "ferrari", points: 54 },
  { pos: 2, name: "Max Verstappen", code: "VER", team: "redbull", points: 51 },
  { pos: 3, name: "Charles Leclerc", code: "LEC", team: "ferrari", points: 48 },
  { pos: 4, name: "Lando Norris", code: "NOR", team: "mclaren", points: 36 },
  { pos: 5, name: "Fernando Alonso", code: "ALO", team: "astonmartin", points: 28 },
];

export function DriverStandingsCard() {
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
      <p className="text-xs uppercase opacity-60">Driver standings</p>

      <div className="flex flex-col gap-2">
        {DRIVER_STANDINGS.map((d) => (
          <div
            key={d.pos}
            className="
              flex items-center justify-between 
              bg-black/40 border border-white/5 
              rounded-xl px-3 py-2
            "
          >
            <div className="flex items-center gap-2">
              <span className="text-xs opacity-60 w-5">#{d.pos}</span>
              <div>
                <p className="text-sm font-semibold">{d.name}</p>
                <p className="text-[11px] opacity-60">{d.code.toUpperCase()}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-2 rounded-full"
                style={{ backgroundColor: TEAM_COLORS[d.team] }}
              />
              <span className="text-sm font-semibold">{d.points}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}