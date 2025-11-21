import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Headphones, MessageCircle, Globe2, ShieldCheck, PhoneCall, Wallet, Settings2, History, Layers3, FileText, Users2, Cpu } from 'lucide-react'

const items = [
  {
    icon: Cpu,
    title: 'Organization Deployments',
    desc: 'Launch unlimited AI agents across products, teams, and markets. Define environments (dev/stage/prod), inherit shared knowledge, and promote configurations with change history and rollback.',
    type: 'deployments',
  },
  {
    icon: Settings2,
    title: 'Control Panel',
    desc: 'Operate everything from one command center: intents, flows, knowledge sources, channel routing, analytics, error tracing, and A/B experiments with safe guards.',
    type: 'control',
  },
  {
    icon: ShieldCheck,
    title: 'Advanced Login & Verification',
    desc: 'Offer SSO/OAuth, email passkeys, and role-based access. Enforce org policies, audit trails, and granular permissions down to deployment and dataset levels.',
    type: 'login',
  },
  {
    icon: Globe2,
    title: 'Multi‑Lingual',
    desc: 'Serve users in 100+ locales with automatic detection, locale-specific prompts, voice models, and fallbacks. Tune tone and formality per region.',
    type: 'globe',
  },
  {
    icon: MessageCircle,
    title: 'Website & WhatsApp',
    desc: 'Embed a website widget in minutes and connect WhatsApp Business. Route high-traffic chats with concurrency controls and SLA-based escalation.',
    type: 'chat',
  },
  {
    icon: Headphones,
    title: 'Voice Calls',
    desc: 'Spin up natural, low-latency voice agents with IVR replacement, CRM lookups, and human handoff. Add a dedicated number and tune behavior by queue.',
    type: 'voice',
  },
  {
    icon: FileText,
    title: 'Advanced File Handling',
    desc: 'Ingest PDFs, docs, spreadsheets, and URLs. Chunk, embed, and version your knowledge base up to 10M characters with per-source access controls.',
    type: 'files',
  },
  {
    icon: History,
    title: 'Conversation History',
    desc: 'Persist text and voice transcripts with redaction, export, and retention windows. Search across sessions and replay voice streams for QA.',
    type: 'history',
  },
  {
    icon: Wallet,
    title: 'Flexible Billing',
    desc: 'Simple usage-based pricing with add-ons like dedicated numbers and premium voices. Spend alerts, cost breakdowns, and caps to stay in control.',
    type: 'billing',
  },
  {
    icon: Layers3,
    title: 'Themes & UI Sizes',
    desc: 'Match your brand with themes, typography, and avatar styles. Choose right-corner, centered modal, or full-screen experiences with responsive layouts.',
    type: 'themes',
  },
  {
    icon: Users2,
    title: 'Training & Onboarding',
    desc: 'A guided 3‑minute setup, then white‑glove onboarding. We help map intents, connect data, and institute review loops for quality and compliance.',
    type: 'training',
  },
  {
    icon: PhoneCall,
    title: 'Concurrent Calls',
    desc: 'Scale to peak demand without drops. Smart rate limits, queueing, and parallel voice sessions keep performance smooth under heavy load.',
    type: 'concurrency',
  },
]

