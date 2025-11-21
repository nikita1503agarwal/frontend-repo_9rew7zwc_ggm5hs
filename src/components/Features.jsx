import React from 'react'
import { motion } from 'framer-motion'
import { Headphones, MessageCircle, Globe2, ShieldCheck, PhoneCall, Wallet, Settings2, History, Layers3, FileText, Users2, Cpu } from 'lucide-react'

const items = [
  { icon: Cpu, title: 'Organization Deployments', desc: 'Spin up unlimited agent deployments across teams and products.', type: 'deployments' },
  { icon: Settings2, title: 'Control Panel', desc: 'Manage intents, knowledge, routing, and channels from one place.', type: 'control' },
  { icon: ShieldCheck, title: 'Advanced Login & Verification', desc: 'SSO/OAuth, role-based access, org-wide permissions.', type: 'login' },
  { icon: Globe2, title: 'Multi‑Lingual', desc: 'Serve users in 100+ locales with automatic detection.', type: 'globe' },
  { icon: MessageCircle, title: 'Website & WhatsApp', desc: 'Drop-in widgets and WhatsApp integration with concurrency.', type: 'chat' },
  { icon: Headphones, title: 'Voice Calls', desc: 'Natural voice calls with escalation to humans and CRM add-on.', type: 'voice' },
  { icon: FileText, title: 'Advanced File Handling', desc: 'Ingest PDFs, docs, CSVs. 10M characters knowledge base.', type: 'files' },
  { icon: History, title: 'Conversation History', desc: 'Text and voice logs preserved per agreement window.', type: 'history' },
  { icon: Wallet, title: 'Flexible Billing', desc: 'Usage-based with add-ons like dedicated numbers.', type: 'billing' },
  { icon: Layers3, title: 'Themes & UI Sizes', desc: 'Right corner, center, or full screen. Choose agent theme.', type: 'themes' },
  { icon: Users2, title: 'Training & Onboarding', desc: 'White-glove one-time setup and ongoing priority support.', type: 'training' },
  { icon: PhoneCall, title: 'Concurrent Calls', desc: 'Scale voice concurrency for peak moments without drops.', type: 'concurrency' },
]

