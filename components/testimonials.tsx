"use client"

import { useInView } from "@/hooks/use-in-view"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "A consultoria transformou completamente nossa operação. Reduzimos custos em 40% e aumentamos a eficiência em 60% com as soluções de IA implementadas.",
    author: "Carlos Silva",
    role: "CEO",
    company: "TechCorp Brasil",
    image: "/professional-ceo-headshot.png",
  },
  {
    quote:
      "O time entregou soluções sob demanda que se adaptaram perfeitamente às nossas necessidades. A análise de processos foi fundamental para identificar gargalos que nem sabíamos que existiam.",
    author: "Marina Santos",
    role: "CTO",
    company: "Innovate Labs",
    image: "/professional-female-cto-headshot.png",
  },
  {
    quote:
      "Ter um tech team as a service nos permitiu escalar rapidamente sem os custos fixos de uma equipe interna. O ROI foi visível em menos de 3 meses.",
    author: "Roberto Oliveira",
    role: "CFO",
    company: "FinanceHub",
    image: "/professional-male-cfo-headshot.jpg",
  },
  {
    quote:
      "A implementação de IA nos nossos processos aumentou nosso faturamento em 35% no primeiro trimestre. A consultoria foi estratégica e precisa.",
    author: "Ana Paula Costa",
    role: "CEO",
    company: "Digital Commerce",
    image: "/professional-female-ceo.png",
  },
  {
    quote:
      "O relatório de análise foi extremamente detalhado e revelou oportunidades que geraram economia de milhões. Recomendo fortemente.",
    author: "Felipe Mendes",
    role: "COO",
    company: "LogisTech",
    image: "/professional-male-coo-headshot.jpg",
  },
  {
    quote:
      "Desenvolvimento contínuo e suporte excepcional. A equipe entende profundamente de tecnologia e negócios, uma combinação rara no mercado.",
    author: "Juliana Ferreira",
    role: "CTO",
    company: "CloudSystems",
    image: "/professional-female-cto-headshot.png",
  },
]

export function Testimonials() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-12 md:py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Prova Social</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Veja o que líderes de empresas que transformaram seus negócios têm a dizer
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full bg-zinc-50/95 dark:bg-zinc-900/60 backdrop-blur-sm rounded-lg p-6 flex flex-col border border-zinc-200/50 dark:border-zinc-800/50">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/60 mb-4" />

                {/* Quote Text */}
                <p className="text-muted-foreground mb-6 flex-grow text-pretty leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-border/40 pt-4 flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={56}
                    height={56}
                    className="rounded-full border-2 border-primary/40"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-primary/80">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
