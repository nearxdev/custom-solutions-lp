"use client"

import { TrendingUp, TrendingDown, Zap, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"

export function Benefits() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 })
  const { ref: cardsRef, isInView: cardsInView } = useInView({ threshold: 0.1 })

  const benefits = [
    {
      icon: TrendingUp,
      title: "Aumento de Faturamento",
      description: "Identifique oportunidades de crescimento e otimize processos de vendas com IA",
    },
    {
      icon: TrendingDown,
      title: "Redução de Custos",
      description: "Automatize tarefas repetitivas e elimine desperdícios operacionais",
    },
    {
      icon: Zap,
      title: "Eficiência Operacional",
      description: "Acelere processos e tome decisões baseadas em dados em tempo real",
    },
    {
      icon: Shield,
      title: "Vantagem Competitiva",
      description: "Fique à frente da concorrência com tecnologia de ponta",
    },
  ]

  return (
    <section id="beneficios" className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef as any}
          className={`mx-auto max-w-2xl text-center mb-12 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance mb-4">
            Engenharia do{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              futuro
            </span>{" "}
            de soluções digitais
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Fundimos IA, blockchain e dados para criar produtos escaláveis e inteligentes que levam indústrias ao
            próximo nível.
          </p>
        </div>

        <div ref={cardsRef as any} className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-2 bg-zinc-50/95 border-zinc-200 dark:border-primary/60 dark:bg-black/40 backdrop-blur-sm p-8 transition-all duration-700 ${
                  cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-background text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-bold">{benefit.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{benefit.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
