"use client"

import { Card } from "@/components/ui/card"
import { FileSearch, Users, Code, Database, Cpu, Network } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function Services() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 })
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.1 })

  const services = [
    {
      icon: FileSearch,
      title: "Análise Completa de Processos",
      description:
        "Mapeamento detalhado de todos os processos da sua empresa para identificar gargalos e oportunidades de otimização com IA.",
    },
    {
      icon: Users,
      title: "Tech Team as a Service",
      description: "Time técnico especializado disponível sob demanda para implementar e manter suas soluções de IA.",
    },
    {
      icon: Code,
      title: "Desenvolvimento Contínuo",
      description: "Desenvolvimento ágil de soluções personalizadas que evoluem junto com seu negócio.",
    },
  ]

  return (
    <section id="servicos" className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef as any}
          className={`mx-auto max-w-3xl text-center mb-16 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance mb-6">
            Mais que software.{" "}
            <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent">
              Transformação digital
            </span>{" "}
            completa.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Nossos squads combinam inteligência artificial, blockchain e desenvolvimento avançado para criar soluções
            sob medida. Operamos como seu time de tecnologia integrado, do conceito à execução.
          </p>
        </div>

        <div ref={cardsRef as any} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-2 bg-zinc-50/95 border-zinc-200 dark:border-primary/60 dark:bg-zinc-900/60 backdrop-blur-sm p-8 transition-all duration-700 ${
                  cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-background text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Icons Grid - Hidden on mobile */}
        <div className="mt-16 hidden md:grid md:grid-cols-6 gap-6">
          {[Database, Cpu, Network, FileSearch, Code, Users].map((Icon, i) => (
            <div
              key={i}
              className={`flex items-center justify-center transition-all duration-700 ${
                cardsInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: `${600 + i * 100}ms` }}
            >
              <div className="h-20 w-20 rounded-full border-2 bg-zinc-50/95 border-zinc-200 dark:border-primary/60 dark:bg-zinc-900/60 backdrop-blur-sm flex items-center justify-center text-zinc-600 dark:text-zinc-400 transition-all duration-300">
                <Icon className="h-8 w-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
