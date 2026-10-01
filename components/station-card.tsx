"use client"

import type { Station } from "@/app/page"
import Image from "next/image"

interface StationCardProps {
  station: Station
  isActive: boolean
  onClick: () => void
}

export default function StationCard({ station, isActive, onClick }: StationCardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex gap-4 rounded-xl p-3 transition-all duration-200 ${
        isActive ? "bg-white shadow-lg ring-2 ring-primary" : "bg-card hover:bg-white hover:shadow-md"
      }`}
    >
      {/* Thumbnail */}
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
        <Image
          src={station.thumbnailUrl || "/placeholder.svg"}
          alt={station.title}
          width={80}
          height={80}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Station Info */}
      <div className="flex flex-col justify-center text-left">
        <h3 className="font-semibold text-foreground">{station.title}</h3>
        <p className="text-sm text-muted-foreground">{station.artist}</p>
        <p className="text-xs text-muted-foreground">{station.year}</p>
      </div>
    </button>
  )
}
