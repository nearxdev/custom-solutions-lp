"use client"

import { useInView } from "@/hooks/use-in-view"
import { XCircle, Database, MessageSquareOff } from "lucide-react"

const painPoints = [
  {
    icon: XCircle,
    text: "Processos manuais continuam existindo",
  },
  {
    icon: Database,
    text: "Dados não viram decisão",
  },
  {
    icon: MessageSquareOff,
    text: "Tecnologia não conversa com o negócio",
  },
]

export function ProblemSection() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.2 })
  const { ref: listRef, isInView: listInView } = useInView({ threshold: 0.1 })
  const { ref: ctaRef, isInView: ctaInView } = useInView({ threshold: 0.2 })

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef as any}
          className={`mx-auto max-w-3xl text-center mb-12 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
            O problema não é{" "}
            <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent">
              falta de tecnologia
            </span>
            .<br />
            É falta de{" "}
            <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent">
              aplicação estratégica
            </span>
            .
          </h2>
        </div>

        <p
          className={`text-center text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-10 font-medium transition-all duration-700 delay-75 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Empresas perdem dinheiro todos os dias porque:
        </p>

        <div
          ref={listRef as any}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-14"
        >
          {painPoints.map((item, index) => (
            <div
              key={item.text}
              className={`flex items-start gap-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/50 p-5 transition-all duration-700 ${
                listInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive/90">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-base font-medium text-zinc-800 dark:text-zinc-200 leading-snug pt-1.5">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          ref={ctaRef as any}
          className={`mx-auto max-w-3xl text-center transition-all duration-700 delay-150 ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xl sm:text-2xl font-semibold text-foreground leading-relaxed">
            A Nearx entra exatamente nesse ponto:{" "}
            <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent">
              traduzimos tecnologia emergente em operação, escala e faturamento.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
