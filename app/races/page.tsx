"use client";

import Link from "next/link";
import Image from "next/image";
import rawRaces from "@/data/races.json";

// Type
type Race = {
  id: string;
  name: string;
  country: string;
  track: string;
  date: string;
  image: string;
};

const races = rawRaces as Race[];

export default function RacesPage() {
  return (
    <main className="pt-24 px-8 max-w-7xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">2025 Formula 1 Races</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {races.map((race) => (
          <Link href={`/races/${race.id}`} key={race.id} className="group">
            <div className="rounded-2xl bg-[#161618] border border-white/10 p-4 hover:bg-white/5 transition">
              <div className="relative h-44 flex items-center justify-center">
                <Image
                  src={race.image}
                  alt={race.name}
                  width={400}
                  height={200}
                  className="object-contain group-hover:scale-105 transition"
                />
              </div>

              <h2 className="text-lg font-semibold mt-2">{race.name}</h2>
              <p className="text-sm opacity-60">{race.track}</p>
              <p className="text-xs opacity-60 mt-1">{race.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}