"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 border border-primary/60 bg-transparent hover:bg-primary/10"
      >
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-9 w-9 border border-primary/60 bg-transparent hover:bg-primary/10 transition-all duration-300"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-primary transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="h-4 w-4 text-primary transition-transform duration-300 rotate-0" />
      )}
      <span className="sr-only">Alternar tema</span>
    </Button>
  )
}
