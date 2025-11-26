import { NextResponse } from "next/server";

// ---- BASIC TEMP ML LOGIC ----
function generatePrediction(driver: string) {
  const baseScores: Record<string, number> = {
    Hamilton: 92,
    Leclerc: 89,
    Verstappen: 95,
    Tsunoda: 78,
  };

  const score = baseScores[driver] ?? 80;

  const ranking = Object.entries(baseScores)
    .sort((a, b) => b[1] - a[1])
    .map(([name]) => name);

  const winner = ranking[0];
  const podium = ranking.slice(0, 3);

  return {
    driver,
    paceData: [
      { session: "FP1", pace: score - 4 },
      { session: "FP2", pace: score - 2 },
      { session: "FP3", pace: score - 1 },
      { session: "Quali", pace: score },
      { session: "Race", pace: score - 1 },
    ],
    positionData: [
      { race: "Bahrain", position: Math.floor((100 - score) / 10) + 1 },
      { race: "Jeddah", position: Math.floor((100 - score) / 12) + 1 },
      { race: "Australia", position: Math.floor((100 - score) / 15) + 1 },
    ],
    deltaData: [
      { lap: 5, delta: (score - baseScores["Verstappen"]) / 100 },
      { lap: 10, delta: (score - baseScores["Verstappen"]) / 120 },
      { lap: 15, delta: (score - baseScores["Verstappen"]) / 150 },
      { lap: 20, delta: (score - baseScores["Verstappen"]) / 170 },
      { lap: 25, delta: (score - baseScores["Verstappen"]) / 190 },
    ],
    tyreData: [
      { compound: "Soft", wear: 100 - score + 30 },
      { compound: "Medium", wear: 100 - score + 15 },
      { compound: "Hard", wear: 100 - score },
    ],
    sectorData: [
      { sector: "S1", value: score - 5 },
      { sector: "S2", value: score - 3 },
      { sector: "S3", value: score - 4 },
    ],
    summary: {
      winner,
      podium,
      confidence: Math.min(90, score),
    },
    probabilities: [
      { label: "Win", value: Math.min(80, (score / 100) * 60) },
      { label: "Podium", value: Math.min(95, (score / 100) * 85) },
      { label: "Top 5", value: 100 - (100 - score) / 2 },
    ],

    // FIXED section ↓↓↓
    battle: {
      opponent: ranking[1],
      lines: [
        `${driver} race pace relative to ${ranking[1]}`,
        `Score gap: ${score - baseScores[ranking[1]]}`,
        `Tyre life simulation favours ${
          score > baseScores[ranking[1]] ? driver : ranking[1]
        }`,
        "ERS deployment advantage: simulated",
      ],
    },

    trackInfo: {
      name: "Bahrain International Circuit",
      difficulty: 8.2,
      overtaking: 6.1,
      pitDelta: 22.4,
      safetyCarChance: 37,
    },

    carComparison: [
      { metric: "Straight-line speed", ferrari: "+2.1 km/h", redbull: "Baseline" },
      { metric: "High-speed corners", ferrari: "-0.03s", redbull: "Baseline" },
      { metric: "ERS efficiency", ferrari: "+2.5%", redbull: "Baseline" },
    ],
  };
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const driver = url.searchParams.get("driver") || "Hamilton";

    const prediction = generatePrediction(driver);
    return NextResponse.json(prediction);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}