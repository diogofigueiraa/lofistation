"use client"

import type { Station } from "@/app/page"
import StationCard from "./station-card"

interface StationSelectorProps {
  stations: Station[]
  currentStation: Station
  onSelectStation: (station: Station) => void
}

export default function StationSelector({ stations, currentStation, onSelectStation }: StationSelectorProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-balance text-4xl font-bold text-white">The Greatest Journey Of Radio Station</h1>
      </div>

      <div className="grid gap-4 md:gap-3">
        {stations.map((station) => (
          <StationCard
            key={station.id}
            station={station}
            isActive={currentStation.id === station.id}
            onClick={() => onSelectStation(station)}
          />
        ))}
      </div>
    </div>
  )
}
