"use client"

import { MessageCircle, Mail, MapPin } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Footer() {
  const whatsappUrl = "https://wa.me/5521999871904"
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  const { ref: footerRef, isInView: footerInView } = useInView({ threshold: 0.2 })

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = mounted ? (resolvedTheme || theme) : "dark"
  const logoSrc = currentTheme === "light" ? "/blacklogo.png" : "/whitelogo.png"

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div ref={footerRef as any} className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            className={`space-y-4 transition-all duration-700 ${
              footerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={logoSrc}
                alt="AI Consulting Logo"
                width={160}
                height={45}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Transformando negócios com inteligência artificial e tecnologia de ponta.
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-100 ${
              footerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="#servicos" className="hover:text-foreground transition-colors">
                  Análise de Processos
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-foreground transition-colors">
                  Tech Team as a Service
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-foreground transition-colors">
                  Desenvolvimento Contínuo
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              footerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="#beneficios" className="hover:text-foreground transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#processo" className="hover:text-foreground transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              footerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  (21) 99987-1904
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@aiconsulting.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Rio de Janeiro, RJ</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-12 pt-8 border-t border-border/40 text-center text-sm text-zinc-600 dark:text-zinc-400 transition-all duration-700 delay-400 ${
            footerInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <p>&copy; {new Date().getFullYear()} AI Consulting. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
