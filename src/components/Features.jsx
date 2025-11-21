import React from 'react'
import { motion } from 'framer-motion'
import { Headphones, MessageCircle, Globe2, ShieldCheck, PhoneCall, Wallet, Settings2, History, Layers3, FileText, Users2, Cpu } from 'lucide-react'

const items = [
  { icon: Cpu, title: 'Organization Deployments', desc: 'Spin up unlimited agent deployments across teams and products.' },
  { icon: Settings2, title: 'Control Panel', desc: 'Manage intents, knowledge, routing, and channels from one place.' },
  { icon: ShieldCheck, title: 'Advanced Login & Verification', desc: 'SSO/OAuth, role-based access, org-wide permissions.' },
  { icon: Globe2, title: 'Multi‑Lingual', desc: 'Serve users in 100+ locales with automatic detection.' },
  { icon: MessageCircle, title: 'Website & WhatsApp', desc: 'Drop-in widgets and WhatsApp integration with concurrency.' },
  { icon: Headphones, title: 'Voice Calls', desc: 'Natural voice calls with escalation to humans and CRM add-on.' },
  { icon: FileText, title: 'Advanced File Handling', desc: 'Ingest PDFs, docs, CSVs. 10M characters knowledge base.' },
  { icon: History, title: 'Conversation History', desc: 'Text and voice logs preserved per agreement window.' },
  { icon: Wallet, title: 'Flexible Billing', desc: 'Usage-based with add-ons like dedicated numbers.' },
  { icon: Layers3, title: 'Themes & UI Sizes', desc: 'Right corner, center, or full screen. Choose agent theme.' },
  { icon: Users2, title: 'Training & Onboarding', desc: 'White-glove one-time setup and ongoing priority support.' },
  { icon: PhoneCall, title: 'Concurrent Calls', desc: 'Scale voice concurrency for peak moments without drops.' },
]

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything you need to launch a conversational AI business</h2>
          <p className="mt-3 text-white/70">From brand customization to enterprise governance—launch once and operate everywhere.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-500/30 to-amber-400/30 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
