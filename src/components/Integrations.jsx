import React from 'react'
import { motion } from 'framer-motion'
import { Globe2, Phone, MessageSquareText, PhoneCall } from 'lucide-react'

export default function Integrations() {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Integrate GENX‑AI where your users are</h2>
          <p className="mt-3 text-white/70">Website widget, WhatsApp, and dedicated phone numbers with concurrency and escalation.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { Icon: Globe2, title: 'Website', desc: 'Drop-in widget with multiple sizes and themes.' },
            { Icon: MessageSquareText, title: 'WhatsApp', desc: 'Verified business messaging with rich media.' },
            { Icon: PhoneCall, title: 'Voice', desc: 'Dedicated number add-on with call logs & CRM.' },
          ].map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 backdrop-blur"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
              <div className="mt-4 text-sm text-white/60">SDKs, quickstart snippets, and copy‑paste embed codes included.</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
