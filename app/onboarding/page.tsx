"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

type Driver = {
  id: string;
  name: string;
  team: string;
  image: string; // path in /public/drivers
};

type Team = {
  id: string;
  name: string;
  image: string; // path in /public/team-logos
};

/**
 * 🔴 TODO: adjust image filenames to match your actual files
 * Example assumes:
 *  public/drivers/hamilton.png
 *  public/drivers/leclerc.png
 *  public/drivers/verstappen.png
 *  public/drivers/tsunoda.png
 *
 *  public/team-logos/ferrari.png
 *  public/team-logos/redbull.png
 *  public/team-logos/mercedes.png
 *  public/team-logos/mclaren.png
 */

const DRIVERS: Driver[] = [
  {
    id: "hamilton",
    name: "Lewis Hamilton",
    team: "Ferrari",
    image: "/drivers/hamilton.png",
  },
  {
    id: "leclerc",
    name: "Charles Leclerc",
    team: "Ferrari",
    image: "/drivers/leclerc.png",
  },
  {
    id: "verstappen",
    name: "Max Verstappen",
    team: "Red Bull",
    image: "/drivers/verstappen.png",
  },
  {
    id: "tsunoda",
    name: "Yuki Tsunoda",
    team: "Red Bull",
    image: "/drivers/tsunoda.png",
  },
];

const TEAMS: Team[] = [
  {
    id: "ferrari",
    name: "Scuderia Ferrari HP",
    image: "/team-logos/ferrari.png",
  },
  {
    id: "redbull",
    name: "Oracle Red Bull Racing",
    image: "/team-logos/redbull.png",
  },
  {
    id: "mercedes",
    name: "Mercedes-AMG Petronas",
    image: "/team-logos/mercedes.png",
  },
  {
    id: "mclaren",
    name: "McLaren F1 Team",
    image: "/team-logos/mclaren.png",
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [selectedDriver, setSelectedDriver] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Optional: redirect to login if not authenticated
  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        router.push("/login");
      }
    })();
  }, [router]);

  async function handleContinue() {
    setError("");

    if (!selectedDriver || !selectedTeam) {
      setError("Please choose a favourite driver and team.");
      return;
    }

    setLoading(true);

    const { data, error: userError } = await supabase.auth.getUser();
    if (userError || !data.user) {
      setError("You must be logged in.");
      setLoading(false);
      return;
    }

    const userId = data.user.id;

    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        favourite_driver: selectedDriver,
        favourite_team: selectedTeam,
      })
      .eq("id", userId);

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return;
    }

    // Smooth transition to dashboard – your widgets already animate on mount
    router.push("/");
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <motion.img
            src="/f1-logo.png"
            alt="F1 Logo"
            className="h-14 mb-4 drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]"
            whileHover={{ scale: 1.05 }}
          />
          <h1 className="text-3xl font-bold mb-1">
            Set up your F1 experience
          </h1>
          <p className="opacity-60 text-sm text-center max-w-xl">
            Choose your favourite driver and team. We&apos;ll personalise your
            home dashboard and predictions around them.
          </p>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        {/* Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Drivers */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              Favourite Driver
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {DRIVERS.map((driver) => {
                const isSelected = selectedDriver === driver.id;
                return (
                  <motion.button
                    key={driver.id}
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedDriver(driver.id)}
                    className={`
                      relative text-left rounded-2xl p-3 
                      bg-[#161618] border
                      ${
                        isSelected
                          ? "border-red-500 shadow-[0_0_15px_rgba(255,0,0,0.4)]"
                          : "border-white/10"
                      }
                      flex gap-3 items-center
                    `}
                  >
                    <img
                      src={driver.image}
                      alt={driver.name}
                      className="w-24 h-24 object-contain rounded-xl bg-black/40"
                    />
                    <div>
                      <p className="text-sm opacity-70 uppercase tracking-wide">
                        {driver.team}
                      </p>
                      <p className="font-semibold text-sm leading-tight">
                        {driver.name}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Teams */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Favourite Team</h2>
            <div className="grid grid-cols-2 gap-4">
              {TEAMS.map((team) => {
                const isSelected = selectedTeam === team.id;
                return (
                  <motion.button
                    key={team.id}
                    type="button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedTeam(team.id)}
                    className={`
                      relative text-left rounded-2xl p-3 
                      bg-[#161618] border
                      ${
                        isSelected
                          ? "border-red-500 shadow-[0_0_15px_rgba(255,0,0,0.4)]"
                          : "border-white/10"
                      }
                      flex flex-col items-center justify-center gap-2
                    `}
                  >
                    <img
                      src={team.image}
                      alt={team.name}
                      className="w-16 h-16 object-contain"
                    />
                    <p className="text-sm font-semibold text-center">
                      {team.name}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Continue button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleContinue}
            disabled={loading}
            className="
              bg-red-600 hover:bg-red-700 disabled:bg-red-900
              transition py-3 px-10 rounded-full font-semibold
            "
          >
            {loading ? "Saving..." : "Continue to Dashboard"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}