"use client"

import type { Station } from "@/app/page"

interface CurrentStationProps {
  station: Station
}

export default function CurrentStation({ station }: CurrentStationProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-lg">
        {/* YouTube Embed */}
        <div className="relative mb-4 w-full overflow-hidden rounded-lg bg-card">
          <iframe
            className="h-80 w-full"
            src={`${station.youtubeUrl}?autoplay=1&controls=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Progress Bar */}
        <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/3 bg-primary"></div>
        </div>

        {/* Station Info */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-foreground">{station.title}</h2>
          <p className="text-sm text-muted-foreground">{station.artist}</p>
          <p className="text-xs text-muted-foreground">{station.year}</p>
        </div>
      </div>
    </div>
  )
}
