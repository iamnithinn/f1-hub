"use client";

import { motion } from "framer-motion";

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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      className="relative pt-24 w-full px-4"
    >
      {/** 
       * OPTIONAL 🔥 
       * Enable this if you want the animated silhouette behind dashboard 
       */}
      
      <motion.img
        src="/silhouette.png"
        alt="driver silhouette"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      

      <div className="grid grid-cols-12 gap-4 relative z-10">

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
          <SidebarGraph />
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
    </motion.main>
  );
}