import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { IntroReveal } from "@/components/intro-reveal"
import { ScrollSequenceSection } from "@/components/scroll-sequence-section"
import { ImageSlider } from "@/components/image-slider"
import { PropertiesSection } from "@/components/properties-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhatsAppSection } from "@/components/whatsapp-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <IntroReveal />
      <Navbar />
      <HeroSection />
      <ScrollSequenceSection />
      <ImageSlider />
      <PropertiesSection />
      <ServicesSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <WhatsAppSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
