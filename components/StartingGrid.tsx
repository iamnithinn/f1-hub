"use client";

import { motion } from "framer-motion";

// Team colors
const teamColors = {
  ferrari: "#DC0000",
  redbull: "#1E41FF",
};

// Driver data (2025 grid)
const grid: { pos: number; code: string; team: "ferrari" | "redbull" }[] = [
  { pos: 1, code: "HAM", team: "ferrari" },
  { pos: 2, code: "LEC", team: "ferrari" },
  { pos: 3, code: "VER", team: "redbull" },
  { pos: 4, code: "TSU", team: "redbull" },
];

export function StartingGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        h-64 
        rounded-2xl 
        bg-[#161618] border border-white/10 shadow-lg shadow-black/40
        p-5
        flex
        flex-col
        justify-start
        min-h-[340px]
        gap-6
      "
    >
      <div className="text-center text-white mb-2">
        <p className="text-sm opacity-60">Upcoming Race Grid</p>
      </div>

      <div className="flex flex-col gap-3">
        {grid.map((driver, index) => {
          const isEven = index % 2 === 1; // To alternate left-right tags

          return (
            <div
              key={driver.pos}
              className="
                flex 
                items-center 
                justify-between
                w-full
              "
            >
              {/* Position Number */}
              <span className="text-white text-xl font-bold">
                {driver.pos}
              </span>

              {/* Slot box */}
              <div
                className="
                  flex 
                  items-center 
                  justify-between
                  bg-[#00000033]
                  backdrop-blur-sm
                  border border-white/10
                  rounded-xl 
                  px-3 
                  py-2
                  w-40
                "
              >
                {/* Driver Tag — alternate side */}
                {isEven ? (
                  <>
                    {/* RIGHT side tag */}
                    <span className="flex-1 text-white/70 text-sm">
                      ●●
                    </span>
                    <div
                      className="px-3 py-1 rounded-md text-white font-semibold"
                      style={{ backgroundColor: teamColors[driver.team] }}
                    >
                      {driver.code}
                    </div>
                  </>
                ) : (
                  <>
                    {/* LEFT side tag */}
                    <div
                      className="px-3 py-1 rounded-md text-white font-semibold"
                      style={{ backgroundColor: teamColors[driver.team] }}
                    >
                      {driver.code}
                    </div>
                    <span className="flex-1 text-white/70 text-sm">
                      ●●●
                    </span>
                  </>
                )}
              </div>

              {/* Dots on far right (like reference) */}
              <span className="text-white/20 text-xl">•</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}