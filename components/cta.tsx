"use client"

import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

export function CTA() {
  const whatsappUrl = "https://wa.me/5521999871904?text=Olá%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informacões..."

  const { ref: ctaRef, isInView: ctaInView } = useInView({ threshold: 0.3 })

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ctaRef as any}
          className={`relative border border-primary/30 rounded-2xl p-12 md:p-20 transition-all duration-700 ${
            ctaInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Corner dots decoration */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2 translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary rounded-full translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 mx-auto max-w-3xl text-center space-y-8">
            <h2
              className={`text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance transition-all duration-700 delay-100 ${
                ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Pronto para{" "}
              <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent">
                transformar seu negócio
              </span>{" "}
              com tecnologias emergentes?

            </h2>
            <p
              className={`text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed transition-all duration-700 delay-200 ${
                ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Fale agora com nosso time e dê o primeiro passo para levar seu negócio ao máximo potencial com o uso de tecnologias emergentes em tempo recorde
            </p>

            <div
              className={`flex justify-center transition-all duration-700 delay-300 ${
                ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                asChild
                size="lg"
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
      </div>
    </section>
  )
}
