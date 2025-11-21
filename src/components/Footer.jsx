import React from 'react'

export default function Footer() {
  return (
    <footer className="relative w-full bg-slate-950 pb-14 pt-10 text-white/70">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm">© {new Date().getFullYear()} GENX‑AI • All rights reserved.</div>
          <div className="flex items-center gap-5 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
