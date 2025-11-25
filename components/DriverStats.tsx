"use client";

import { motion } from "framer-motion";

export function DriverStats() {
  // Dummy data for now — replace with API results later
  const predictions = [
    { session: "FP1", pos: 3 },
    { session: "FP2", pos: 2 },
    { session: "FP3", pos: 1 },
    { session: "Qualifying", pos: 1 },
    { session: "Race", pos: 1 },
  ];

  const pastRaces = [
    { gp: "Bahrain GP", start: 2, finish: 1 },
    { gp: "Jeddah GP", start: 5, finish: 3 },
    { gp: "Australia GP", start: 4, finish: 2 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        h-64
        rounded-2xl 
        bg-[#161618] border border-white/5 shadow-lg shadow-black/20
        p-6
        flex
        flex-col
        text-white
        min-h-[340px]
        gap-4
      "
    >
      {/* HEADER */}
      <h2 className="text-xl font-semibold mb-3">Lewis Hamilton — Stats</h2>

      <div className="flex w-full h-full gap-6">
        
        {/* LEFT — Predictions */}
        <div className="w-1/2 flex flex-col gap-2">
          <p className="text-sm opacity-60">Predicted Positions</p>

          <div className="mt-1 flex flex-col gap-2">
            {predictions.map((item, index) => (
              <div
                key={index}
                className="flex justify-between 
                bg-[#ffffff08] border border-white/10 
                py-1.5 px-3 rounded-lg"
              >
                <span className="text-sm">{item.session}</span>
                <span className="text-sm font-semibold">
                  {item.pos === 1 ? "1st" : item.pos === 2 ? "2nd" : item.pos === 3 ? "3rd" : `${item.pos}th`}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Past races */}
        <div className="w-1/2 flex flex-col gap-2">
          <p className="text-sm opacity-60">Recent Races</p>

          {pastRaces.map((race, index) => (
            <div
              key={index}
              className="bg-[#ffffff08] border border-white/10 
              p-3 rounded-lg"
            >
              <p className="font-medium text-sm mb-1">{race.gp}</p>
              <p className="text-xs opacity-70">
                Started: P{race.start} → Finished: <span className="font-semibold">P{race.finish}</span>
              </p>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}