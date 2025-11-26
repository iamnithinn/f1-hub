"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); // 🔥 Go to main homepage
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center bg-black text-white">

      {/* Welcome Text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold tracking-tight mb-10"
      >
        Welcome back, <span className="text-red-600">Nithin</span>
      </motion.h1>

      {/* Loading Dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex gap-3 mt-6"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="w-3 h-3 bg-red-600 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
          className="w-3 h-3 bg-red-600 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
          className="w-3 h-3 bg-red-600 rounded-full"
        />
      </motion.div>

      {/* Branding */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-10 text-sm tracking-wide"
      >
        F1 Hub — Predict • Analyse • Race
      </motion.p>
    </main>
  );
}