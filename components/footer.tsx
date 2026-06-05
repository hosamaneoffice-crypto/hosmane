"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter, MessageCircle } from "lucide-react"
import { PremiumLogo } from "./premium-logo"

const footerLinks = {
  services: [
    { label: "Buy Property", href: "/properties" },
    { label: "Rent Property", href: "/properties" },
    { label: "Sell Your Property", href: "#contact" },
    { label: "Property Management", href: "#services" },
    { label: "Investment Advisory", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Story", href: "#about" },
    { label: "Client Reviews", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
    { label: "Book a Site Visit", href: "#contact" },
  ],
  locations: [
    { label: "Gottigere", href: "/properties" },
    { label: "Bannerghatta Road", href: "/properties" },
    { label: "Whitefield", href: "/properties" },
    { label: "Hulimavu", href: "/properties" },
    { label: "Meenakshi Layout", href: "/properties" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappLink = `https://wa.me/919900797419?text=${encodeURIComponent("Hello Manjunath! I'd like to know more about your property listings.")}`

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center gap-3 mb-6">
                <PremiumLogo />
              </Link>

              <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
                Hosamane Properties — Bangalore's trusted name in premium real estate for over 15 years.
                We help families find their perfect home and investors discover the right opportunity.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.a
                  href="tel:+919900797419"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <span className="block text-xs text-muted-foreground/60 mb-0.5">Manjunath</span>
                    <span>+91 99007 97419</span>
                  </div>
                </motion.a>
                <motion.a
                  href="tel:+919008910419"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <div>
                    <span className="block text-xs text-muted-foreground/60 mb-0.5">Manjunath</span>
                    <span>+91 90089 10419</span>
                  </div>
                </motion.a>
                <motion.a
                  href="mailto:hosmaneproperties@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>hosmaneproperties@gmail.com</span>
                </motion.a>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>MLA Layout Main Rd, Himagiri Meadows, Gottigere, Bengaluru – 560076</span>
                </motion.div>
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-sm font-medium hover:bg-green-500/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </motion.a>
            </motion.div>
          </div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-6">Areas We Cover</h4>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center md:text-left"
          >
            © {currentYear} Hosamane Properties. All rights reserved. &nbsp;·&nbsp; Bangalore, Karnataka
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
