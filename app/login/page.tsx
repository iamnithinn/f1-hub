"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e: any) {
  e.preventDefault();
  setError("");

  const { data, error: loginError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (loginError) {
    setError(loginError.message);
    return;
  }

  // 🔥 After login → go to splash screen
  router.push("/splash");
}
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#161618] p-8 rounded-2xl border border-white/10 shadow-xl"
      >
        {/* F1 Logo */}
        <motion.img
          src="/f1-logo.png"
          alt="F1 Logo"
          className="h-16 mx-auto mb-6 drop-shadow-[0_0_8px_rgba(255,0,0,0.4)]"
          whileHover={{ scale: 1.05 }}
        />

        <h1 className="text-2xl font-bold text-center mb-2">Welcome Back</h1>
        <p className="text-center opacity-50 mb-6">
          Login to your personalised F1 dashboard
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-lg bg-black border border-white/10"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 rounded-lg bg-black border border-white/10"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-semibold mt-2"
          >
            Login
          </button>

          <p
            className="text-sm text-center opacity-50 cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Don&apos;t have an account? Sign up
          </p>
        </form>
      </motion.div>
    </div>
  );
}