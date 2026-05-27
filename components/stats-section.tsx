"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { TrendingUp, Users, Home, Award } from "lucide-react"

const stats = [
  {
    icon: Home,
    value: 500,
    suffix: "+",
    label: "Properties Sold",
    description: "Successfully closed deals",
  },
  {
    icon: Users,
    value: 1200,
    suffix: "+",
    label: "Happy Clients",
    description: "Trust our expertise",
  },
  {
    icon: TrendingUp,
    value: 15,
    suffix: " Yrs",
    label: "Experience",
    description: "In real estate market",
  },
  {
    icon: Award,
    value: 4.2,
    suffix: "",
    label: "Google Rating",
    description: "Customer satisfaction",
  },
]

function AnimatedCounter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => 
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toLocaleString()
  )
  const [displayValue, setDisplayValue] = useState("0")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      })

      const unsubscribe = rounded.on("change", setDisplayValue)

      return () => {
        animation.stop()
        unsubscribe()
      }
    }
  }, [isInView, count, value, rounded])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-gold-gradient">
      {displayValue}{suffix}
    </span>
  )
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const Icon = stat.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center p-8"
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      
      <AnimatedCounter 
        value={stat.value} 
        suffix={stat.suffix} 
        decimals={stat.label === "Google Rating" ? 1 : 0}
      />
      
      <h3 className="text-lg font-semibold text-foreground mt-4 mb-1">
        {stat.label}
      </h3>
      
      <p className="text-sm text-muted-foreground">
        {stat.description}
      </p>
    </motion.div>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
            Trust Metrics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Numbers That <span className="text-gold-gradient">Speak</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A legacy of trust built over years of exceptional service
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
      </div>
    </section>
  )
}
