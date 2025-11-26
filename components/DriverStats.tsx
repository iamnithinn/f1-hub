"use client";

import { motion } from "framer-motion";

export function DriverStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        rounded-2xl 
        bg-[#161618] 
        border border-white/10 
        shadow-lg shadow-black/30
        p-5
        text-white
      "
    >
      <h2 className="text-lg font-semibold mb-4">Lewis Hamilton — Stats</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* LEFT */}
        <div>
          <p className="text-sm opacity-60 mb-2">Predicted Positions</p>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between p-2 bg-black/30 rounded-lg">
              <span>FP1</span> <span className="font-semibold">3rd</span>
            </div>
            <div className="flex justify-between p-2 bg-black/30 rounded-lg">
              <span>FP2</span> <span className="font-semibold">2nd</span>
            </div>
            <div className="flex justify-between p-2 bg-black/30 rounded-lg">
              <span>FP3</span> <span className="font-semibold">1st</span>
            </div>
            <div className="flex justify-between p-2 bg-black/30 rounded-lg">
              <span>Qualifying</span> <span className="font-semibold">1st</span>
            </div>
            <div className="flex justify-between p-2 bg-black/30 rounded-lg">
              <span>Race</span> <span className="font-semibold">1st</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p className="text-sm opacity-60 mb-2">Recent Races</p>

          <div className="space-y-2 text-sm">
            <div className="bg-black/30 rounded-lg p-2">
              <p className="font-semibold">Bahrain GP</p>
              <p className="opacity-70 text-xs">Started: P2 → Finished: P1</p>
            </div>
            <div className="bg-black/30 rounded-lg p-2">
              <p className="font-semibold">Jeddah GP</p>
              <p className="opacity-70 text-xs">Started: P5 → Finished: P3</p>
            </div>
            <div className="bg-black/30 rounded-lg p-2">
              <p className="font-semibold">Australia GP</p>
              <p className="opacity-70 text-xs">Started: P4 → Finished: P2</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}