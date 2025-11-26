import fs from "fs";
import path from "path";
import Image from "next/image";
import rawDrivers from "@/data/drivers.json";

// TYPES
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

const drivers = rawDrivers as Driver[];

export default function TeamPage({ params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), "data", "teams.json");
  const json = fs.readFileSync(filePath, "utf8");
  const teams = JSON.parse(json) as Team[];

  const team = teams.find((t) => t.id === params.id);

  if (!team) return <main>Team not found</main>;

  // ❗ this error is now FIXED
  const teamDrivers = drivers.filter((d) => team.drivers.includes(d.id));

  return (
    <main className="pt-24 px-8 max-w-6xl mx-auto text-white">
      {/* …rest of your UI */}
    </main>
  );
}