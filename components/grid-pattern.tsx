"use client"

import { useEffect, useState } from "react"

export function GridPattern() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div
        className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-primary opacity-20 blur-[100px] transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div
        className="absolute right-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent opacity-20 blur-[100px] transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.5}px) translateX(${scrollY * 0.1}px)` }}
      />
    </div>
  )
}
