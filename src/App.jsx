import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <Integrations />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
