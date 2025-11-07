"use client"

import { Button } from "@/components/ui/button"
import { GridPattern } from "@/components/grid-pattern"
import { useInView } from "@/hooks/use-in-view"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const whatsappUrl = "https://wa.me/5521999871904?text=Olá!%20Quero%20transformar%20meu%20negócio%20com%20IA"
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 })
  const { ref: descRef, isInView: descInView } = useInView({ threshold: 0.3 })
  const { ref: buttonsRef, isInView: buttonsInView } = useInView({ threshold: 0.3 })
  const { ref: logosRef, isInView: logosInView } = useInView({ threshold: 0.2 })

  useEffect(() => {
    setMounted(true)
  }, [])

  const companyLogos = [
    {
      name: "OP Core",
      darkUrl: "/logos/OP-Core_Wdmk_white-RGB_v01.png",
      lightUrl: "/logos/OP-Core_Symb_1C-Red-RGB_v01.png", // Vermelho (colorido)
      width: 120,
      height: 48,
    },
    {
      name: "Arbitrum",
      darkUrl: "/logos/0923_Arbitrum_Logos_AllWhite_horizontal_RGB.png",
      lightUrl: "/logos/1223_Arbitrum_Logos_Primary_horizontal_RGB.png", // Azul (colorido)
      width: 140,
      height: 48,
    },
    {
      name: "Bradesco",
      darkUrl: "/logos/Bradesco_H_White_RGB.png",
      lightUrl: "/logos/Bradesco_H_Red_RGB.png", // Vermelho (colorido)
      width: 140,
      height: 48,
    },
    {
      name: "Animoca Brands",
      darkUrl: "/logos/Animca Brands white.png",
      lightUrl: "/logos/Animca Brands RGB.png", // Colorido (azul/multicolor)
      width: 140,
      height: 48,
    },
    {
      name: "OpenAI",
      darkUrl: "/logos/1681142235openai-logo-png white.png",
      lightUrl: "/logos/1681142235openai-logo-png.png", // Preto (sem cor disponível)
      width: 120,
      height: 48,
    },
    {
      name: "Polygon",
      darkUrl: "/logos/Polygon_Primary_Light.png",
      lightUrl: "/logos/Polygon_Primary_Light.png", // Roxo claro (mais colorido)
      width: 140,
      height: 48,
    },
    {
      name: "Internet Computer",
      darkUrl: "/logos/IC_logo_horizontal_white.png",
      lightUrl: "/logos/IC_logo_horizontal_black.png", // Preto (sem cor disponível)
      width: 140,
      height: 48,
    },
    {
      name: "Solana",
      darkUrl: "/logos/solanaLogo white.png",
      lightUrl: "/logos/solanaLogo black.png", // Preto (sem cor disponível)
      width: 140,
      height: 48,
    },
    {
      name: "Starknet",
      darkUrl: "/logos/SN-Stacked-Flat white.png",
      lightUrl: "/logos/SN-Stacked-Flat colour.png", // Colorido (laranja/multicolor)
      width: 100,
      height: 48,
    },
    {
      name: "Stellar",
      darkUrl: "/logos/Stellar Logo Final white.png",
      lightUrl: "/logos/Stellar Logo Final black.png", // Preto (sem cor disponível)
      width: 120,
      height: 48,
    },
  ]

  const currentTheme = mounted ? (resolvedTheme || theme) : "dark"
  const isLightMode = currentTheme === "light"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <GridPattern />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="relative border border-primary/30 rounded-2xl p-12 md:p-20">
            {/* Corner dots decoration */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2 translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary rounded-full translate-x-1/2 translate-y-1/2" />

            <div className="text-center space-y-8">
              <div
                ref={titleRef as any}
                className={`space-y-6 transition-all duration-700 ${
                  titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="text-sm font-medium text-primary tracking-wider uppercase">Nearx Solutions</div>
                <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                Desenvolvemos <br />
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  soluções tecnológicas
                  </span>{" "}
                  em tempo recorde
                </h1>
              </div>

              <p
                ref={descRef as any}
                className={`mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed transition-all duration-700 delay-100 ${
                  descInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Seu produto, construído com as tecnologias mais modernas e a expertise de quem entende de inovação.
              </p>

              <div
                ref={buttonsRef as any}
                className={`flex justify-center transition-all duration-700 delay-200 ${
                  buttonsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

          <div
            ref={logosRef as any}
            className={`mt-20 text-center space-y-8 transition-all duration-700 ${
              logosInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-base md:text-lg font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 uppercase">
            Empresas parceiras
            </p>

            <div className="relative overflow-hidden py-6">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-infinite-scroll items-center gap-4">
                {/* First set of logos */}
                {companyLogos.map((logo, index) => (
                  <div
                    key={`${logo.name}-1-${index}`}
                    className="flex-shrink-0 px-6 md:px-8 lg:px-10 h-20 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    style={{ minWidth: logo.width }}
                  >
                    <Image
                      src={isLightMode ? logo.lightUrl : logo.darkUrl}
                      alt={`${logo.name} logo`}
                      width={logo.width}
                      height={logo.height}
                      className="object-contain max-h-16 w-auto"
                      priority={index < 5}
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {companyLogos.map((logo, index) => (
                  <div
                    key={`${logo.name}-2-${index}`}
                    className="flex-shrink-0 px-6 md:px-8 lg:px-10 h-20 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    style={{ minWidth: logo.width }}
                  >
                    <Image
                      src={isLightMode ? logo.lightUrl : logo.darkUrl}
                      alt={`${logo.name} logo`}
                      width={logo.width}
                      height={logo.height}
                      className="object-contain max-h-16 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
