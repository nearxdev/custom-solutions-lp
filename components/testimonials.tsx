"use client"

import { useInView } from "@/hooks/use-in-view"
import { Quote } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

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
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section ref={ref} className="py-12 md:py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Resultados{" "}
            <span className="bg-gradient-to-r from-[#1A63FF] to-[#8E2DFF] bg-clip-text text-transparent">
              Comprovados
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto text-pretty">
          O que nossos clientes dizem sobre nós
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-zinc-50/95 dark:bg-zinc-900/60 backdrop-blur-sm rounded-lg p-6 flex flex-col border border-zinc-200/50 dark:border-zinc-800/50 min-h-[400px]">
                    {/* Quote Text - sem ícone no mobile */}
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow text-pretty leading-relaxed">
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
                        <p className="text-sm text-zinc-500 dark:text-zinc-500">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-background/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-full p-2 hover:bg-primary/10 transition-colors"
            aria-label="Anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-background/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-full p-2 hover:bg-primary/10 transition-colors"
            aria-label="Próximo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-primary w-8" : "bg-zinc-300 dark:bg-zinc-700"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full bg-zinc-50/95 dark:bg-zinc-900/60 backdrop-blur-sm rounded-lg p-6 flex flex-col border border-zinc-200/50 dark:border-zinc-800/50">
                {/* Quote Icon - apenas desktop */}
                <Quote className="w-8 h-8 text-primary/60 mb-4" />

                {/* Quote Text */}
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow text-pretty leading-relaxed">
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
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">{testimonial.company}</p>
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
