import fs from "fs";
import path from "path";
import Image from "next/image";

type Race = {
  id: string;
  name: string;
  country: string;
  track: string;
  date: string;
  laps: number;
  lengthKm: number;
  drsZones: number;
  image: string;
  schedule: {
    fp1: string;
    fp2: string;
    fp3: string;
    qualifying: string;
    race: string;
  };
  stats: {
    overtaking: number;
    tyreWear: number;
    downforce: string;
    braking: string;
  };
  results: {
    pole: string;
    winner: string;
    fastestLap: string;
  };
};

export default function RacePage({ params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), "data", "races.json");
  const json = fs.readFileSync(filePath, "utf8");
  const races = JSON.parse(json) as Race[];

  const race = races.find((r) => r.id === params.id);

  if (!race)
    return (
      <main className="pt-24 px-8 text-white">
        <h1>Race not found.</h1>
      </main>
    );

  return (
    <main className="pt-24 px-8 max-w-6xl mx-auto text-white">
      {/* HEADER */}
      <h1 className="text-4xl font-bold">{race.name}</h1>
      <p className="text-lg opacity-75">{race.track}</p>
      <p className="text-sm opacity-60">{race.date}</p>

      {/* TRACK MAP */}
      <div className="mt-10 bg-[#111]/40 p-8 border border-white/10 rounded-2xl">
        <Image
          src={race.image}
          alt={race.name}
          width={900}
          height={450}
          className="object-contain mx-auto drop-shadow-lg"
        />
      </div>

      {/* RACE STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
        <Stat label="Laps" value={race.laps} />
        <Stat label="Track Length" value={`${race.lengthKm} km`} />
        <Stat label="DRS Zones" value={race.drsZones} />
        <Stat label="Overtaking" value={race.stats.overtaking} />
      </div>

      {/* WEEKEND SCHEDULE */}
      <div className="mt-12 bg-[#161618] p-6 border border-white/10 rounded-2xl">
        <h2 className="text-xl font-semibold mb-3">Weekend Schedule</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          <ScheduleItem label="FP1" value={race.schedule.fp1} />
          <ScheduleItem label="FP2" value={race.schedule.fp2} />
          <ScheduleItem label="FP3" value={race.schedule.fp3} />
          <ScheduleItem label="Qualifying" value={race.schedule.qualifying} />
          <ScheduleItem label="Race" value={race.schedule.race} />
        </div>
      </div>

      {/* SESSION RESULTS */}
      <div className="mt-12 bg-[#161618] p-6 border border-white/10 rounded-2xl">
        <h2 className="text-xl font-semibold mb-3">2025 Results</h2>

        <div className="text-sm">
          <p>Pole Position: <span className="font-semibold">{race.results.pole}</span></p>
          <p>Race Winner: <span className="font-semibold">{race.results.winner}</span></p>
          <p>Fastest Lap: <span className="font-semibold">{race.results.fastestLap}</span></p>
        </div>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: any }) {
  return (
    <div className="text-center bg-[#161618] p-4 rounded-xl border border-white/10">
      <p className="text-xl font-bold">{value}</p>
      <p className="text-xs opacity-60">{label}</p>
    </div>
  );
}

function ScheduleItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-black/30 p-3 rounded-xl border border-white/5 text-center">
      <p className="text-xs opacity-60">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}