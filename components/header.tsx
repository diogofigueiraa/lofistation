"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { IconChevronRight, IconArrowNarrowRight } from "@tabler/icons-react"

export default function Header() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-primary">♫</div>

          {/* Navigation */}
          <nav className="hidden gap-8 md:flex">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Radios
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary">
              Browse
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex gap-3">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <motion.button
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white"
              style={{ backgroundColor: isHovered ? "#0F3398" : "" }}
            >
              Sign Up
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {isHovered ? (
                  <IconArrowNarrowRight size={16} />
                ) : (
                  <IconChevronRight size={16} />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  )
}
