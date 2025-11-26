import fs from "fs";
import path from "path";
import Image from "next/image";

// --- Type for drivers (improves safety)
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

export default function DriverPage({ params }: { params: { id: string } }) {
  // ---- Load JSON ----
  const filePath = path.join(process.cwd(), "data", "drivers.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const drivers: Driver[] = JSON.parse(fileData);

  // --- Find driver by ID ---
  const driver = drivers.find((d) => d.id === params.id);

  if (!driver) {
    return (
      <main className="pt-24 px-8 text-white">
        <h1 className="text-3xl font-bold">Driver not found</h1>
      </main>
    );
  }

  return (
    <main className="pt-24 px-8 text-white max-w-5xl mx-auto">
      {/* HEADER */}
      <div className="flex items-center gap-8">
        <Image
          src={driver.image}
          alt={driver.name}
          width={220}
          height={220}
          className="rounded-2xl shadow-xl object-contain"
        />

        <div>
          <h1 className="text-4xl font-bold">{driver.name}</h1>
          <p className="opacity-75 text-lg">{driver.team}</p>

          <div className="mt-3 flex items-center gap-4">
            <span className="px-3 py-1 rounded-lg bg-white/10 text-sm">
              #{driver.number}
            </span>
            <span className="px-3 py-1 rounded-lg text-sm" style={{ backgroundColor: driver.teamColor }}>
              {driver.code}
            </span>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
        <Stat label="Championships" value={driver.championships} />
        <Stat label="Wins" value={driver.wins} />
        <Stat label="Podiums" value={driver.podiums} />
        <Stat label="Poles" value={driver.poles} />
        <Stat label="Career Points" value={driver.points} />
      </div>

      {/* CAR IMAGE */}
      <div className="mt-12 bg-[#111]/40 rounded-2xl p-8 border border-white/10">
        <h2 className="text-xl font-semibold mb-4">Car – {driver.team}</h2>

        <Image
          src={driver.carImage}
          alt={driver.team}
          width={900}
          height={350}
          className="object-contain mx-auto drop-shadow-xl"
        />
      </div>
    </main>
  );
}

// --- Reusable stat component ---
function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center bg-[#161618] p-4 rounded-xl border border-white/10">
      <p className="text-xl font-bold">{value}</p>
      <p className="text-xs opacity-60">{label}</p>
    </div>
  );
}