import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-heading dark:text-white transition-colors duration-300 selection:bg-primary/30">
      <div className="noise-overlay"></div>

      {/* GLOBAL FIXED BACKGROUND LAYER */}
      <div className="fixed inset-0 pearlescent-bg z-0 flex items-center justify-center overflow-hidden select-none pointer-events-none">
        <h2 className="watermark-text text-[20vw] font-black text-gray-300 dark:text-gray-300 whitespace-nowrap transform scale-125">
          OFZEN
        </h2>
      </div>

      {/* SCROLLABLE CONTENT LAYER */}
      <div className="relative min-h-screen flex flex-col overflow-x-hidden z-10">
        <Navbar />
        <Home />
        <Services />
        <TechStack />
        <Work />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
