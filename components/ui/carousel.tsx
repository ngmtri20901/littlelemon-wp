"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CarouselProps {
  children: React.ReactNode[]
  autoSlideInterval?: number
  className?: string
}

export function Carousel({ children, autoSlideInterval = 3000, className }: CarouselProps) {
  const [curr, setCurr] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const prev = useCallback(() => {
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1))
  }, [children.length])

  const next = useCallback(() => {
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1))
  }, [children.length])

  useEffect(() => {
    if (isPaused) return

    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [next, autoSlideInterval, isPaused])

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="min-w-full">
            {child}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/70 shadow hover:bg-white/90"
          onClick={prev}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/70 shadow hover:bg-white/90"
          onClick={next}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {children.map((_, i) => (
            <div
              key={i}
              className={cn("h-2 w-2 rounded-full transition-all", curr === i ? "bg-white w-4" : "bg-white/50")}
              onClick={() => setCurr(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export const CarouselContent = ({ children, className, ...props }) => {
  return (
    <div className={cn("flex", className)} {...props}>
      {children}
    </div>
  )
}

export const CarouselItem = ({ children, className, ...props }) => {
  return (
    <div className={cn("min-w-full", className)} {...props}>
      {children}
    </div>
  )
}

export const CarouselPrevious = ({ className, ...props }) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("h-8 w-8 rounded-full bg-white/70 shadow hover:bg-white/90", className)}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

export const CarouselNext = ({ className, ...props }) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("h-8 w-8 rounded-full bg-white/70 shadow hover:bg-white/90", className)}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}
