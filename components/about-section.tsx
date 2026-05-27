"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Award, Users, Sparkles } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Trusted Since 2008",
    description: "Over 15 years of experience in Bangalore real estate market",
  },
  {
    icon: Award,
    title: "4.2 Star Rating",
    description: "Consistently rated highly by our satisfied clients on Google",
  },
  {
    icon: Users,
    title: "1200+ Happy Clients",
    description: "A growing family of property owners who trust our expertise",
  },
  {
    icon: Sparkles,
    title: "Premium Service",
    description: "White-glove service for discerning property seekers",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Your Partner in <span className="text-gold-gradient">Premium</span> Real Estate
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hosamane Properties has been a cornerstone of Bangalore&apos;s real estate landscape 
                for over 15 years. Located in the heart of Gottigere, we&apos;ve helped countless 
                families find their perfect homes and investors discover lucrative opportunities.
              </p>
              <p>
                Our commitment to excellence, transparency, and personalized service has earned 
                us the trust of over 1,200 satisfied clients. We don&apos;t just sell properties; 
                we build lasting relationships.
              </p>
              <p>
                Whether you&apos;re looking to buy your dream home, find the perfect rental, 
                or make a strategic investment, our experienced team is here to guide you 
                every step of the way.
              </p>
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300"
            >
              Schedule a Visit
            </motion.a>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-xl glass border border-border/30 hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
