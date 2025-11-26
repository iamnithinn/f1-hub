"use client";

import Link from "next/link";
import Image from "next/image";
import rawTeams from "@/data/teams.json";

const teams = rawTeams as Team[];
type Team = {
  id: string;
  name: string;
  color: string;
  logo: string;
  carImage: string;
  drivers: string[];
  championships: number;
  wins: number;
  poles: number;
  base: string;
};
export default function TeamsPage() {
  return (
    <main className="pt-24 px-8 max-w-7xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">F1 Teams — 2025 Season</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {teams.map((team) => (
          <Link href={`/teams/${team.id}`} key={team.id} className="group">
            <div className="rounded-2xl bg-[#161618] border border-white/10 p-5 hover:bg-white/5 transition">
              <div className="relative h-40 flex items-center justify-center">
                <Image
                  src={team.logo}
                  alt={team.name}
                  width={120}
                  height={120}
                  className="object-contain group-hover:scale-105 transition"
                />
              </div>

              <p
                className="mt-3 text-lg font-semibold group-hover:text-red-500"
                style={{ color: team.color }}
              >
                {team.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}