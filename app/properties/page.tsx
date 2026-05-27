'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { properties } from '@/lib/properties-data'
import { Building2, Bed, Bath, Ruler, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function PropertiesPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const filteredProperties = selectedType
    ? properties.filter(p => p.type === selectedType)
    : properties

  const propertyTypes = Array.from(new Set(properties.map(p => p.type)))

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/45 to-background">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
                All Properties
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our complete collection of premium residential properties
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3">
              <motion.button
                onClick={() => setSelectedType(null)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedType === null
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-primary/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All
              </motion.button>
              {propertyTypes.map(type => (
                <motion.button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedType === type
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-primary/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {type}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {property.featured && (
                      <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {property.type}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                        {property.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{property.location}</p>
                    </div>

                    {/* Price */}
                    <div className="pt-2 border-t border-border">
                      <p className="text-2xl font-bold text-primary">{property.price}</p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Bed className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <p className="text-sm font-semibold text-foreground">{property.bedrooms}</p>
                        <p className="text-xs text-muted-foreground">Beds</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Bath className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <p className="text-sm font-semibold text-foreground">{property.bathrooms}</p>
                        <p className="text-xs text-muted-foreground">Baths</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Ruler className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <p className="text-sm font-semibold text-foreground">{property.area}</p>
                        <p className="text-xs text-muted-foreground">Area</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {property.description}
                    </p>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
                    >
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No properties found</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/40">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                Can&apos;t Find What You&apos;re Looking For?
              </h2>
              <p className="text-lg text-muted-foreground">
                Our expert consultants can help you find the perfect property
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <motion.a
                  href="tel:+919900797419"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </motion.a>
                <motion.a
                  href="mailto:info@hosamaneproperties.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
