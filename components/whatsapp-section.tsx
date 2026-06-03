"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react"

export function WhatsAppSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const whatsappNumber = "919900797419"
  const whatsappMessage = encodeURIComponent(
    "Hello Manjunath! I'm looking for a property and would love your expert guidance. Can we talk?"
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const highlights = [
    {
      icon: Clock,
      title: "Fast Responses",
      desc: "Replies within minutes, not hours",
    },
    {
      icon: Phone,
      title: "Two Direct Lines",
      desc: "+91 99007 97419 · +91 90089 10419",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      desc: "Deep knowledge of Bannerghatta Road & surrounds",
    },
    {
      icon: MessageCircle,
      title: "Free Consultation",
      desc: "No charges, no obligations — just honest advice",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-primary/5" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/15 border border-green-500/20 mb-6">
              <MessageCircle className="w-10 h-10 text-green-500" />
            </div>
            <span className="text-primary text-sm uppercase tracking-widest mb-3 block">
              Talk to Manjunath
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Get a <span className="text-gold-gradient">Free Consultation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Skip the forms. Reach Manjunath directly on WhatsApp — share your requirements and
              get personalised property shortlists, pricing insights, and site visit schedules.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                  className="p-5 rounded-xl glass border border-border/30 text-center"
                >
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full text-base font-semibold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Manjunath
            </motion.a>

            <motion.a
              href="tel:+919900797419"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary/40 text-foreground rounded-full text-base font-semibold hover:border-primary hover:bg-primary/10 transition-colors"
            >
              <Phone className="w-5 h-5 text-primary" />
              Call Now
            </motion.a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground text-center">
            Available Mon – Sat · 9 AM – 8 PM IST
          </p>
        </motion.div>
      </div>
    </section>
  )
}
