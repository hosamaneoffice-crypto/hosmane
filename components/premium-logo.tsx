"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PremiumLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative flex items-center gap-3 group"
    >
      <div className="relative h-12 w-12 sm:h-14 sm:w-14">
        <motion.div
          className="absolute inset-1 rounded-full bg-primary/20 blur-xl"
          animate={{
            opacity: [0.22, 0.48, 0.22],
            scale: [0.92, 1.08, 0.92],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ pointerEvents: "none" }}
        />
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="relative z-10 h-full w-full"
        >
          <Image
            src="/images/transparent-white-logo.png"
            alt="Hoshamane Properties"
            fill
            priority
            sizes="56px"
            className="object-contain drop-shadow-[0_0_16px_rgba(205,195,176,0.26)]"
          />
        </motion.div>
        <motion.div
          className="absolute inset-y-1 left-0 z-20 w-5 rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm"
          animate={{
            x: ["-140%", "260%"],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            repeatDelay: 2.4,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="hidden sm:block">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-sm font-semibold text-foreground leading-tight">
            <span className="block">HOSHAMANE</span>
            <span className="block text-xs font-light text-primary">PROPERTIES</span>
          </h1>
        </motion.div>
      </div>
    </motion.div>
  )
}
