"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  const whatsappUrl =
    "https://wa.me/5521999871904?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20de%20IA"

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = mounted ? (resolvedTheme || theme) : "dark"
  const logoSrc = currentTheme === "light" ? "/blacklogo.png" : "/whitelogo.png"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src={logoSrc}
              alt="AI Consulting Logo"
              width={180}
              height={50}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#servicos"
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors"
            >
              Serviços
            </a>
            <a
              href="#processo"
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors"
            >
              Processo
            </a>
            <a
              href="#beneficios"
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors"
            >
              Benefícios
            </a>
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Entrar em contato
              </a>
            </Button>
          </div>

          {/* Right Side - Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent p-2"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </a>
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:bg-primary/10 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a
              href="#servicos"
              onClick={closeMenu}
              className="block py-2 px-4 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors"
            >
              Serviços
            </a>
            <a
              href="#processo"
              onClick={closeMenu}
              className="block py-2 px-4 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors"
            >
              Processo
            </a>
            <a
              href="#beneficios"
              onClick={closeMenu}
              className="block py-2 px-4 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors"
            >
              Benefícios
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
