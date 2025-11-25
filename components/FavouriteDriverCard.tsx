"use client";

import { motion } from "framer-motion";

export function FavouriteDriverCard() {
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
        bg-gradient-to-r from-[#C30000] to-[#E10600] 
        p-6
        flex
        items-center
      "
    >
      {/* LEFT CONTENT */}
      <div className="flex flex-col text-white z-10">
        <p className="text-sm opacity-80">Leader after round 7</p>

        <h1 className="text-3xl font-bold leading-tight">
          Lewis <br /> Hamilton
        </h1>

        <p className="text-sm mt-1 opacity-90">Scuderia Ferrari HP</p>

        <p className="text-lg mt-2 font-semibold">54 Pts</p>
      </div>

      {/* FULL DRIVER IMAGE (no cropping) */}
      <img
        src="/drivers/hamilton.png"
        alt="Lewis Hamilton"
        className="
          absolute 
          bottom-0
          right-0
          h-full w-80
          object-contain
          drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)]
          translate-x-4
        "
      />
    </motion.div>
  );
}