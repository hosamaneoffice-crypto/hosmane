"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone } from "lucide-react"
import { useState } from "react"

export function FloatingWhatsApp() {
  const [showCalls, setShowCalls] = useState(false)

  const whatsappNumber = "919900797419"
  const whatsappMessage = encodeURIComponent(
    "Hello Manjunath! I'm interested in learning more about your property listings."
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Call buttons — visible when phone icon is clicked */}
      {showCalls && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-end gap-2"
        >
          <motion.a
            href="tel:+919900797419"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            <span>+91 99007 97419</span>
          </motion.a>
          <motion.a
            href="tel:+919008910419"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            <span>+91 90089 10419</span>
          </motion.a>
        </motion.div>
      )}

      {/* Call toggle button */}
      <motion.button
        onClick={() => setShowCalls((prev) => !prev)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-white" />
      </motion.button>

      {/* WhatsApp button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      </motion.a>
    </div>
  )
}
