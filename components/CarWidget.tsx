"use client";

import { motion } from "framer-motion";

export function CarWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative
        h-56
        w-200
        rounded-2xl 
        overflow-hidden
        bg-gradient-to-r from-[#c30000] to-[#e10600]
        p-6
        flex
        items-center
      "
    >
      {/* LEFT TEXT SECTION */}
      <div className="flex flex-col text-white z-10 max-w-[55%]">
        <h2 className="text-2xl font-bold">Ferrari SF-25</h2>

        <p className="text-sm opacity-80 mt-1">
          2025 Scuderia Ferrari HP
        </p>

        <p className="text-sm opacity-75 mt-2">
            The Ferrari SF-25 is the team's new 2025 Formula 1 car, designed with a focus on aerodynamic changes and a new, darker red livery with white accents. 
        </p>
      </div>

      {/* RIGHT IMAGE SECTION — push completely to the right */}
      <img
        src="/cars/ferrari.png"
        alt="Ferrari SF-25"
        className="
          relative
          right-0
          bottom-0
          h-15 w-100
          object-contain
          translate-x-6
          drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)]
        "
      />
    </motion.div>
  );
}



