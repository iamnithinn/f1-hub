"use client";

import { motion } from "framer-motion";

export function TrackPreviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        relative
        rounded-2xl bg-[#161618] border border-white/10
        shadow-lg shadow-black/30 p-5 overflow-hidden
        flex flex-col gap-2
      "
    >
      <p className="text-xs uppercase opacity-60">Next track</p>
      <h2 className="text-lg font-semibold">Bahrain International Circuit</h2>
      <p className="text-xs opacity-60">5.412 km · 15 corners · Night race</p>

      {/* Track outline placeholder – replace img src later */}
      <div className="mt-3 relative h-28">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <span className="text-xs">[ track map goes here ]</span>
        </div>
      </div>

      <p className="text-[11px] opacity-60 mt-1">
        Known for heavy braking zones and traction-limited exits. Great for
        setup comparison.
      </p>
    </motion.div>
  );
}