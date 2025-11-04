"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const whatsappUrl =
    "https://wa.me/5521999871904?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20de%20IA"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center">
              <div className="h-4 w-4 bg-primary rounded-sm" />
            </div>
            <span className="text-xl font-bold">AI CONSULTING</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#servicos"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Serviços
            </a>
            <a
              href="#processo"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Processo
            </a>
            <a
              href="#beneficios"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefícios
            </a>
          </div>

          <div className="flex items-center gap-3">
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
        </div>
      </div>
    </nav>
  )
}
