"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignup(e: any) {
    e.preventDefault();

    // 1️⃣ Create user with email + password
    const { data, error: signupError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signupError) {
      setError(signupError.message);
      return;
    }

    if (!data.user) {
      setError("Signup failed.");
      return;
    }

    // 2️⃣ Create a profile row for this user
    const { error: profileError } = await supabase
      .from("profiles")
      .insert({
        id: data.user.id,            // user.id = profiles.id
        favourite_driver: null,
        favourite_team: null,
      });

    if (profileError) {
      setError(profileError.message);
      return;
    }

    // 3️⃣ Redirect to onboarding
    router.push("/onboarding");
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#161618] p-8 rounded-2xl border border-white/10 shadow-xl"
      >
        {/* Logo */}
        <motion.img
          src="/f1-logo.png"
          alt="F1 Logo"
          className="h-16 mx-auto mb-6 drop-shadow-[0_0_8px_rgba(255,0,0,0.4)]"
          whileHover={{ scale: 1.05 }}
        />

        <h1 className="text-2xl font-bold text-center mb-2">Create Account</h1>
        <p className="text-center opacity-50 mb-6">
          Join the F1 Hub and personalise your dashboard
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            required
            className="px-4 py-3 rounded-lg bg-black border border-white/10"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="px-4 py-3 rounded-lg bg-black border border-white/10"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-semibold mt-2"
          >
            Sign Up
          </button>

          <p
            className="text-sm text-center opacity-50 cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Already have an account? Login
          </p>
        </form>
      </motion.div>
    </div>
  );
}