function RowAnimation({ type, focused }) {
  // Futuristic mini-visuals using animated SVGs; intensity increases when focused
  const common = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5 },
  }

  const stroke = 'rgba(255,255,255,0.6)'
  const glow = focused ? 'rgba(168,85,247,0.95)' : 'rgba(168,85,247,0.6)'
  const accent = focused ? 'rgba(251,191,36,1)' : 'rgba(251,191,36,0.8)'

  switch (type) {
    case 'deployments':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(139,92,246,0.55)" />
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

function FeatureRow({ icon: Icon, title, desc, type, index, focused, landed, onMountRef }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-40% 0px -40% 0px' })

  useEffect(() => {
    if (onMountRef) onMountRef(index, ref)
  }, [index, onMountRef])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-3xl border bg-white/5 p-6 md:p-8 backdrop-blur ${focused ? 'border-purple-400/40 ring-1 ring-purple-400/30' : 'border-white/10'} min-h-[240px] md:min-h-[280px]`}
    >
      {/* Absorb pulse when mascot lands */}
      {landed && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full"
          initial={{ scale: 0.6, opacity: 0.7 }}
          animate={{ scale: [0.6, 2.2, 3.6], opacity: [0.7, 0.4, 0] }}
          transition={{ duration: 1 }}
          style={{
            background: 'radial-gradient(circle at center, rgba(168,85,247,0.6), transparent 60%)',
            filter: 'blur(4px)'
          }}
        />
      )}

      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-10">
        <div className="flex min-w-0 flex-1 items-start gap-5">
          <motion.div
            animate={{ scale: focused ? 1.06 : 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-500/30 to-amber-400/30 ring-1 ring-white/10"
          >
            <Icon className="h-7 w-7 text-white" />
          </motion.div>
          <div>
            <h3 className="text-xl font-semibold leading-tight md:text-2xl">{title}</h3>
            <p className="mt-2 text-sm text-white/75 md:text-base">{desc}</p>
          </div>
        </div>
        <div className="relative mt-3 w-full md:mt-0 md:w-1/2">
          <RowAnimation type={type} focused={focused} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden>
        <div className="absolute -inset-40 bg-[conic-gradient(from_0deg,rgba(168,85,247,0.12),transparent_30%,rgba(251,191,36,0.12),transparent_70%)] blur-2xl" />
      </div>
    </motion.div>
  )
}

export default function Features() {
  const sectionRef = useRef(null)
  const rowRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [indicatorY, setIndicatorY] = useState(0)
  const [mascotPos, setMascotPos] = useState({ x: 0, y: 0 })
  const [landedIndex, setLandedIndex] = useState(-1)
  const mascotControls = useAnimation()

  const setRefAtIndex = (index, ref) => {
    rowRefs.current[index] = ref
  }

  // Observe which row is most centered in viewport
  useEffect(() => {
    const observers = []
    rowRefs.current.forEach((r, idx) => {
      if (!r?.current) return
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndex((prev) => (idx !== prev ? idx : prev))
            }
          })
        },
        { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      observer.observe(r.current)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Update indicator position
  const updatePositions = () => {
    const sec = sectionRef.current
    const activeRef = rowRefs.current[activeIndex]?.current
    if (!sec || !activeRef) return
    const secRect = sec.getBoundingClientRect()
    const rowRect = activeRef.getBoundingClientRect()
    const y = rowRect.top - secRect.top + rowRect.height / 2
    setIndicatorY(y)

    // Mascot target slightly left of card content (near icon)
    const x = 26 // left gutter offset for mascot
    setMascotPos({ x, y })
  }

  useEffect(() => {
    updatePositions()
    const onScroll = () => updatePositions()
    const onResize = () => updatePositions()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [activeIndex])

  // Animate mascot traveling and landing pulse
  useEffect(() => {
    const go = async () => {
      await mascotControls.start({ x: mascotPos.x, y: mascotPos.y - 40, transition: { type: 'spring', stiffness: 160, damping: 18 } })
      await mascotControls.start({ y: mascotPos.y, transition: { type: 'spring', stiffness: 200, damping: 16 } })
      setLandedIndex(activeIndex)
      // clear pulse after a moment
      setTimeout(() => setLandedIndex(-1), 900)
    }
    go()
  }, [mascotPos.x, mascotPos.y])

  return (
    <section ref={sectionRef} id="features" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.08),transparent_50%)]" />

      {/* Flowing conduit line that moves to the active feature */}
      <motion.div aria-hidden className="pointer-events-none absolute left-3 hidden h-full w-1 rounded-full bg-white/5 sm:block" />

      {/* AI Mascot Sphere (brand element) */}
      <motion.div
        aria-label="AI companion"
        className="pointer-events-none absolute z-20 hidden select-none sm:block"
        animate={mascotControls}
        initial={{ x: 26, y: 0 }}
      >
        {/* Sphere */}
        <motion.div
          className="relative h-8 w-8 rounded-full"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(251,191,36,0.9), rgba(168,85,247,0.85) 40%, rgba(59,130,246,0.85) 70%)',
            boxShadow: '0 0 24px rgba(168,85,247,0.6), 0 0 48px rgba(251,191,36,0.35)'
          }}
        >
          {/* subtle highlight */}
          <div className="absolute left-1 top-1 h-2 w-2 rounded-full bg-white/70 blur-[1px]" />
        </motion.div>
        {/* Trail */}
        <motion.div
          className="-mt-2 ml-3 h-10 w-2 origin-top rounded-full"
          animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.35, 0.12, 0.35] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          style={{
            background:
              'linear-gradient(to bottom, rgba(168,85,247,0.6), rgba(168,85,247,0.0))'
          }}
        />
      </motion.div>

      {/* Moving spotlight that follows focus across rows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 hidden sm:block"
        style={{ top: 0 }}
        animate={{ top: (indicatorY || 0) - 140 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <div className="mx-auto h-44 max-w-5xl rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.12),transparent_70%)] blur-2xl" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything you need to launch a conversational AI business</h2>
          <p className="mt-3 text-white/70">From brand customization to enterprise governance—launch once and operate everywhere.</p>
        </div>

        <div className="flex flex-col gap-6">
          {items.map((item, idx) => (
            <FeatureRow
              key={item.title}
              index={idx}
              focused={idx === activeIndex}
              landed={idx === landedIndex}
              onMountRef={(i, r) => setRefAtIndex(i, r)}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
