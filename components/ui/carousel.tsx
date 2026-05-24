"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type SelectListener = () => void

export type CarouselApi = {
  selectedScrollSnap: () => number
  scrollTo: (index: number) => void
  on: (event: "select", callback: SelectListener) => void
}

type CarouselContextValue = {
  scrollableRef: React.RefObject<HTMLDivElement | null>
  scrollToIndex: (index: number) => void
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

export function Carousel({
  setApi,
  className,
  children,
}: {
  setApi?: (api: CarouselApi) => void
  className?: string
  children: React.ReactNode
}) {
  const scrollableRef = React.useRef<HTMLDivElement | null>(null)
  const currentIndexRef = React.useRef(0)
  const selectListeners = React.useRef<SelectListener[]>([])

  const scrollToIndex = React.useCallback((index: number) => {
    if (!scrollableRef.current) return
    const items = scrollableRef.current.children
    if (!items[index]) return
    ;(items[index] as HTMLElement).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    })
    currentIndexRef.current = index
    selectListeners.current.forEach((cb) => cb())
  }, [])

  React.useEffect(() => {
    if (!setApi) return
    setApi({
      selectedScrollSnap: () => currentIndexRef.current,
      scrollTo: scrollToIndex,
      on: (_event, cb) => {
        selectListeners.current.push(cb)
      },
    })
  }, [setApi, scrollToIndex])

  return (
    <CarouselContext.Provider value={{ scrollableRef, scrollToIndex }}>
      <div className={cn("relative", className)}>{children}</div>
    </CarouselContext.Provider>
  )
}

export function CarouselContent({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const ctx = React.useContext(CarouselContext)

  return (
    <div
      ref={ctx?.scrollableRef}
      className={cn(
        "flex overflow-x-auto snap-x snap-mandatory scroll-smooth",
        "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className
      )}
    >
      {children}
    </div>
  )
}

export function CarouselItem({
  className,
  children,
  onClick,
}: {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <div className={cn("snap-start shrink-0", className)} onClick={onClick}>
      {children}
    </div>
  )
}
