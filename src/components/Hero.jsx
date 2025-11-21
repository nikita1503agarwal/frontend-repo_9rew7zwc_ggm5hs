import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* BG gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-24 md:grid-cols-2 md:gap-16 md:px-10">
        {/* Copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Futuristic Conversational AI SaaS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            Deploy a voice-first AI Agent everywhere
            <span className="block bg-gradient-to-r from-purple-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">in minutes, not months.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-xl text-base text-white/70 md:text-lg"
          >
            GENX-AI powers text, voice, and WhatsApp conversations with enterprise controls, training, logging, and flexible billing — ready for your brand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 shadow-lg shadow-purple-500/20 transition hover:bg-slate-100">
              Get Started • 3 min onboarding
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur transition hover:bg-white/10">
              Explore Features
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 grid max-w-xl grid-cols-2 gap-4 text-xs text-white/70 sm:grid-cols-3"
          >
            {[
              'Custom Branding',
              'Priority Support',
              'Org Control Panel',
              'Multi‑Lingual',
              'Advanced Login',
              'Agent Themes',
            ].map((t) => (
              <div key={t} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center backdrop-blur">
                {t}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Spline Scene */}
        <div className="relative h-[420px] w-full md:h-[560px]">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* Ring accent */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  )
}
