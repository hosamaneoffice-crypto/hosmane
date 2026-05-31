"use client"

import { motion } from "framer-motion"
import { ArrowDown, MapPin, Star, Building2, Home, Key } from "lucide-react"
import Image from "next/image"

const particles = [
  { left: 12, top: 24, delay: 0.1, duration: 3.2 },
  { left: 28, top: 64, delay: 0.7, duration: 3.9 },
  { left: 44, top: 18, delay: 1.1, duration: 4.2 },
  { left: 58, top: 72, delay: 0.4, duration: 3.6 },
  { left: 72, top: 34, delay: 1.4, duration: 4.5 },
  { left: 86, top: 58, delay: 0.9, duration: 3.4 },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Luxury cityscape"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Cinematic light pass */}
      <motion.div
        className="pointer-events-none absolute inset-y-[-15%] left-[-42%] z-[5] w-[46%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md"
        animate={{ x: ["0%", "330%"], opacity: [0, 0.95, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2.8, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 z-[6] bg-[radial-gradient(circle_at_45%_40%,rgba(255,255,255,0.18),transparent_26%)]"
        animate={{ opacity: [0, 0.22, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2.8, ease: "easeInOut" }}
      />

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(205,195,176,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(205,195,176,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating Particles - Fewer on mobile */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full z-[2] hidden sm:block"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background z-[3]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 z-[3]" />
      
      {/* Animated Lines - Hidden on mobile */}
      <svg className="absolute inset-0 w-full h-full z-[2] opacity-20 hidden md:block" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="70%"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.line
          x1="100%"
          y1="20%"
          x2="0%"
          y2="80%"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#cdc3b0" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Rating Badge */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-1/2 top-[78px] z-30 -translate-x-1/2 sm:top-[88px]"
      >
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-premium border border-primary/20 shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Star className="w-3 h-3 text-primary fill-primary" />
          </motion.div>
          <span className="whitespace-nowrap text-[10px] sm:text-sm text-primary font-semibold">Premium Rated on Google | 4.2 Stars</span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center pt-28 sm:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-3 sm:mb-6 leading-tight"
        >
          <span className="text-foreground">Experience</span>
          <br />
          <motion.span 
            className="text-gold-gradient inline-block"
            animate={{ 
              textShadow: [
                "0 0 18px rgba(205,195,176,0.24)",
                "0 0 34px rgba(138,60,68,0.34)",
                "0 0 18px rgba(205,195,176,0.24)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Luxury Living
          </motion.span>
          <br />
          <span className="text-foreground">in Bangalore</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xs sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 sm:mb-8 leading-relaxed px-2"
        >
          Your trusted partner for premium real estate in Gottigere, Bengaluru. 
          Discover exceptional properties for buying, selling & rentals.
        </motion.p>

        {/* Service Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex justify-center gap-6 sm:gap-8 mb-4 sm:mb-8"
        >
          {[
            { icon: Building2, label: "Buy" },
            { icon: Home, label: "Sell" },
            { icon: Key, label: "Rent" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-1"
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full glass-premium border border-primary/30 flex items-center justify-center group cursor-pointer hover:border-primary/60 transition-all duration-300">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.16,
                  }}
                >
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-primary/80" />
                </motion.div>
              </div>
              <span className="text-[10px] sm:text-sm text-muted-foreground font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 px-4"
        >
          <motion.a
            href="/properties"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-5 sm:px-8 py-2.5 sm:py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full text-[11px] sm:text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 gold-glow relative group overflow-hidden"
          >
            <span className="relative z-10">Explore Premium Properties</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-5 sm:px-8 py-2.5 sm:py-4 border-2 border-primary/50 text-foreground rounded-full text-[11px] sm:text-sm font-semibold uppercase tracking-wider hover:border-primary hover:bg-primary/10 transition-all duration-300 relative group"
          >
            <span className="relative z-10">Book Luxury Consultation</span>
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/5"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-6 sm:mt-12 flex items-center justify-center gap-1.5 sm:gap-2 text-muted-foreground"
        >
          <MapPin className="w-3 h-3 text-primary" />
          <span className="text-[10px] sm:text-sm">Himagiri Meadows, Gottigere, Bengaluru</span>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
        </motion.div>
      </motion.div>

      {/* Corner Decorations - Hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-20 sm:w-32 h-20 sm:h-32 border-l-2 border-t-2 border-primary/20 z-[4]" />
      <div className="hidden sm:block absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 border-r-2 border-t-2 border-primary/20 z-[4]" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-20 sm:w-32 h-20 sm:h-32 border-l-2 border-b-2 border-primary/20 z-[4]" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-20 sm:w-32 h-20 sm:h-32 border-r-2 border-b-2 border-primary/20 z-[4]" />
    </section>
  )
}
