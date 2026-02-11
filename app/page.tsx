import { Hero } from "@/components/hero"
import { ProblemSection } from "@/components/problem-section"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { WhenNearxSection } from "@/components/when-nearx-section"
import { Benefits } from "@/components/benefits"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProblemSection />
      <Benefits />
      <Services />
      <Process />
      <WhenNearxSection />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </main>
  )
}
