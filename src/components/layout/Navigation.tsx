'use client'
import { useState, useEffect } from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  // Close mobile menu when clicking outside or on scroll
  useEffect(() => {
    const handleClickOutside = () => setIsMobileMenuOpen(false)
    const handleScroll = () => setIsMobileMenuOpen(false)
    
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      window.addEventListener('scroll', handleScroll)
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileMenuOpen])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent event bubbling
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navigationItems = [
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'research', label: 'Research' },
    { id: 'about', label: 'About' }
  ]

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
          {/* Logo/Brand (optional) */}
          <div className="w-12 md:w-12"></div>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile & Desktop Right Side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle - Always visible */}
            <ThemeToggle />
            
            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center"
              aria-label="Toggle mobile menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
              }`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-lg border border-gray-200 dark:border-purple-500/30">
            {navigationItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300 font-medium ${
                  isMobileMenuOpen ? 'animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  )
}