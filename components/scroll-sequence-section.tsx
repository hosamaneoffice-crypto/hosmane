"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const FRAME_COUNT = 240
const framePath = (frame: number) => `/frames/ezgif-frame-${String(frame).padStart(3, "0")}.jpg`

export function ScrollSequenceSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const framesRef = useRef<HTMLImageElement[]>([])
  const targetProgressRef = useRef(0)
  const currentProgressRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  const [, setLoadedCount] = useState(0)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 8%", "end end"],
  })

  const eyebrowY = useTransform(scrollYProgress, [0, 0.35], [24, 0])
  const titleY = useTransform(scrollYProgress, [0.08, 0.5], [46, -8])
  const copyOpacity = useTransform(scrollYProgress, [0.18, 0.42, 0.72], [0, 1, 0.72])
  const canvasScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.045, 1.015, 1])
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0.72, 1, 1, 0.88])
  const progressScale = useTransform(scrollYProgress, [0.02, 0.98], [0, 1])

  useEffect(() => {
    let isMounted = true
    framesRef.current = []
    setLoadedCount(0)

    for (let i = 1; i <= FRAME_COUNT; i += 1) {
      const img = new window.Image()
      img.decoding = "async"
      img.src = framePath(i)
      img.onload = () => {
        if (!isMounted) return
        framesRef.current[i - 1] = img
        setLoadedCount((count) => count + 1)
      }
      framesRef.current[i - 1] = img
    }

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const getReadyFrame = (index: number) => {
      for (let offset = 0; offset < FRAME_COUNT; offset += 1) {
        const previous = framesRef.current[index - offset]
        if (previous?.complete) return previous

        const next = framesRef.current[index + offset]
        if (next?.complete) return next
      }

      return undefined
    }

    const sizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.max(1, Math.floor(rect.width * dpr))
      const height = Math.max(1, Math.floor(rect.height * dpr))

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width
        canvas.height = height
      }

      return { width, height }
    }

    const drawImageCover = (img: HTMLImageElement, width: number, height: number) => {
      const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight)
      const drawWidth = img.naturalWidth * scale
      const drawHeight = img.naturalHeight * scale
      const x = (width - drawWidth) / 2
      const y = (height - drawHeight) / 2

      context.drawImage(img, x, y, drawWidth, drawHeight)
    }

    const drawFrame = (progress: number) => {
      const preciseFrame = Math.min(FRAME_COUNT - 1, Math.max(0, progress * (FRAME_COUNT - 1)))
      const index = Math.floor(preciseFrame)
      const blend = preciseFrame - index
      const img = getReadyFrame(index)
      if (!img || !img.complete) return

      const nextImg = framesRef.current[index + 1]
      const { width, height } = sizeCanvas()

      context.clearRect(0, 0, width, height)
      context.imageSmoothingEnabled = true
      context.imageSmoothingQuality = "high"
      context.globalAlpha = 1
      drawImageCover(img, width, height)

      if (nextImg?.complete && blend > 0.02) {
        context.globalAlpha = Math.min(0.55, blend * 0.72)
        drawImageCover(nextImg, width, height)
        context.globalAlpha = 1
      }
    }

    const render = () => {
      const delta = targetProgressRef.current - currentProgressRef.current
      currentProgressRef.current += delta * 0.085

      if (Math.abs(delta) < 0.00035) {
        currentProgressRef.current = targetProgressRef.current
      }

      drawFrame(currentProgressRef.current)
      rafRef.current = window.requestAnimationFrame(render)
    }

    targetProgressRef.current = scrollYProgress.get()
    currentProgressRef.current = targetProgressRef.current
    drawFrame(currentProgressRef.current)

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      targetProgressRef.current = latest
    })

    rafRef.current = window.requestAnimationFrame(render)
    const resizeObserver = new ResizeObserver(() => drawFrame(currentProgressRef.current))
    resizeObserver.observe(canvas)

    return () => {
      unsubscribe()
      resizeObserver.disconnect()
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [scrollYProgress])

  return (
    <section ref={sectionRef} className="relative h-[430vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.canvas
          ref={canvasRef}
          style={{ scale: canvasScale, opacity: canvasOpacity }}
          className="absolute inset-0 h-full w-full"
          aria-label="Construction journey animation"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,transparent_0,rgba(9,12,18,0.04)_34%,rgba(9,12,18,0.5)_78%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/82 via-background/8 to-background/86" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/86 via-background/12 to-background/42" />
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-background to-transparent" />

        <div className="relative z-10 flex h-full items-end px-4 pb-16 sm:px-6 lg:px-8 lg:items-center lg:pb-0">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <motion.span
                style={{ y: eyebrowY }}
                className="mb-4 block text-xs font-semibold uppercase text-primary"
              >
                From ground to landmark
              </motion.span>
              <motion.h2
                style={{ y: titleY }}
                className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl"
              >
                Watch vision rise into address.
              </motion.h2>
              <motion.p
                style={{ opacity: copyOpacity }}
                className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base"
              >
                A cinematic construction journey placed between discovery and listings, so the story of trust arrives before the properties do.
              </motion.p>
              <div className="mt-8 h-px w-52 overflow-hidden rounded-full bg-foreground/14">
                <motion.div
                  style={{ scaleX: progressScale }}
                  className="h-full origin-left rounded-full bg-gradient-to-r from-primary via-accent to-primary"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  )
}
