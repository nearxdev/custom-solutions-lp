"use client"

import { Check } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const reasons = [
  "Querem automatizar processos críticos",
  "Precisam escalar com segurança",
  "Desejam criar produtos digitais próprios",
  "Não querem montar um time interno do zero",
  "Precisam de velocidade sem perder qualidade",
]

export function WhenNearxSection() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.2 })
  const { ref: listRef, isInView: listInView } = useInView({ threshold: 0.1 })
  const { ref: ctaRef, isInView: ctaInView } = useInView({ threshold: 0.2 })

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef as any}
          className={`mx-auto max-w-3xl text-center mb-10 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-4">
            Quando faz sentido contratar a Nearx
          </p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-balance mb-6">
            A Nearx é{" "}
            <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent">
              ideal para empresas
            </span>{" "}
            que:
          </h2>
        </div>

        <ul
          ref={listRef as any}
          className={`mx-auto max-w-2xl space-y-4 mb-12 transition-all duration-700 delay-75 ${
            listInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {reasons.map((reason, index) => (
            <li
              key={reason}
              className={`flex items-center gap-3 text-zinc-700 dark:text-zinc-300 transition-all duration-700 ${
                listInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: `${100 + index * 80}ms` }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-lg">{reason}</span>
            </li>
          ))}
        </ul>

        <p
          ref={ctaRef as any}
          className={`mx-auto max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed transition-all duration-700 delay-200 ${
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Se sua empresa já sente que a tecnologia virou prioridade, você está no momento certo.
        </p>
      </div>
    </section>
  )
}
