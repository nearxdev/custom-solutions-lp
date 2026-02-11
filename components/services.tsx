"use client"

import { Cpu, Target, Zap, Lightbulb, Map, Rocket, RefreshCw, FileSearch, Users, Code } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const serviceItems = [
  {
    icon: FileSearch,
    title: "Análise Estratégica de Processos",
    description: "Mapeamos fluxos, dados e operações para identificar onde a tecnologia gera mais ROI.",
  },
  {
    icon: Users,
    title: "Tech Team as a Service",
    description: "Times especializados sob demanda para desenvolver, evoluir e manter soluções críticas.",
  },
  {
    icon: Code,
    title: "Desenvolvimento Contínuo",
    description: "Arquitetura escalável, entregas ágeis e evolução constante conforme o negócio cresce.",
  },
]

const pillars = [
  { icon: Cpu, label: "Engenharia sênior" },
  { icon: Target, label: "Visão estratégica" },
  { icon: Zap, label: "Execução rápida" },
]

const timelineSteps = [
  { icon: Lightbulb, label: "Ideia" },
  { icon: Map, label: "Estratégia" },
  { icon: Rocket, label: "Implementação" },
  { icon: RefreshCw, label: "Acompanhamento contínuo" },
]

export function Services() {
  const { ref: titleRef, isInView: titleInView } = useInView({ threshold: 0.3 })
  const { ref: pillarsRef, isInView: pillarsInView } = useInView({ threshold: 0.1 })
  const { ref: timelineRef, isInView: timelineInView } = useInView({ threshold: 0.15 })
  const { ref: servicesListRef, isInView: servicesListInView } = useInView({ threshold: 0.1 })

  return (
    <section id="servicos" className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef as any}
          className={`mx-auto max-w-3xl text-center mb-12 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance mb-6">
            Mais do que{" "}
            <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent">
              software
            </span>
            .<br />
            Um time de{" "}
            <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent">
              tecnologia integrado
            </span>{" "}
            ao seu{" "}
            <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent">
              negócio
            </span>
            .
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-2">
            Nossos squads atuam como uma extensão do seu time interno, unindo:
          </p>
        </div>

        <div
          ref={pillarsRef as any}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 max-w-3xl mx-auto"
        >
          {pillars.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className={`flex flex-col items-center text-center transition-all duration-700 ${
                  pillarsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-14 w-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary mb-3">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-base font-semibold text-foreground">{item.label}</span>
              </div>
            )
          })}
        </div>

        {/* Timeline: Da ideia à implementação */}
        <div
          ref={timelineRef as any}
          className="mt-16 max-w-4xl mx-auto"
        >
          <p
            className={`text-center text-lg text-zinc-600 dark:text-zinc-400 mb-10 transition-all duration-700 ${
              timelineInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Da ideia à implementação, com acompanhamento contínuo.
          </p>
          <div
            className={`relative transition-all duration-700 delay-150 ${
              timelineInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Linha conectora - visível em desktop */}
            <div
              aria-hidden
              className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 hidden sm:block"
              style={{ width: "calc(100% - 4rem)", marginLeft: "2rem" }}
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.label}
                    className="flex flex-col items-center text-center relative"
                    style={{ transitionDelay: `${200 + index * 80}ms` }}
                  >
                    <div
                      className={`relative z-10 h-16 w-16 rounded-full flex items-center justify-center border-2 border-primary/40 bg-background text-primary transition-all duration-300 ${
                        timelineInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="mt-3 text-sm font-medium text-foreground block max-w-[120px] sm:max-w-none">
                      {step.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Lista de Serviços */}
        <div
          ref={servicesListRef as any}
          className="mt-16 max-w-4xl mx-auto"
        >
          <p
            className={`text-center text-lg font-semibold tracking-wider text-primary uppercase mb-10 transition-all duration-700 ${
              servicesListInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Serviços
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`border rounded-lg bg-zinc-50/80 dark:bg-zinc-900/40 border-zinc-200/80 dark:border-zinc-800 p-5 transition-all duration-700 ${
                    servicesListInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold tracking-tight">{item.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
