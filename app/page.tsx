import { FavouriteDriverCard } from "../components/FavouriteDriverCard";
import { CarWidget } from "../components/CarWidget";
import { StartingGrid } from "../components/StartingGrid";
import { DriverStats } from "../components/DriverStats";
import { SidebarGraph } from "../components/SidebarGraph";
import { NextRaceCard } from "../components/NextRaceCard";
import { DriverStandingsCard } from "../components/DriverStandingsCard";
import { ConstructorStandingsCard } from "../components/ConstructorStandingsCard";
import { WeatherSummaryCard } from "../components/WeatherSummaryCard";
import { LastRaceResultsCard } from "../components/LastRaceResultsCard";
import { TrendingDriversCard } from "../components/TrendingDriversCard";
import { FastestLapCard } from "../components/FastestLapCard";
import { TrackPreviewCard } from "../components/TrackPreviewCard";


export default function Home() {
  return (
   <main className="pt-24 w-full px-4">

  <div className="grid grid-cols-12 gap-4">

    {/* ROW 1 */}
    <div className="col-span-12 lg:col-span-6">
      <FavouriteDriverCard />
    </div>
    <div className="col-span-12 lg:col-span-6">
      <CarWidget />
    </div>

    {/* ROW 2 */}
    <div className="col-span-12 lg:col-span-4">
      <StartingGrid />
    </div>
    <div className="col-span-12 lg:col-span-4">
      <DriverStats />
    </div>
    <div className="col-span-12 lg:col-span-4">
      <SidebarGraph />   {/* pole gap graph */}
    </div>

    {/* ROW 3 */}
    <div className="col-span-12 lg:col-span-4">
      <NextRaceCard />
    </div>
    <div className="col-span-12 lg:col-span-4">
      <DriverStandingsCard />
    </div>
    <div className="col-span-12 lg:col-span-4">
      <ConstructorStandingsCard />
    </div>

    {/* ROW 4 */}
    <div className="col-span-12 lg:col-span-4">
      <WeatherSummaryCard />
    </div>
    <div className="col-span-12 lg:col-span-4">
      <LastRaceResultsCard />
    </div>
    <div className="col-span-12 lg:col-span-4">
      <TrendingDriversCard />
    </div>

    {/* ROW 5 */}
    <div className="col-span-12 lg:col-span-6">
      <FastestLapCard />
    </div>
    <div className="col-span-12 lg:col-span-6">
      <TrackPreviewCard />
    </div>

  </div>

</main>
  );
}