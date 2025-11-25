"use client";

import { motion } from "framer-motion";

const LAST_RACE = {
  name: "Australian Grand Prix",
  top3: [
    { pos: 1, name: "Lewis Hamilton", team: "Ferrari" },
    { pos: 2, name: "Max Verstappen", team: "Red Bull" },
    { pos: 3, name: "Lando Norris", team: "McLaren" },
  ],
  favourite: {
    pos: 1,
    name: "Lewis Hamilton",
    gain: "+2 positions",
  },
};

export function LastRaceResultsCard() {
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
      <p className="text-xs uppercase opacity-60">
        Last race · {LAST_RACE.name}
      </p>

      <div className="flex flex-col gap-2 text-sm">
        {LAST_RACE.top3.map((r) => (
          <div
            key={r.pos}
            className="flex items-center justify-between bg-black/40 border border-white/5 rounded-xl px-3 py-2"
          >
            <span className="text-xs opacity-60 w-5">P{r.pos}</span>
            <span className="flex-1">{r.name}</span>
            <span className="text-xs opacity-60">{r.team}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 text-xs">
        <p className="opacity-60">Favourite driver result</p>
        <p className="text-sm font-semibold">
          {LAST_RACE.favourite.name} · P{LAST_RACE.favourite.pos} ·{" "}
          <span className="text-green-400">{LAST_RACE.favourite.gain}</span>
        </p>
      </div>
    </motion.div>
  );
}