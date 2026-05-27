'use client'

import { motion } from 'framer-motion'

export function ColorfulLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-2"
    >
      {/* Logo SVG */}
      <svg
        viewBox="0 0 48 48"
        className="w-12 h-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="buildingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4614f" />
            <stop offset="100%" stopColor="#c94d3f" />
          </linearGradient>
          <linearGradient id="buildingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e89968" />
            <stop offset="100%" stopColor="#d17f54" />
          </linearGradient>
          <linearGradient id="roofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left Building */}
        <motion.g
          animate={{ y: [-1, 1, -1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <rect x="6" y="14" width="8" height="18" fill="url(#buildingGradient1)" rx="1" filter="url(#glow)" />
          <rect x="8" y="16" width="2" height="2" fill="#fff" opacity="0.8" />
          <rect x="8" y="20" width="2" height="2" fill="#fff" opacity="0.8" />
          <rect x="8" y="24" width="2" height="2" fill="#fff" opacity="0.8" />
          <rect x="8" y="28" width="2" height="2" fill="#fff" opacity="0.8" />
        </motion.g>

        {/* Center Tall Building */}
        <motion.g
          animate={{ y: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          <rect x="18" y="8" width="8" height="24" fill="url(#buildingGradient2)" rx="1" filter="url(#glow)" />
          <rect x="20" y="10" width="2" height="2" fill="#fff" opacity="0.8" />
          <rect x="20" y="14" width="2" height="2" fill="#fff" opacity="0.8" />
          <rect x="20" y="18" width="2" height="2" fill="#fff" opacity="0.8" />
          <rect x="20" y="22" width="2" height="2" fill="#fff" opacity="0.8" />
          <rect x="20" y="26" width="2" height="2" fill="#fff" opacity="0.8" />
        </motion.g>

        {/* Right Building */}
        <motion.g
          animate={{ y: [-0.8, 0.8, -0.8] }}
          transition={{ duration: 2.8, repeat: Infinity }}
        >
          <rect x="30" y="16" width="8" height="16" fill="url(#buildingGradient1)" rx="1" filter="url(#glow)" />
          <rect x="32" y="18" width="2" height="2" fill="#fff" opacity="0.8" />
          <rect x="32" y="22" width="2" height="2" fill="#fff" opacity="0.8" />
          <rect x="32" y="26" width="2" height="2" fill="#fff" opacity="0.8" />
        </motion.g>

        {/* Roof/Apex Line */}
        <motion.path
          d="M 12 14 L 22 6 L 34 14 L 34 16 L 12 16 Z"
          fill="url(#roofGradient)"
          opacity="0.95"
          filter="url(#glow)"
          animate={{ 
            opacity: [0.9, 1, 0.9],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Accent dot that pulses */}
        <motion.circle
          cx="22"
          cy="8"
          r="1.5"
          fill="#fbbf24"
          animate={{
            r: [1.5, 2.5, 1.5],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      {/* Text Branding */}
      <div className="hidden sm:flex flex-col gap-0">
        <div className="font-serif font-bold text-lg bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
          Hoshamane
        </div>
        <div className="font-sans text-xs font-medium text-slate-600">
          Properties
        </div>
      </div>
    </motion.div>
  )
}
