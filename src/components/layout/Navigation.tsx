'use client'
import { useState, useEffect } from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsVisible(false)
      } else {
        // Scrolling up or at top
        setIsVisible(true)
      }
      
      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-purple-500/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Empty space for balance */}
          <div className="w-12"></div>

          {/* Center Navigation Links */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Projects
            </button>
            
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Experience
            </button>

            <button 
              onClick={() => scrollToSection('education')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Education
            </button>
            
            <button 
              onClick={() => scrollToSection('research')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Research
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              About
            </button>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}