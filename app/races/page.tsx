"use client";

import { motion } from "framer-motion";

type Race = {
  id: string;
  name: string;
  country: string;
  round: number;
  date: string;
  circuit: string;
  winner: string;
  trackImage: string; // NEW FIELD
};

const RACES: Race[] = [
  {
    id: "bahrain",
    name: "Bahrain Grand Prix",
    country: "Bahrain",
    round: 1,
    date: "28 Feb – 2 Mar",
    circuit: "Bahrain International Circuit",
    winner: "Max Verstappen",
    trackImage: "/tracks/bahrain.png",
  },
  {
    id: "jeddah",
    name: "Saudi Arabian Grand Prix",
    country: "Saudi Arabia",
    round: 2,
    date: "7 – 9 Mar",
    circuit: "Jeddah Corniche Circuit",
    winner: "Lewis Hamilton",
    trackImage: "/tracks/jeddah.png",
  },
  {
    id: "australia",
    name: "Australian Grand Prix",
    country: "Australia",
    round: 3,
    date: "21 – 23 Mar",
    circuit: "Albert Park Circuit",
    winner: "Charles Leclerc",
    trackImage: "/tracks/australia.png",
  },
  {
    id: "japan",
    name: "Japanese Grand Prix",
    country: "Japan",
    round: 4,
    date: "4 – 6 Apr",
    circuit: "Suzuka International Racing Course",
    winner: "Max Verstappen",
    trackImage: "/tracks/japan.png",
  },
];

export default function RacesPage() {
  return (
    <main className="pt-24 px-8 max-w-7xl mx-auto text-white">
      <header className="mb-8 flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Races</h1>
        <p className="text-sm opacity-60">
          2025 calendar overview with quick info about each Grand Prix.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {RACES.map((race, index) => (
          <motion.div
            key={race.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="
                relative
                rounded-2xl 
                bg-[#161618]
                border border-white/10
                shadow-lg shadow-black/30
                p-5
                overflow-hidden
                flex flex-col gap-4
              "
          >
            {/* Track outline background */}
            <img
              src={race.trackImage}
              alt={`${race.name} Track`}
              className="
                absolute 
                top-3 
                right-3 
                w-70
                opacity-100
                pointer-events-none 
                select-none
              "
            />

            <div>
              <p className="text-xs opacity-50 uppercase">Round {race.round}</p>
              <h2 className="text-xl font-semibold">{race.name}</h2>
              <p className="text-xs opacity-60 mt-1">
                {race.country} · {race.date}
              </p>
            </div>

            <span className="text-xs bg-white/10 px-2 py-1 rounded-full opacity-80 w-fit">
              {race.circuit}
            </span>

            <div className="text-sm mt-2">
              <span className="opacity-60">Last winner: </span>
              <span className="font-semibold">{race.winner}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}