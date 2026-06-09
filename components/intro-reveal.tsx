"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export function IntroReveal() {
  const [hasMounted, setHasMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setHasMounted(true)
    const timer = window.setTimeout(() => setIsVisible(false), 2600)
    return () => window.clearTimeout(timer)
  }, [])

  if (!hasMounted) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.75, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0.85] }}
            transition={{ duration: 2.35, times: [0, 0.25, 0.8, 1], ease: "easeOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(205,195,176,0.16),transparent_36%),linear-gradient(135deg,rgba(120,35,46,0.18),transparent_45%),linear-gradient(225deg,rgba(82,98,115,0.18),transparent_42%)]"
          />

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: [0, 1, 1], opacity: [0, 0.9, 0] }}
            transition={{ duration: 2.2, times: [0, 0.55, 1], ease: "easeInOut" }}
            className="absolute h-px w-[70vw] origin-center bg-gradient-to-r from-transparent via-primary to-transparent"
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-5 px-6 text-center"
          >
            <motion.div
              animate={{
                filter: [
                  "drop-shadow(0 0 0 rgba(205,195,176,0))",
                  "drop-shadow(0 0 28px rgba(205,195,176,0.42))",
                  "drop-shadow(0 0 12px rgba(205,195,176,0.22))",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-28 w-28 sm:h-36 sm:w-36"
            >
              <Image
                src="/images/transparent-white-logo.png"
                alt="Hosamane Properties"
                fill
                priority
                sizes="144px"
                className="object-contain"
              />
            </motion.div>

            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.55 }}
                className="text-xs font-semibold uppercase text-primary"
              >
                Hosamane Properties
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.75 }}
                className="font-serif text-2xl text-foreground sm:text-4xl"
              >
                Crafting landmark living
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: "-120%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.85, 0] }}
            transition={{ duration: 1.45, delay: 0.75, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
