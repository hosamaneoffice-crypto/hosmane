"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Home, Key, Building2, Users, ShieldCheck, Sparkles } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Property Sales",
    description: "Find your dream home with our curated selection of premium properties across Bangalore.",
  },
  {
    icon: Key,
    title: "Rental Services",
    description: "Discover exceptional rental properties that match your lifestyle and budget requirements.",
  },
  {
    icon: Building2,
    title: "Investment Advisory",
    description: "Expert guidance on real estate investments for maximum returns and portfolio growth.",
  },
  {
    icon: Users,
    title: "Property Management",
    description: "Comprehensive management services to maintain and enhance your property value.",
  },
  {
    icon: ShieldCheck,
    title: "Legal Assistance",
    description: "Complete documentation and legal support for hassle-free property transactions.",
  },
  {
    icon: Sparkles,
    title: "Interior Consultation",
    description: "Transform your space with our network of premium interior design partners.",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group p-8 rounded-2xl glass border border-border/30 hover:border-primary/30 transition-all duration-500"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Premium <span className="text-gold-gradient">Real Estate</span> Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive services designed to make your property journey seamless and rewarding
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
