import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
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
      <Benefits />
      <Services />
      <Process />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </main>
  )
}
