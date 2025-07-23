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
      
      {/* Constellation Background Effect for Dark Mode */}
      <div className="dark-constellation hidden dark:block">
        <div className="constellation-dot" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
        <div className="constellation-dot" style={{top: '35%', left: '25%', animationDelay: '1s'}}></div>
        <div className="constellation-dot" style={{top: '60%', left: '10%', animationDelay: '2s'}}></div>
        <div className="constellation-dot" style={{top: '80%', left: '30%', animationDelay: '3s'}}></div>
        <div className="constellation-dot" style={{top: '25%', left: '70%', animationDelay: '1.5s'}}></div>
        <div className="constellation-dot" style={{top: '45%', left: '85%', animationDelay: '2.5s'}}></div>
        <div className="constellation-dot" style={{top: '70%', left: '75%', animationDelay: '0.5s'}}></div>
        <div className="constellation-dot" style={{top: '15%', left: '50%', animationDelay: '3.5s'}}></div>
        
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
      </div>
      
      {/* Light mode subtle dots */}
      <div className="subtle-dots dark:hidden"></div>
      
      <Navigation />
      
      <main>
        {/* Hero Section - Clean */}
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-transparent dark:to-transparent transition-colors duration-500"></div>
          
          {/* Keep only the hero floating shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                <span className="wave">👋</span> Welcome to my portfolio
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
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                <span className="flex items-center gap-2">
                  Show my work 
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