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
      <div className="relative min-h-screen flex flex-col overflow-x-hidden pearlescent-bg">
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
