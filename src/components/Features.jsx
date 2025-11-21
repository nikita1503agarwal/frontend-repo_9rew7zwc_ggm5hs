import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView, useAnimation, useReducedMotion } from 'framer-motion'
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
  const prefersReduced = useReducedMotion()
  const common = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: prefersReduced ? 0 : 0.5 },
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
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: (prefersReduced?0:1.2) + i*0.15, repeat: prefersReduced?0:Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
          ))}
          {[0,1,2,3,4,5,6,7].map((i)=> (
            <motion.circle key={'d'+i} r="3" fill={accent}
              animate={{
                cx: [150 + Math.cos((i/8)*Math.PI*2)*50, 150 + Math.cos((i/8)*Math.PI*2 + Math.PI)*50],
                cy: [60 + Math.sin((i/8)*Math.PI*2)*30, 60 + Math.sin((i/8)*Math.PI*2 + Math.PI)*30]
              }}
              transition={{ duration: (prefersReduced?0:2) + (i%3)*0.4, repeat: prefersReduced?0:Infinity, ease: 'easeInOut' }}
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
                transition={{ duration: (prefersReduced?0:3) + idx, repeat: prefersReduced?0:Infinity, ease: 'easeInOut' }} />
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
            animate={{ y1: [28, 92], y2: [28, 92] }} transition={{ duration: prefersReduced?0:2, repeat: prefersReduced?0:Infinity, ease: 'easeInOut' }} />
        </motion.svg>
      )
    case 'globe':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          <circle cx="150" cy="60" r="36" fill="rgba(99,102,241,0.1)" stroke={glow} />
          {[0, 30, 60, 90].map((r,i)=> (
            <motion.ellipse key={r} cx="150" cy="60" rx="36" ry="14" fill="none" stroke={stroke}
              animate={{ rotate: [r, r+180] }} origin="150 60" transition={{ duration: (prefersReduced?0:6) + i, repeat: prefersReduced?0:Infinity, ease: 'linear' }} />
          ))}
          {[0,1,2,3,4].map((i)=> (
            <motion.circle key={i} r="3" fill={accent}
              animate={{ cx: [150-36,150+36], cy: [60-10,60+10] }} transition={{ duration: (prefersReduced?0:3) + i*0.5, repeat: prefersReduced?0:Infinity, repeatType: 'reverse' }} />
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
                animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }} transition={{ duration: prefersReduced?0:1.2, delay: i*0.15, repeat: prefersReduced?0:Infinity }} />
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
              animate={{ height: [10, 60, 18, 40, 12] }} transition={{ duration: prefersReduced?0:1.6, delay: i*0.05, repeat: prefersReduced?0:Infinity, ease: 'easeInOut' }} />
          ))}
        </motion.svg>
      )
    case 'files':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full overflow-visible">
          {[0,1,2,3,4].map((i)=> (
            <motion.g key={i} transform={`translate(${60 + i*40},90)`}
              animate={{ y: [90, 20, 90], rotate: [0, -10, 0] }} transition={{ duration: (prefersReduced?0:3) + i*0.3, repeat: prefersReduced?0:Infinity, ease: 'easeInOut' }}>
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
            animate={{ strokeDashoffset: [0, 40] }} transition={{ duration: prefersReduced?0:2, repeat: prefersReduced?0:Infinity, ease: 'linear' }} />
          {[0,1,2,3,4].map((i)=> (
            <motion.circle key={i} cy="60" r="5" fill={i%2?glow:accent}
              animate={{ cx: [60 + i*40, 80 + i*40] }} transition={{ duration: prefersReduced?0:1.6, repeat: prefersReduced?0:Infinity, repeatType: 'reverse' }} />
          ))}
        </motion.svg>
      )
    case 'billing':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          <motion.circle cx="150" cy="60" r="26" fill="rgba(251,191,36,0.1)" stroke={accent}
            animate={{ scale: [1, 1.06, 1] }} transition={{ duration: prefersReduced?0:1.8, repeat: prefersReduced?0:Infinity }} />
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
              animate={{ y: [40 - i*6, 36 - i*6, 40 - i*6] }} transition={{ duration: (prefersReduced?0:2) + i*0.3, repeat: prefersReduced?0:Infinity, ease: 'easeInOut' }} />
          ))}
        </motion.svg>
      )
    case 'training':
      return (
        <motion.svg {...common} viewBox="0 0 300 120" className="h-28 w-full">
          <circle cx="150" cy="60" r="30" fill="rgba(168,85,247,0.08)" stroke={glow} />
          <motion.circle cx="150" cy="60" r="30" fill="none" stroke={accent} strokeWidth="4" strokeDasharray="180 200"
            animate={{ strokeDashoffset: [180, 360] }} transition={{ duration: prefersReduced?0:3, repeat: prefersReduced?0:Infinity, ease: 'linear' }} />
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
                  animate={{ height: [8, 28 + (row*6), 12, 22] }} transition={{ duration: prefersReduced?0:1.4, delay: (row*0.1) + i*0.03, repeat: prefersReduced?0:Infinity, ease: 'easeInOut' }} />
              ))}
            </g>
          ))}
        </motion.svg>
      )
    default:
      return null
  }
}

