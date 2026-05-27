"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/images/slide-1.jpg",
    title: "Premium Apartments",
    subtitle: "Experience luxury living in Bangalore's finest residences",
    tag: "New Launch"
  },
  {
    id: 2,
    image: "/images/slide-2.jpg",
    title: "Exclusive Villas",
    subtitle: "Spacious homes with world-class amenities",
    tag: "Featured"
  },
  {
    id: 3,
    image: "/images/slide-3.jpg",
    title: "Luxury Penthouses",
    subtitle: "Elevate your lifestyle with panoramic city views",
    tag: "Premium"
  },
  {
    id: 4,
    image: "/images/slide-4.jpg",
    title: "Commercial Spaces",
    subtitle: "Prime locations for your business growth",
    tag: "Investment"
  }
]

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 2000)

    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  return (
    <section 
      className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-full">
                {slides[currentIndex].tag}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4 text-gold-gradient">
                {slides[currentIndex].title}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {slides[currentIndex].subtitle}
              </p>
              <motion.a
                href="#properties"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-8 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 gold-glow"
              >
                View Properties
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass border border-primary/20 text-foreground hover:bg-primary/10 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full glass border border-primary/20 text-foreground hover:bg-primary/10 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "w-8 bg-primary" 
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentIndex && (
              <motion.div
                layoutId="activeSlide"
                className="absolute inset-0 bg-primary rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground/10 z-20">
        <motion.div
          key={currentIndex}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "linear" }}
          className="h-full bg-primary"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        />
      </div>
    </section>
  )
}
