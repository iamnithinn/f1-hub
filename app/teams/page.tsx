"use client";

import { motion } from "framer-motion";

type Team = {
  id: string;
  name: string;
  color: string;
  logo: string;
  drivers: string[];
  base: string;
};

const TEAMS: Team[] = [
  {
    id: "ferrari",
    name: "Scuderia Ferrari HP",
    color: "#DC0000",
    logo: "/team-logos/ferrari.png",
    drivers: ["Lewis Hamilton", "Charles Leclerc"],
    base: "Maranello, Italy",
  },
  {
    id: "redbull",
    name: "Oracle Red Bull Racing",
    color: "#1E41FF",
    logo: "/team-logos/redbull.png",
    drivers: ["Max Verstappen", "Yuki Tsunoda"],
    base: "Milton Keynes, United Kingdom",
  },
  {
    id: "mercedes",
    name: "Mercedes-AMG Petronas F1 Team",
    color: "#00D2BE",
    logo: "/team-logos/mercedes.png",
    drivers: ["George Russell", "Andrea Kimi Antonelli"],
    base: "Brackley, United Kingdom",
  },
  {
    id: "mclaren",
    name: "McLaren Formula 1 Team",
    color: "#FF8000",
    logo: "/team-logos/mclaren.png",
    drivers: ["Lando Norris", "Oscar Piastri"],
    base: "Woking, United Kingdom",
  },
  {
    id: "astonmartin",
    name: "Aston Martin Aramco F1 Team",
    color: "#006F62",
    logo: "/team-logos/astonmartin.png",
    drivers: ["Fernando Alonso", "Lance Stroll"],
    base: "Silverstone, United Kingdom",
  },
  {
    id: "alpine",
    name: "BWT Alpine F1 Team",
    color: "#0090FF",
    logo: "/team-logos/alpine.png",
    drivers: ["Pierre Gasly", "Jack Doohan"],
    base: "Enstone, United Kingdom",
  },
  {
    id: "williams",
    name: "Williams Racing",
    color: "#005AFF",
    logo: "/team-logos/williams.png",
    drivers: ["Alex Albon", "Logan Sargeant"],
    base: "Grove, United Kingdom",
  },
  {
    id: "kicksauber",
    name: "Stake F1 Team Kick Sauber",
    color: "#52E252",
    logo: "/team-logos/kicksauber.png",
    drivers: ["Carlos Sainz", "Nico Hülkenberg"],
    base: "Hinwil, Switzerland",
  },
  {
    id: "haas",
    name: "Haas F1 Team",
    color: "#B6BABD",
    logo: "/team-logos/haas.png",
    drivers: ["Oliver Bearman", "Esteban Ocon"],
    base: "Kannapolis, USA",
  },
  {
    id: "rb",
    name: "Visa Cash App RB F1 Team",
    color: "#1439C2",
    logo: "/team-logos/racingbulls.png",
    drivers: ["Daniel Ricciardo", "Liam Lawson"],
    base: "Faenza, Italy",
  },
];

export default function TeamsPage() {
  return (
    <main className="pt-24 px-8 max-w-7xl mx-auto text-white">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Teams</h1>
        <p className="text-sm opacity-60 mt-1">All 10 Formula 1 teams for 2025</p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {TEAMS.map((team, index) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            className="
              rounded-2xl bg-[#161618] border border-white/10 
              shadow-lg shadow-black/30 p-5 flex flex-col gap-5
            "
          >
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: team.color }}
              >
                <img
                  src={team.logo}
                  alt={team.name}
                  className="w-8 h-8 object-contain"
                />
              </div>

              <div>
                <h2 className="font-semibold">{team.name}</h2>
                <p className="text-xs opacity-60">Base · {team.base}</p>
              </div>
            </div>

            {/* Drivers */}
            <div>
              <p className="text-xs opacity-60 uppercase mb-1">Drivers</p>
              <div className="flex flex-col gap-2">
                {team.drivers.map((driver) => (
                  <div
                    key={driver}
                    className="flex items-center justify-between bg-black/40 border border-white/5 rounded-xl px-3 py-2"
                  >
                    <span className="text-sm">{driver}</span>

                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: team.color }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}