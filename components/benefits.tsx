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
      title: "Aumento de faturamento",
      description: "Criamos soluções que destravam novas oportunidades de receita e aumentam eficiência comercial e operacional.",
    },
    {
      icon: TrendingDown,
      title: "Redução real de custos",
      description: "Automação inteligente de processos críticos para reduzir desperdícios e aumentar margem.",
    },
    {
      icon: Zap,
      title: "Novos modelos de negócio",
      description: "Tokenização, produtos digitais, dados inteligentes e plataformas próprias como novas fontes de receita.",
    },
    {
      icon: Shield,
      title: "Segurança e escala",
      description: "Infraestrutura robusta, auditável e preparada para crescimento, compliance e longo prazo.",
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
            Engenharia{" "}
            <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent">
              inteligente
            </span>{" "}
            para empresas que precisam crescer com tecnologia.
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            Transformamos{" "}
            <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent font-semibold">
              IA, Blockchain e IoT
            </span>{" "}
            em soluções{" "}
            <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent font-semibold">
              tangíveis, seguras e escaláveis
            </span>
            , conectando tecnologia à{" "}
            <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent font-semibold">
              estratégia de negócio
            </span>
            .
          </p>
        </div>

        <div ref={cardsRef as any} className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border bg-zinc-50/80 dark:bg-zinc-900/40 border-zinc-200/80 dark:border-zinc-800 p-5 transition-all duration-700 ${
                  cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="mb-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="mb-2 text-base font-semibold tracking-tight">{benefit.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{benefit.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
