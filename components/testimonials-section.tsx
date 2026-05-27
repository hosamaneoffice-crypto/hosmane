"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Homeowner",
    content: "Very soft spoken and amazing service to help us finding a rented Apartment. The team was incredibly patient and found us the perfect home within our budget.",
    rating: 5,
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Property Investor",
    content: "Keep up the good work. Hosamane Properties made the entire process of buying my second property seamless. Highly professional team!",
    rating: 5,
    avatar: "RK",
  },
  {
    id: 3,
    name: "Anitha Reddy",
    role: "First-time Buyer",
    content: "Exceptional service from start to finish. They understood exactly what I was looking for and delivered beyond my expectations. Truly a premium experience.",
    rating: 5,
    avatar: "AR",
  },
  {
    id: 4,
    name: "Vikram Malhotra",
    role: "Business Owner",
    content: "Found the perfect commercial space for my business. The team&apos;s knowledge of the local market is unmatched. Would definitely recommend!",
    rating: 5,
    avatar: "VM",
  },
]

function TestimonialCard({ testimonial, isActive }: { testimonial: typeof testimonials[0]; isActive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 }}
      transition={{ duration: 0.5 }}
      className={`p-8 rounded-2xl glass border transition-all duration-500 ${
        isActive ? "border-primary/30" : "border-border/30"
      }`}
    >
      <Quote className="w-10 h-10 text-primary/30 mb-6" />
      
      <p className="text-lg text-foreground leading-relaxed mb-6">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-primary fill-primary" />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-semibold">{testimonial.avatar}</span>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            What Our <span className="text-gold-gradient">Clients</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from satisfied clients who found their dream properties with us
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(activeIndex, activeIndex + 2).map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                isActive={true}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-primary" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Google Review Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-full glass border border-primary/20">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 4 ? "text-primary fill-primary" : "text-primary/50 fill-primary/50"}`} />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.2</span>
            <span className="text-muted-foreground">on Google Reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