function RowAnimation({ type }) {
  // Futuristic mini-visuals using animated SVGs; no extra deps beyond framer-motion
  const common = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5 },
  }

  const stroke = 'rgba(255,255,255,0.6)'
  const glow = 'rgba(168,85,247,0.6)'
  const accent = 'rgba(251,191,36,0.8)'

  switch (type) {
    case 'deployments':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(139,92,246,0.5)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle cx="150" cy="60" r="22" fill="url(#g1)" />
          {[0,1,2,3,4,5].map((i)=> (
            <motion.circle key={i} cx="150" cy="60" r={38 + i*10} fill="none" stroke={i%2?glow:stroke} strokeWidth="0.8"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 + i*0.15, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
          ))}
          {[0,1,2,3,4,5,6,7].map((i)=> (
            <motion.circle key={'d'+i} r="3" fill={accent}
              animate={{
                cx: [150 + Math.cos((i/8)*Math.PI*2)*50, 150 + Math.cos((i/8)*Math.PI*2 + Math.PI)*50],
                cy: [60 + Math.sin((i/8)*Math.PI*2)*30, 60 + Math.sin((i/8)*Math.PI*2 + Math.PI)*30]
              }}
              transition={{ duration: 2 + (i%3)*0.4, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
        </motion.svg>
      )
    case 'control':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          {[20, 55, 90].map((y, idx) => (
            <g key={y}>
              <rect x="20" y={y-5} width="260" height="10" rx="5" fill="rgba(255,255,255,0.08)" />
              <motion.rect x="20" y={y-5} height="10" rx="5" fill={idx===1?glow:accent}
                animate={{ width: [60, 180, 120, 240, 90] }}
                transition={{ duration: 3 + idx, repeat: Infinity, ease: 'easeInOut' }} />
            </g>
          ))}
        </motion.svg>
      )
    case 'login':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          <rect x="90" y="25" width="120" height="70" rx="10" fill="rgba(255,255,255,0.05)" stroke={stroke} />
          <circle cx="120" cy="60" r="12" fill="none" stroke={glow} />
          <rect x="140" y="52" width="50" height="16" rx="8" fill="rgba(255,255,255,0.08)" />
          <motion.rect x="95" y="28" width="110" height="64" fill="url(#scan)" />
          <defs>
            <linearGradient id="scan" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(168,85,247,0.25)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <motion.rect x="95" y="28" width="110" height="64" fill="url(#scan)"
            animate={{ y: [28, 28, 28], }} />
          <motion.line x1="95" x2="205" stroke={accent} strokeWidth="1"
            animate={{ y1: [28, 92], y2: [28, 92] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
        </motion.svg>
      )
    case 'globe':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          <circle cx="150" cy="60" r="36" fill="rgba(99,102,241,0.1)" stroke={glow} />
          {[0, 30, 60, 90].map((r,i)=> (
            <motion.ellipse key={r} cx="150" cy="60" rx="36" ry="14" fill="none" stroke={stroke}
              animate={{ rotate: [r, r+180] }} origin="150 60" transition={{ duration: 6 + i, repeat: Infinity, ease: 'linear' }} />
          ))}
          {[0,1,2,3,4].map((i)=> (
            <motion.circle key={i} r="3" fill={accent}
              animate={{ cx: [150-36,150+36], cy: [60-10,60+10] }} transition={{ duration: 3 + i*0.5, repeat: Infinity, repeatType: 'reverse' }} />
          ))}
        </motion.svg>
      )
    case 'chat':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          <g>
            <rect x="40" y="25" width="110" height="60" rx="12" fill="rgba(255,255,255,0.06)" stroke={stroke} />
            <polygon points="80,85 92,75 68,75" fill="rgba(255,255,255,0.06)" />
            {[0,1,2].map((i)=> (
              <motion.circle key={i} cx={80 + i*16} cy="55" r="4" fill={glow}
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }} transition={{ duration: 1.2, delay: i*0.15, repeat: Infinity }} />
            ))}
          </g>
          <g>
            <rect x="160" y="35" width="100" height="50" rx="12" fill="rgba(251,191,36,0.12)" stroke={accent} />
            <polygon points="220,85 232,75 208,75" fill="rgba(251,191,36,0.12)" />
          </g>
        </motion.svg>
      )
    case 'voice':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          {[0,1,2,3,4,5,6,7,8,9].map((i)=> (
            <motion.rect key={i} x={40 + i*22} y="40" width="10" rx="3" fill={i%2?glow:accent}
              animate={{ height: [10, 60, 18, 40, 12] }} transition={{ duration: 1.6, delay: i*0.05, repeat: Infinity, ease: 'easeInOut' }} />
          ))}
        </motion.svg>
      )
    case 'files':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full overflow-visible">
          {[0,1,2,3,4].map((i)=> (
            <motion.g key={i} transform={`translate(${60 + i*40},90)`}
              animate={{ y: [90, 20, 90], rotate: [0, -10, 0] }} transition={{ duration: 3 + i*0.3, repeat: Infinity, ease: 'easeInOut' }}>
              <rect x="-12" y="-16" width="24" height="32" rx="3" fill="rgba(255,255,255,0.06)" stroke={stroke} />
              <line x1="-6" x2="6" y1="-6" y2="-6" stroke={glow} />
              <line x1="-6" x2="8" y1="0" y2="0" stroke={stroke} />
            </motion.g>
          ))}
        </motion.svg>
      )
    case 'history':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          <motion.line x1="40" x2="260" y1="60" y2="60" stroke={stroke} strokeWidth="1" strokeDasharray="4 6"
            animate={{ strokeDashoffset: [0, 40] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
          {[0,1,2,3,4].map((i)=> (
            <motion.circle key={i} cy="60" r="5" fill={i%2?glow:accent}
              animate={{ cx: [60 + i*40, 80 + i*40] }} transition={{ duration: 1.6, repeat: Infinity, repeatType: 'reverse' }} />
          ))}
        </motion.svg>
      )
    case 'billing':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          <motion.circle cx="150" cy="60" r="26" fill="rgba(251,191,36,0.1)" stroke={accent}
            animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
          <motion.text x="150" y="66" textAnchor="middle" fill={accent} fontSize="22" fontFamily="system-ui" fontWeight="700"
            animate={{ y: [66, 62, 66] }}>$</motion.text>
        </motion.svg>
      )
    case 'themes':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          {[0,1,2].map((i)=> (
            <motion.rect key={i} x={80 + i*30} y={40 - i*6} width={120 - i*20} height={60 - i*10} rx="10"
              fill={`rgba(255,255,255,${0.06 + i*0.04})`} stroke={i%2?glow:stroke}
              animate={{ y: [40 - i*6, 36 - i*6, 40 - i*6] }} transition={{ duration: 2 + i*0.3, repeat: Infinity, ease: 'easeInOut' }} />
          ))}
        </motion.svg>
      )
    case 'training':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          <circle cx="150" cy="60" r="30" fill="rgba(168,85,247,0.08)" stroke={glow} />
          <motion.circle cx="150" cy="60" r="30" fill="none" stroke={accent} strokeWidth="4" strokeDasharray="180 200"
            animate={{ strokeDashoffset: [180, 360] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
          <motion.text x="150" y="66" textAnchor="middle" fill="white" fontSize="14" fontFamily="system-ui"
            animate={{ opacity: [0.6, 1, 0.6] }}>Set up</motion.text>
        </motion.svg>
      )
    case 'concurrency':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          {[0,1,2].map((row)=> (
            <g key={row}>
              {[0,1,2,3,4,5,6,7,8,9].map((i)=> (
                <motion.rect key={i} x={40 + i*22} y={30 + row*24} width="10" rx="3" fill={row===1?glow:accent}
                  animate={{ height: [8, 28 + (row*6), 12, 22] }} transition={{ duration: 1.4, delay: (row*0.1) + i*0.03, repeat: Infinity, ease: 'easeInOut' }} />
              ))}
            </g>
          ))}
        </motion.svg>
      )
    default:
      return null
  }
}

function FeatureRow({ icon: Icon, title, desc, type, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
    >
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500/30 to-amber-400/30 ring-1 ring-white/10">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold leading-tight">{title}</h3>
            <p className="mt-1 text-sm text-white/70">{desc}</p>
          </div>
        </div>
        <div className="relative mt-3 w-full md:mt-0 md:w-1/2">
          <RowAnimation type={type} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
        <div className="absolute -inset-40 bg-[conic-gradient(from_0deg,rgba(168,85,247,0.12),transparent_30%,rgba(251,191,36,0.12),transparent_70%)] blur-2xl" />
      </div>
    </motion.div>
  )
}

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything you need to launch a conversational AI business</h2>
          <p className="mt-3 text-white/70">From brand customization to enterprise governance—launch once and operate everywhere.</p>
        </div>

        <div className="flex flex-col gap-4">
          {items.map((item, idx) => (
            <FeatureRow key={item.title} index={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
