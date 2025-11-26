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
        w-full
        rounded-2xl 
        overflow-hidden
        bg-gradient-to-r from-[#C30000] to-[#E10600]
        p-6
        flex
        items-center
      "
    >
      {/* TEXT */}
      <div className="flex flex-col text-white z-10 max-w-[55%]">
        <h2 className="text-2xl font-bold">Ferrari SF-25</h2>
        <p className="text-sm opacity-80 mt-1">2025 Scuderia Ferrari HP</p>
        <p className="text-sm opacity-70 mt-2">
          The Ferrari SF-25 is the new 2025 Formula 1 car, built with updated
          aerodynamics and a darker red livery.
        </p>
      </div>

      {/* CAR IMAGE */}
      <img
        src="/cars/ferrari.png"
        alt="Ferrari SF-25"
        className="
          absolute
          bottom-0 right-0
          h-40 
          object-contain
          drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]
          translate-x-4
        "
      />
    </motion.div>
  );
}