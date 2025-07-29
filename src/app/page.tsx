'use client'
import { Navigation } from '@/components/layout/Navigation'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Education } from '@/components/sections/Education'
import { Experience } from '@/components/sections/Experience'
import { About } from '@/components/sections/About'
import { Footer } from '@/components/layout/Footer'
import { Research } from '@/components/sections/Research'
import { useEffect } from 'react'

export default function Home() {
  // Keep the scroll progress bar
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector('.scroll-progress') as HTMLElement
      if (scrollProgress) {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = scrollTop / docHeight
        scrollProgress.style.transform = `scaleX(${scrollPercent})`
      }
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <>
      {/* Keep scroll progress bar */}
      <div className="scroll-progress"></div>
      
      {/* LIGHT MODE - Purple Constellation (12 dots total) */}
      <div className="light-constellation block dark:hidden">
        <div className="light-constellation-dot" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
        <div className="light-constellation-dot" style={{top: '35%', left: '25%', animationDelay: '1s'}}></div>
        <div className="light-constellation-dot" style={{top: '60%', left: '10%', animationDelay: '2s'}}></div>
        <div className="light-constellation-dot" style={{top: '80%', left: '30%', animationDelay: '3s'}}></div>
        <div className="light-constellation-dot" style={{top: '25%', left: '70%', animationDelay: '1.5s'}}></div>
        <div className="light-constellation-dot" style={{top: '45%', left: '85%', animationDelay: '2.5s'}}></div>
        <div className="light-constellation-dot" style={{top: '70%', left: '75%', animationDelay: '0.5s'}}></div>
        <div className="light-constellation-dot" style={{top: '15%', left: '50%', animationDelay: '3.5s'}}></div>
        
        {/* Just 4 additional dots for perfect balance */}
        <div className="light-constellation-dot" style={{top: '10%', left: '85%', animationDelay: '4s'}}></div>
        <div className="light-constellation-dot" style={{top: '55%', left: '40%', animationDelay: '5s'}}></div>
        <div className="light-constellation-dot" style={{top: '75%', left: '50%', animationDelay: '2.2s'}}></div>
        <div className="light-constellation-dot" style={{top: '5%', left: '25%', animationDelay: '4.5s'}}></div>
        
        {/* Light mode constellation connecting lines */}
        <div className="light-constellation-line" style={{
          top: '20%', 
          left: '15%', 
          width: '120px', 
          transform: 'rotate(35deg)',
          animationDelay: '4s'
        }}></div>
        <div className="light-constellation-line" style={{
          top: '35%', 
          left: '25%', 
          width: '90px', 
          transform: 'rotate(-20deg)',
          animationDelay: '5s'
        }}></div>
        <div className="light-constellation-line" style={{
          top: '25%', 
          left: '50%', 
          width: '180px', 
          transform: 'rotate(15deg)',
          animationDelay: '6s'
        }}></div>
        <div className="light-constellation-line" style={{
          top: '55%', 
          left: '40%', 
          width: '100px', 
          transform: 'rotate(-10deg)',
          animationDelay: '7s'
        }}></div>
      </div>
      
      {/* LIGHT MODE - Elegant Particles (replace ugly bubbles) */}
      <div className="light-particles block dark:hidden">
        <div className="particle" style={{top: '10%', left: '15%', animationDelay: '0s'}}></div>
        <div className="particle" style={{top: '25%', left: '75%', animationDelay: '2s'}}></div>
        <div className="particle" style={{top: '45%', left: '85%', animationDelay: '4s'}}></div>
        <div className="particle" style={{top: '35%', left: '25%', animationDelay: '1s'}}></div>
        <div className="particle" style={{top: '60%', left: '10%', animationDelay: '3s'}}></div>
        <div className="particle" style={{top: '70%', left: '65%', animationDelay: '5s'}}></div>
        <div className="particle" style={{top: '80%', left: '30%', animationDelay: '6s'}}></div>
        <div className="particle" style={{top: '15%', left: '50%', animationDelay: '7s'}}></div>
        <div className="particle" style={{top: '55%', left: '45%', animationDelay: '8s'}}></div>
        <div className="particle" style={{top: '85%', left: '80%', animationDelay: '9s'}}></div>
      </div>
      
      {/* Light Mode - Subtle accent lines */}
      <div className="light-accent-lines block dark:hidden">
        <div className="accent-line" style={{top: '20%', left: '0%', width: '200px', animationDelay: '0s'}}></div>
        <div className="accent-line" style={{top: '50%', right: '0%', width: '180px', animationDelay: '3s'}}></div>
        <div className="accent-line" style={{top: '75%', left: '20%', width: '150px', animationDelay: '6s'}}></div>
      </div>
      
      {/* Constellation Background Effect for Dark Mode (12 dots total) */}
      <div className="dark-constellation hidden dark:block">
        <div className="constellation-dot" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
        <div className="constellation-dot" style={{top: '35%', left: '25%', animationDelay: '1s'}}></div>
        <div className="constellation-dot" style={{top: '60%', left: '10%', animationDelay: '2s'}}></div>
        <div className="constellation-dot" style={{top: '80%', left: '30%', animationDelay: '3s'}}></div>
        <div className="constellation-dot" style={{top: '25%', left: '70%', animationDelay: '1.5s'}}></div>
        <div className="constellation-dot" style={{top: '45%', left: '85%', animationDelay: '2.5s'}}></div>
        <div className="constellation-dot" style={{top: '70%', left: '75%', animationDelay: '0.5s'}}></div>
        <div className="constellation-dot" style={{top: '15%', left: '50%', animationDelay: '3.5s'}}></div>
        
        {/* Just 4 additional dots for perfect balance */}
        <div className="constellation-dot" style={{top: '10%', left: '85%', animationDelay: '4s'}}></div>
        <div className="constellation-dot" style={{top: '55%', left: '40%', animationDelay: '5s'}}></div>
        <div className="constellation-dot" style={{top: '75%', left: '50%', animationDelay: '2.2s'}}></div>
        <div className="constellation-dot" style={{top: '5%', left: '25%', animationDelay: '4.5s'}}></div>
        
        {/* Connecting lines between some dots */}
        <div className="constellation-line" style={{
          top: '20%', 
          left: '15%', 
          width: '120px', 
          transform: 'rotate(35deg)',
          animationDelay: '4s'
        }}></div>
        <div className="constellation-line" style={{
          top: '35%', 
          left: '25%', 
          width: '90px', 
          transform: 'rotate(-20deg)',
          animationDelay: '5s'
        }}></div>
        <div className="constellation-line" style={{
          top: '25%', 
          left: '50%', 
          width: '180px', 
          transform: 'rotate(15deg)',
          animationDelay: '6s'
        }}></div>
        <div className="constellation-line" style={{
          top: '55%', 
          left: '40%', 
          width: '100px', 
          transform: 'rotate(-10deg)',
          animationDelay: '7s'
        }}></div>
      </div>
      
      {/* Enhanced subtle dots for light mode */}
      <div className="subtle-dots dark:hidden"></div>
      
      <Navigation />
      
      <main>
        {/* Hero Section - No separate background to avoid jarring shift */}
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          {/* Remove the separate hero background that causes the jarring shift */}
          
          {/* Hero floating shapes - More subtle */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/8 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/8 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* More subtle additional shapes for light mode */}
            <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-emerald-400/6 dark:bg-emerald-400/15 rounded-full blur-2xl animate-pulse delay-500 dark:hidden"></div>
            <div className="absolute bottom-1/3 left-1/2 w-48 h-48 bg-rose-400/5 dark:bg-rose-400/12 rounded-full blur-2xl animate-pulse delay-1500 dark:hidden"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-200 dark:border-purple-800 backdrop-blur-sm">
                <span className="wave">👋</span>
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Powering Real Impact with{' '}
              <span className="text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text animate-gradient">
                Reliable Code
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Hi! I'm <strong className="text-purple-600 dark:text-purple-400">Nirvisha</strong>, a Computer Science student and developer specializing in 
              <span className="text-blue-600 dark:text-blue-400"> backend systems</span> and 
              <span className="text-cyan-600 dark:text-cyan-400"> AI solutions</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                <span className="flex items-center gap-2">
                  See what I've built
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>
              
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                Download Resume
              </button>
            </div>
            
          </div>
        </section>
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Research /> 
        <About />
      </main>

      {/* Footer with flowing gradient that matches the website */}
      <div className="flowing-footer">
        <Footer />
      </div>
    </>
  )
}