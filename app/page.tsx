"use client"

import { useState } from "react"
import Header from "@/components/header"
import CurrentStation from "@/components/current-station"
import StationSelector from "@/components/station-selector"

export interface Station {
  id: string
  title: string
  artist: string
  year: string
  youtubeUrl: string
  thumbnailUrl?: string
}

const LOFI_STATIONS: Station[] = [
  {
    id: "1",
    title: "Lofi Hip Hop Radio",
    artist: "Cosmic Drifter",
    year: "2025",
    youtubeUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
    // thumbnailUrl: "/lofi-hip-hop-radio.jpg",
  },
  {
    id: "2",
    title: "Starlight Reverie",
    artist: "Cosmic Drifter",
    year: "2025",
    youtubeUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    // thumbnailUrl: "/starlight-reverie-lofi.jpg",
  },
  {
    id: "3",
    title: "Midnight Beats",
    artist: "Cosmic Drifter",
    year: "2025",
    youtubeUrl: "https://www.youtube.com/embed/lTRiuFIWV54",
    // thumbnailUrl: "/midnight-beats-lofi.jpg",
  },
  {
    id: "4",
    title: "Chill Vibes",
    artist: "Cosmic Drifter",
    year: "2025",
    youtubeUrl: "https://www.youtube.com/embed/U9BwWKXjVaIa",
    // thumbnailUrl: "/chill-vibes-lofi.jpg",
  },
  {
    id: "5",
    title: "Sunset Dreams",
    artist: "Cosmic Drifter",
    year: "2025",
    youtubeUrl: "https://www.youtube.com/embed/7NOSDKb0HNk",
    // thumbnailUrl: "/sunset-dreams-lofi.jpg",
  },
]

export default function Home() {
  const [currentStation, setCurrentStation] = useState<Station>(LOFI_STATIONS[0])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="w-full px-4 py-12 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <CurrentStation station={currentStation} />
            <StationSelector
              stations={LOFI_STATIONS}
              currentStation={currentStation}
              onSelectStation={setCurrentStation}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
