"use client"

import { CheckCircle2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function Process() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 })
  const { ref: stepsRef, isInView: stepsInView } = useInView({ threshold: 0.1 })

  const steps = [
    {
      number: "01",
      title: "Diagnóstico Inicial",
      description: "Reunião conduzida por especialistas e doutores em IA, Blockchain e IoT para entender seu negócio e gerar insights práticos desde o primeiro encontro.",
    },
    {
      number: "02",
      title: "Análise Profunda",
      description:
        "Mapeamento completo dos processos para identificar gargalos e oportunidades reais de otimização e automação.",
    },
    {
      number: "03",
      title: "Relatório Estratégico",
      description: "Entrega de um plano claro com recomendações, ROI estimado e roadmap de implementação para resultados rápidos e mensuráveis.",
    },
    {
      number: "04",
      title: "Implementação",
      description:
        "Implantação feita por um time sênior, com acompanhamento contínuo e ajustes em tempo real para garantir impacto imediato.",
    },
  ]

  return (
    <section id="processo" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef as any}
          className={`mx-auto max-w-2xl text-center mb-12 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance mb-4">
            Como{" "}
            <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent">
              Funciona?
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Processo simples e transparente do diagnóstico à implementação
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div ref={stepsRef as any} className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`group relative flex gap-6 rounded-xl bg-zinc-50/95 dark:bg-zinc-900/60 backdrop-blur-sm p-6 border border-zinc-200/50 dark:border-zinc-800/50 transition-all duration-700 ${
                  stepsInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 pt-1">
                  <h3 className="mb-2 text-xl font-bold flex items-center gap-2">
                    {step.title}
                    <CheckCircle2 className="h-5 w-5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