function FeatureTile({ icon: Icon, title, desc, type, index, focused, onMountRef, align = 'left' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-35% 0px -35% 0px' })
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (onMountRef) onMountRef(index, ref)
  }, [index, onMountRef])

  const alignClass = align === 'left' ? 'mr-auto' : 'ml-auto'

  const baseClasses = 'group relative w-full max-w-3xl overflow-hidden rounded-3xl border p-6 md:p-8 backdrop-blur'
  const idleClasses = 'bg-white/5 border-white/10'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`${baseClasses} ${alignClass} ${idleClasses} min-h-[240px] md:min-h-[280px]`}
      style={{
        WebkitBackdropFilter: 'blur(14px)',
        backdropFilter: 'blur(14px)'
      }}
    >
      {/* Golden energy pulse border when focused */}
      {focused && (
        <>
          {/* Base gold glow */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              boxShadow: '0 0 0 2px rgba(251,191,36,0.85), 0 0 30px rgba(251,191,36,0.55), 0 0 80px rgba(251,191,36,0.35)'
            }}
            animate={prefersReduced ? { opacity: 1 } : { opacity: [0.95, 0.6, 0.95] }}
            transition={{ duration: 1.4, repeat: prefersReduced ? 0 : Infinity, ease: 'easeInOut' }}
          />
          {/* Pulsating ring from orb contact point using CSS vars */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-[-2px] rounded-[26px]"
            style={{
              background: 'radial-gradient(140px 140px at var(--pulse-x,50%) var(--pulse-y,50%), rgba(255,215,128,0.9), rgba(251,191,36,0.55) 22%, rgba(251,191,36,0.15) 45%, transparent 65%)',
              WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '3px'
            }}
            animate={prefersReduced ? { opacity: 0.8 } : { opacity: [1, 0.35, 1], scale: [1, 1.04, 1] }}
            transition={{ duration: 1.6, repeat: prefersReduced ? 0 : Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      <div className="flex flex-col items-start gap-6">
        <div className={`flex min-w-0 items-start gap-5 ${align==='right' ? 'flex-row-reverse text-right' : ''}`}>
          <motion.div
            animate={{ scale: focused ? 1.06 : 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-500/30 to-amber-400/30 ring-1 ring-white/10`}
          >
            <Icon className={`h-7 w-7 text-white`} />
          </motion.div>
          <div>
            <h3 className={`text-xl font-semibold leading-tight md:text-2xl text-white`}>{title}</h3>
            <p className={`mt-2 text-sm md:text-base text-white/75`}>{desc}</p>
          </div>
        </div>
        <div className="relative mt-3 w-full">
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
  const listRef = useRef(null)
  const tileRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [mascotPos, setMascotPos] = useState({ x: 0, y: 0 })
  const [launched, setLaunched] = useState(false)
  const mascotControls = useAnimation()
  const prefersReduced = useReducedMotion()
  const lastTargetRef = useRef({ x: 0, y: 0 })

  const setRefAtIndex = (index, ref) => {
    tileRefs.current[index] = ref
  }

  // Observe tiles in a linear stack; pick the most centered visible tile as active
  useEffect(() => {
    const updateActive = () => {
      const viewportCenter = window.innerHeight / 2
      let bestIdx = 0
      let bestDist = Infinity
      tileRefs.current.forEach((r, idx) => {
        const el = r?.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const fullyOut = rect.bottom < 0 || rect.top > window.innerHeight
        if (fullyOut) return
        const center = rect.top + rect.height / 2
        const dist = Math.abs(center - viewportCenter)
        if (dist < bestDist) {
          bestDist = dist
          bestIdx = idx
        }
      })
      setActiveIndex(bestIdx)
    }

    const onScroll = () => updateActive()
    const onResize = () => updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    updateActive()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Compute mascot target to hover near the active tile center
  const updateMascotTarget = () => {
    const sec = sectionRef.current
    const activeRef = tileRefs.current[activeIndex]?.current
    if (!sec || !activeRef) return

    const secRect = sec.getBoundingClientRect()
    const tileRect = activeRef.getBoundingClientRect()

    // Hover point depends on alignment: aim near the leading edge icon area
    const alignRight = activeIndex % 2 === 1
    const hoverX = (alignRight ? tileRect.left + tileRect.width * 0.18 : tileRect.left + tileRect.width * 0.82) - secRect.left
    const hoverY = tileRect.top - secRect.top + tileRect.height * 0.28

    setMascotPos({ x: hoverX, y: hoverY })
    lastTargetRef.current = { x: hoverX, y: hoverY }

    // Pulse origin follows orb
    const localX = alignRight ? tileRect.width * 0.18 : tileRect.width * 0.82
    const localY = tileRect.height * 0.28
    activeRef.style.setProperty('--pulse-x', `${localX}px`)
    activeRef.style.setProperty('--pulse-y', `${localY}px`)
  }

  useEffect(() => {
    updateMascotTarget()
    const onScroll = () => updateMascotTarget()
    const onResize = () => updateMascotTarget()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [activeIndex])

  // Launch from hero's Spline orb as soon as features enter the viewport
  useEffect(() => {
    if (launched) return
    const src = document.getElementById('mascot-source')
    const section = sectionRef.current
    if (!src || !section) return

    const srcRect = src.getBoundingClientRect()
    const secRect = section.getBoundingClientRect()
    const startX = srcRect.left - secRect.left
    const startY = srcRect.top - secRect.top

    mascotControls.set({ x: startX, y: startY, scale: 1, opacity: 1 })

    const handleLaunch = () => {
      setLaunched(true)
      updateMascotTarget()
      const pathMidX = (startX + lastTargetRef.current.x) / 2 + 80
      const pathMidY = (startY + lastTargetRef.current.y) / 2 - 160
      mascotControls.start({
        x: [startX, pathMidX, lastTargetRef.current.x],
        y: [startY, pathMidY, lastTargetRef.current.y],
        rotate: prefersReduced ? 0 : [0, 180, 360],
        transition: { duration: prefersReduced ? 0.3 : 1.6, ease: 'easeInOut' }
      })
    }

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !launched) {
          handleLaunch()
        }
      })
    }, { threshold: 0.15 })

    obs.observe(section)
    return () => {
      obs.disconnect()
    }
  }, [launched])

  // On active tile change: reform, travel, then hover (no absorption)
  useEffect(() => {
    const animateSequence = async () => {
      if (!launched) return
      if (prefersReduced) {
        mascotControls.set({ x: mascotPos.x, y: mascotPos.y, scale: 1, opacity: 1 })
        return
      }

      // Reform as a sphere and travel to hover point with a soft settle; stay visible
      await mascotControls.start({ scale: 1, opacity: 1, transition: { duration: 0.18 } })
      await mascotControls.start({ x: mascotPos.x, y: mascotPos.y - 28, transition: { type: 'spring', stiffness: 160, damping: 18 } })
      await mascotControls.start({ y: mascotPos.y, transition: { type: 'spring', stiffness: 210, damping: 16 } })
      // Remain hovering
    }
    animateSequence()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mascotPos.x, mascotPos.y])

  return (
    <section ref={sectionRef} id="features" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.08),transparent_50%)]" />

      {/* AI Mascot Sphere (reforms, travels, hovers) */}
      <motion.div
        aria-label="AI companion"
        className="pointer-events-none absolute z-30 hidden select-none md:block will-change-transform"
        animate={mascotControls}
        initial={{ x: 26, y: 0, scale: 1, opacity: 1 }}
      >
        {/* Sphere core */}
        <motion.div
          className="relative h-9 w-9 rounded-full"
          animate={prefersReduced ? {} : { rotate: [0, 360] }}
          transition={{ repeat: prefersReduced ? 0 : Infinity, duration: 6, ease: 'linear' }}
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(251,191,36,0.9), rgba(168,85,247,0.85) 40%, rgba(59,130,246,0.85) 70%)',
            boxShadow: '0 0 26px rgba(168,85,247,0.6), 0 0 60px rgba(251,191,36,0.35)'
          }}
        >
          <div className="absolute left-1 top-1 h-2 w-2 rounded-full bg-white/70 blur-[1px]" />
        </motion.div>
        {/* Energy trail */}
        {!prefersReduced && (
          <motion.div
            className="-mt-2 ml-3 h-10 w-2 origin-top rounded-full"
            animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.35, 0.12, 0.35] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            style={{ background: 'linear-gradient(to bottom, rgba(168,85,247,0.6), rgba(168,85,247,0.0))' }}
          />
        )}
      </motion.div>

      {/* Spotlight softly tracking the active tile */}
      <ActiveSpotlight tileRefs={tileRefs} activeIndex={activeIndex} />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything you need to launch a conversational AI business</h2>
          <p className="mt-3 text-white/70">From brand customization to enterprise governance—launch once and operate everywhere.</p>
        </div>

        {/* Linear, alternating tiles: left then right */}
        <div ref={listRef} className="flex flex-col gap-8">
          {items.map((item, idx) => (
            <div key={item.title} className={`w-full`}>
              <FeatureTile
                index={idx}
                align={idx % 2 === 0 ? 'left' : 'right'}
                focused={idx === activeIndex}
                onMountRef={(i, r) => setRefAtIndex(i, r)}
                {...item}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gamified click hints on CTAs when mascot is near bottom of section */}
      {!prefersReduced && <ClickHints />}
    </section>
  )
}

function ActiveSpotlight({ tileRefs, activeIndex }) {
  const [style, setStyle] = useState({ left: 0, top: 0, width: 0 })
  useEffect(() => {
    const update = () => {
      const active = tileRefs.current[activeIndex]?.current
      if (!active) return
      const rect = active.getBoundingClientRect()
      setStyle({ left: rect.left, top: rect.top - 100, width: rect.width })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [activeIndex])
  return (
    <motion.div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-0 hidden md:block">
      <motion.div
        className="mx-auto h-56 rounded-full bg-[radial-gradient(closest-side,rgba(168,85,247,0.14),transparent_70%)] blur-2xl"
        animate={{ left: style.left, top: style.top, width: style.width }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        style={{ position: 'absolute' }}
      />
    </motion.div>
  )
}

function ClickHints() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const t = setInterval(() => setShow((s) => !s), 5000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="pointer-events-none absolute bottom-8 left-0 right-0 z-20 mx-auto flex max-w-7xl justify-between px-6 md:px-10">
      <div className="relative h-6 w-6">
        {show && <span className="absolute -left-1 -top-1 block h-6 w-6 animate-ping rounded-full bg-amber-400/70" />}
      </div>
      <div className="relative h-6 w-6">
        {show && <span className="absolute -right-1 -top-1 block h-6 w-6 animate-ping rounded-full bg-purple-400/70" />}
      </div>
    </div>
  )
}
