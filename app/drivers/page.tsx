"use client";

import { motion } from "framer-motion";

type Driver = {
  id: string;
  name: string;
  code: string;
  number: number;
  team: string;
  country: string;
  teamColor: string;
  image: string; // /public/drivers/...
};

const DRIVERS: Driver[] = [
  // Ferrari
  {
    id: "hamilton",
    name: "Lewis Hamilton",
    code: "HAM",
    number: 44,
    team: "Scuderia Ferrari HP",
    country: "United Kingdom",
    teamColor: "#DC0000",
    image: "/drivers/hamilton.png",
  },
  {
    id: "leclerc",
    name: "Charles Leclerc",
    code: "LEC",
    number: 16,
    team: "Scuderia Ferrari HP",
    country: "Monaco",
    teamColor: "#DC0000",
    image: "/drivers/leclerc.png",
  },

  // Red Bull
  {
    id: "verstappen",
    name: "Max Verstappen",
    code: "VER",
    number: 1,
    team: "Oracle Red Bull Racing",
    country: "Netherlands",
    teamColor: "#1E41FF",
    image: "/drivers/verstappen.png",
  },
  {
    id: "tsunoda",
    name: "Yuki Tsunoda",
    code: "TSU",
    number: 22,
    team: "Oracle Red Bull Racing",
    country: "Japan",
    teamColor: "#1E41FF",
    image: "/drivers/tsunoda.png",
  },

  // Mercedes
  {
    id: "russell",
    name: "George Russell",
    code: "RUS",
    number: 63,
    team: "Mercedes-AMG Petronas",
    country: "United Kingdom",
    teamColor: "#00D2BE",
    image: "/drivers/russell.png",
  },
  {
    id: "antonelli",
    name: "Andrea Kimi Antonelli",
    code: "ANT",
    number: 8,
    team: "Mercedes-AMG Petronas",
    country: "Italy",
    teamColor: "#00D2BE",
    image: "/drivers/antonelli.png",
  },

  // McLaren
  {
    id: "norris",
    name: "Lando Norris",
    code: "NOR",
    number: 4,
    team: "McLaren F1 Team",
    country: "United Kingdom",
    teamColor: "#FF8000",
    image: "/drivers/norris.png",
  },
  {
    id: "piastri",
    name: "Oscar Piastri",
    code: "PIA",
    number: 81,
    team: "McLaren F1 Team",
    country: "Australia",
    teamColor: "#FF8000",
    image: "/drivers/piastri.png",
  },

  // Aston Martin
  {
    id: "alonso",
    name: "Fernando Alonso",
    code: "ALO",
    number: 14,
    team: "Aston Martin Aramco",
    country: "Spain",
    teamColor: "#006F62",
    image: "/drivers/alonso.png",
  },
  {
    id: "stroll",
    name: "Lance Stroll",
    code: "STR",
    number: 18,
    team: "Aston Martin Aramco",
    country: "Canada",
    teamColor: "#006F62",
    image: "/drivers/stroll.png",
  },

  // Alpine
  {
    id: "gasly",
    name: "Pierre Gasly",
    code: "GAS",
    number: 10,
    team: "BWT Alpine F1 Team",
    country: "France",
    teamColor: "#0090FF",
    image: "/drivers/gasly.png",
  },
  {
    id: "doohan",
    name: "Jack Doohan",
    code: "DOO",
    number: 35,
    team: "BWT Alpine F1 Team",
    country: "Australia",
    teamColor: "#0090FF",
    image: "/drivers/doohan.png",
  },

  // Sauber / Audi
  {
    id: "hulkenberg",
    name: "Nico Hülkenberg",
    code: "HUL",
    number: 27,
    team: "Stake F1 Team Kick Sauber",
    country: "Germany",
    teamColor: "#52E252",
    image: "/drivers/hulkenberg.png",
  },
  {
    id: "sainz",
    name: "Carlos Sainz",
    code: "SAI",
    number: 55,
    team: "Stake F1 Team Kick Sauber",
    country: "Spain",
    teamColor: "#52E252",
    image: "/drivers/sainz.png",
  },

  // Haas
  {
    id: "bearman",
    name: "Oliver Bearman",
    code: "BEA",
    number: 38,
    team: "Haas F1 Team",
    country: "United Kingdom",
    teamColor: "#B6BABD",
    image: "/drivers/bearman.png",
  },
  {
    id: "ocon",
    name: "Esteban Ocon",
    code: "OCO",
    number: 31,
    team: "Haas F1 Team",
    country: "France",
    teamColor: "#B6BABD",
    image: "/drivers/ocon.png",
  },

  // Williams
  {
    id: "albon",
    name: "Alex Albon",
    code: "ALB",
    number: 23,
    team: "Williams Racing",
    country: "Thailand",
    teamColor: "#005AFF",
    image: "/drivers/albon.png",
  },
  {
    id: "sargeant",
    name: "Logan Sargeant",
    code: "SAR",
    number: 2,
    team: "Williams Racing",
    country: "United States",
    teamColor: "#005AFF",
    image: "/drivers/sargeant.png",
  },
];

export default function DriversPage() {
  return (
    <main className="pt-24 px-8 max-w-7xl mx-auto text-white">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Drivers</h1>
        <p className="text-sm opacity-60 mt-1 max-w-xl">
          Full 2025 Formula 1 driver grid. Tap a card to view quick info about
          each driver.
        </p>
      </header>

      {/* Drivers grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {DRIVERS.map((driver, index) => (
          <motion.div
            key={driver.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03 }}
            className="
              rounded-2xl 
              bg-[#161618]
              border border-white/10
              shadow-lg shadow-black/30
              p-4
              flex flex-col gap-3
            "
          >
            {/* Top row: number + code */}
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-semibold px-2 py-1 rounded-full"
                style={{ backgroundColor: driver.teamColor }}
              >
                #{driver.number}
              </span>
              <span className="text-xs opacity-70">{driver.code}</span>
            </div>

            {/* Image + name */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-xl bg-black/40 flex items-center justify-center overflow-hidden">
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm opacity-70">{driver.team}</span>
                <span className="font-semibold text-base leading-tight">
                  {driver.name}
                </span>
                <span className="text-xs opacity-60 mt-1">
                  {driver.country}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}