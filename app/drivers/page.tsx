"use client";

import Link from "next/link";
import Image from "next/image";
import Drivers from "@/data/drivers.json";  
  


type Driver = {
  id: string;
  code: string;
  number: number;
  name: string;
  team: string;
  nationality: string;
  birthYear: number;
  championships: number;
  wins: number;
  podiums: number;
  poles: number;
  points: number;
  teamColor: string;
  image: string;
  carImage: string;
};
export default function DriversPage() {
  return (
    <main className="pt-24 px-8 max-w-7xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">F1 Drivers — 2025 Season</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {(Drivers as Driver[]).map((driver) => (
          <Link
            key={driver.id}
            href={`/drivers/${driver.id}`}
            className="group"
          >
            <div className="rounded-2xl bg-[#161618] border border-white/10 p-4 hover:bg-white/5 transition">
              <div className="relative h-48 flex items-center justify-center">
                <Image
                  src={driver.image}
                  alt={driver.name}
                  width={200}
                  height={200}
                  className="object-contain group-hover:scale-105 transition duration-300"
                />
              </div>

              <p className="text-lg font-semibold mt-3 group-hover:text-red-500">
                {driver.name}
              </p>
              <p className="text-sm opacity-70">{driver.team}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}