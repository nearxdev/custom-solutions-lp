"use client"

import { Button } from "@/components/ui/button"
import { GridPattern } from "@/components/grid-pattern"
import { useInView } from "@/hooks/use-in-view"
import Image from "next/image"

export function Hero() {
  const whatsappUrl = "https://wa.me/5521999871904?text=Olá!%20Quero%20transformar%20meu%20negócio%20com%20IA"

  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 })
  const { ref: descRef, isInView: descInView } = useInView({ threshold: 0.3 })
  const { ref: buttonsRef, isInView: buttonsInView } = useInView({ threshold: 0.3 })
  const { ref: logosRef, isInView: logosInView } = useInView({ threshold: 0.2 })

  const companyLogos = [
    {
      name: "Polygon",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Polygon_Primary_Light-swCbd7zU3Q7u7mjIr75aNgzQE6gXCF.png",
      width: 140,
      height: 40,
    },
    {
      name: "Solana",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/solanaLogo%20white-KNOeLKMhQU3awoKexuvfiKZPY3gVmE.png",
      width: 140,
      height: 40,
    },
    {
      name: "OpenAI",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1681142235openai-logo-png%20white-NIebbj2saYLnYwX4nFUZbv3GQqAEMJ.png",
      width: 120,
      height: 40,
    },
    {
      name: "Bradesco",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bradesco_H_White_RGB-ZsyEYsEJA5SjEGgVwtR99pWmq8Vf7b.png",
      width: 140,
      height: 40,
    },
    {
      name: "Animoca Brands",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Animca%20Brands%20white-zagCY3AeNHUIIFra4HJYmuSambnnHl.png",
      width: 140,
      height: 40,
    },
    {
      name: "Arbitrum",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0923_Arbitrum_Logos_AllWhite_horizontal_RGB-CTLQRxcMqtSqYtifErQ8JkemKFk4fg.png",
      width: 140,
      height: 40,
    },
    {
      name: "Stellar",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stellar%20Logo%20Final%20white-1fi4WJQd9a466tGC6qviVDqzjtszMq.png",
      width: 120,
      height: 40,
    },
    {
      name: "Internet Computer",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IC_logo_horizontal_white-FZx8Usfj5CcuPkJwTTBp1oYEFTX38K.png",
      width: 140,
      height: 40,
    },
    {
      name: "OP Core",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OP-Core_Wdmk_white-RGB_v01-YVNajiVFAC7mwFLeEuGoIfN7e3SCdj.png",
      width: 120,
      height: 40,
    },
    {
      name: "SN",
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SN-Stacked-Flat%20white-niNSzH6T5v3bkEG2mKgY43H1pPESUO.png",
      width: 100,
      height: 40,
    },
  ]

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
                <div className="text-sm font-medium text-primary tracking-wider uppercase">AI Consulting</div>
                <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                  Parceiro estratégico em tecnologia para sua empresa
                </h1>
              </div>

              <p
                ref={descRef as any}
                className={`mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed transition-all duration-700 delay-100 ${
                  descInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Seu time tech plug-and-play. Construído para entregar desde o primeiro dia e escalar com sua estratégia.
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
            <p className="text-sm text-muted-foreground">Empresas que escalaram conosco</p>

            <div className="relative overflow-hidden">
              <div className="flex animate-infinite-scroll">
                {/* First set of logos */}
                {companyLogos.map((logo, index) => (
                  <div
                    key={`${logo.name}-1-${index}`}
                    className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 h-10 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    style={{ width: logo.width }}
                  >
                    <Image
                      src={logo.url || "/placeholder.svg"}
                      alt={`${logo.name} logo`}
                      width={logo.width}
                      height={logo.height}
                      className="object-contain"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {companyLogos.map((logo, index) => (
                  <div
                    key={`${logo.name}-2-${index}`}
                    className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 h-10 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    style={{ width: logo.width }}
                  >
                    <Image
                      src={logo.url || "/placeholder.svg"}
                      alt={`${logo.name} logo`}
                      width={logo.width}
                      height={logo.height}
                      className="object-contain"
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
