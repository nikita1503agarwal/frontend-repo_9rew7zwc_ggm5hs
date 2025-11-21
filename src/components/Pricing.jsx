import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$99',
    tagline: '3 min onboarding, brandable widget',
    features: [
      'Single Organization',
      '1 Deployment',
      'Website + Text Chat',
      'Basic Logs',
      'Email Support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$399',
    tagline: 'Multi‑deployment, WhatsApp & voice ready',
    features: [
      'Unlimited Deployments',
      'Website + WhatsApp + Voice',
      'Advanced Login & RBAC',
      'Conversation History',
      'Priority Support',
    ],
    cta: 'Upgrade to Growth',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Let’s Talk',
    tagline: 'SLA, dedicated numbers, CRM, custom SSO',
    features: [
      'SLA & SSO',
      'Dedicated Phone Numbers',
      'Inbuilt CRM Escalation',
      'Training & Onboarding',
      'Flexible Billing',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Simple, flexible pricing</h2>
          <p className="mt-3 text-white/70">Usage-based billing with add‑ons for dedicated numbers and CRM escalation.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className={`relative rounded-3xl border ${t.popular ? 'border-cyan-400/30 bg-cyan-500/5' : 'border-white/10 bg-white/5'} p-6 backdrop-blur`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-slate-900">Popular</span>
              )}
              <div className="text-lg font-semibold">{t.name}</div>
              <div className="mt-2 text-3xl font-bold">{t.price}<span className="text-base font-normal text-white/60">/mo</span></div>
              <div className="mt-1 text-sm text-white/70">{t.tagline}</div>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold shadow ${t.popular ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300' : 'bg-white text-slate-900 hover:bg-slate-100'}`}>{t.cta}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
