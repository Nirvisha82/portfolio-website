This file is a merged representation of the entire codebase, combined into a single document.
The content has been processed for AI analysis and code review purposes.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and default ignore patterns
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Repository Information
- **Repository URL:** https://github.com/Nirvisha82/portfolio-website.git
- **Repository Name:** portfolio-website
- **Total Files Analyzed:** 28
- **Generated:** 2025-11-12 17:54:50

# Directory Structure
```
.devflow/
  repo-structure.md
.gitignore
README.md
eslint.config.mjs
next.config.ts
package-lock.json
package.json
postcss.config.js
postcss.config.mjs
public/
  Nirvisha_Soni.pdf
  apple-icon.png
  favicon.ico
  file.svg
  globe.svg
  google59538ecd12158324.html
  icon-192.png
  icon-512.png
  images/
    algoanalytics-logo.png
    amex-logo.png
    barclays-logo.png
    ic3-logo.png
    nirvisha.png
    sppu-logo.png
    sppu.png
    uf-logo-2.png
    uf-logo.png
    vit-logo.png
  robots.txt
  site.webmanifest
src/
  app/
    globals.css
    layout.tsx
    page.tsx
    sitemap.ts
  components/
    layout/
      Footer.tsx
      Navigation.tsx
    sections/
      About.tsx
      Education.tsx
      Experience.tsx
      Projects.tsx
      Research.tsx
      Skills.tsx
    ui/
      ThemeToggle.tsx
  contexts/
    ThemeContext.tsx
  hooks/
    userScrollAnimation.ts
  providers.tsx
tailwind.config.js
tsconfig.json
```

# Files

## File: src/components/layout/Footer.tsx
````tsx
'use client'
import { useState, useEffect } from 'react'

export function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // Fix hydration by only showing particles after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Fixed particle positions to avoid hydration issues
  const particles = [
    { left: 15, top: 25, delay: 0, duration: 4 },
    { left: 35, top: 15, delay: 1.2, duration: 5 },
    { left: 65, top: 35, delay: 2.4, duration: 6 },
    { left: 85, top: 20, delay: 3.6, duration: 4.5 },
    { left: 25, top: 65, delay: 4.8, duration: 5.5 },
    { left: 75, top: 75, delay: 0.6, duration: 4.8 },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/nirvishasoni',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Nirvisha82',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=levmF9MAAAAJ&hl=en',
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor">
          <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.847 14.582 15.085 15 12 15s-5.847-.418-6.758-1.231z"/>
          <path d="M6.5 15.5v3c0 2.485 2.239 4.5 5 4.5h1c2.761 0 5-2.015 5-4.5v-3l-5.5 2.5-5.5-2.5z"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-700'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Enhanced background pattern - responsive sizes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-purple-400/10 rounded-full blur-xl sm:blur-2xl animate-pulse"></div>
        <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-20 h-20 sm:w-40 sm:h-40 bg-blue-400/10 rounded-full blur-xl sm:blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-purple-400/5 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Fixed Floating particles - only render after mount */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400 opacity-20 dark:opacity-40 rounded-full animate-float"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Main content grid - responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section - spans full width on mobile, 2 cols on md, 1 col on lg */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-2 sm:mb-3 animate-gradient">
                Nirvisha Soni
              </h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
                Software Developer
              </p>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                Passionate about creating scalable backend systems and AI-powered solutions.
              </p>
            </div>

            {/* Location with enhanced animation */}
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm">Gainesville, Florida, USA</span>
            </div>
          </div>

          {/* Empty middle column for spacing on larger screens */}
          <div className="hidden lg:block">
          </div>

          {/* Contact Section - responsive layout */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 relative">
              Get In Touch
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" style={{animationDelay: '0.5s'}}></span>
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {/* Email contact */}
              <a 
                href="mailto:nsoni@ufl.edu" 
                className="group flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-md hover:scale-105"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xs sm:text-sm group-hover:rotate-12 transition-transform duration-300">
                  ✉️
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 truncate">
                    nsoni@ufl.edu
                  </p>
                </div>
              </a>
              
              {/* Social Icons - responsive sizing and spacing */}
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.name !== 'Gmail' ? "_blank" : undefined}
                    rel={social.name !== 'Gmail' ? "noopener noreferrer" : undefined}
                    className={`group relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r ${social.color} text-white flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl`}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    style={{
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {/* Icon */}
                    <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                      {social.icon}
                    </div>
                    
                    {/* Hover effect */}
                    <div className={`absolute inset-0 rounded-lg sm:rounded-xl bg-white/20 transition-opacity duration-300 ${
                      hoveredSocial === social.name ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    
                    {/* Floating tooltip - hidden on mobile for touch devices */}
                    <div className={`hidden sm:block absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded transition-all duration-300 whitespace-nowrap ${
                      hoveredSocial === social.name 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}>
                      {social.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-white"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - responsive layout and typography */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 relative">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-1 sm:gap-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              <span>© 2025 Nirvisha Soni. Made with</span>
              <span className="text-red-500 animate-pulse">♥</span>
              <span>and lots of coffee.</span>
            </div>

            {/* Tech stack badges - responsive sizing and wrapping */}
            <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-400 dark:text-gray-500 flex-wrap justify-center sm:justify-end">
              <span className="hidden sm:inline">Built with</span>
              <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 hover:scale-105 transition-transform duration-300 text-xs">
                Next.js
              </span>
              <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 hover:scale-105 transition-transform duration-300 text-xs">
                TypeScript
              </span>
              <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 hover:scale-105 transition-transform duration-300 text-xs">
                Tailwind
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}
````

## File: src/contexts/ThemeContext.tsx
````tsx
'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark') // Default to dark
  const [mounted, setMounted] = useState(false)

  // Set mounted to true after component mounts
  useEffect(() => {
    setMounted(true)
    
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') as Theme
    
    if (savedTheme === 'light' || savedTheme === 'dark') {
      // Returning user - use their saved preference
      setTheme(savedTheme)
      applyTheme(savedTheme)
    } else {
      // First-time visitor - show dark mode
      setTheme('dark')
      applyTheme('dark')
      // Don't save to localStorage yet - let them choose first
    }
  }, [])

  // Apply theme to document with Safari mobile fixes
  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement
    const body = document.body
    
    if (newTheme === 'dark') {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
      
      // Safari mobile specific fix
      const isSafariMobile = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && /iPhone|iPad|iPod/i.test(navigator.userAgent)
      if (isSafariMobile) {
        body.style.background = 'linear-gradient(135deg, #0f0b27 0%, #1a1332 25%, #231944 50%, #1a1332 75%, #0f0b27 100%)'
        // Force a reflow
        void body.offsetHeight
      }
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
      
      // Safari mobile specific fix
      const isSafariMobile = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && /iPhone|iPad|iPod/i.test(navigator.userAgent)
      if (isSafariMobile) {
        body.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #f1f5f9 50%, #f8fafc 75%, #ffffff 100%)'
        // Force a reflow
        void body.offsetHeight
      }
    }
  }

  // Toggle theme function
  const toggleTheme = () => {
    if (!mounted) return
    
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    applyTheme(newTheme)
    
    // Save preference to localStorage (this marks them as a returning user)
    localStorage.setItem('theme', newTheme)
  }

  // Update document when theme changes
  useEffect(() => {
    if (mounted) {
      applyTheme(theme)
    }
  }, [theme, mounted])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
````

## File: src/providers.tsx
````tsx
'use client'
import { ThemeProvider } from '@/contexts/ThemeContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
````

## File: src/hooks/userScrollAnimation.ts
````typescript
// hooks/useScrollAnimation.ts
import { useEffect, useState, useRef } from 'react'

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  staggerDelay?: number
}

export function useScrollAnimation(
  options: ScrollAnimationOptions = {}
) {
  const {
    threshold = 0.15, // Consistent threshold across all components
    rootMargin = '0px 0px -50px 0px', // Trigger slightly before element is fully visible
    triggerOnce = true, // Prevent disappearing on scroll up
    staggerDelay = 100
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const elementRef = useRef<HTMLElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Don't disconnect if triggerOnce is false
          if (triggerOnce && observerRef.current) {
            observerRef.current.disconnect()
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
          setVisibleItems([]) // Reset staggered items when not visible
        }
      },
      { 
        threshold, 
        rootMargin 
      }
    )

    observerRef.current = observer
    
    // Auto-detect element if no ref provided
    const element = elementRef.current || document.querySelector(`[data-scroll-section]`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  // Staggered animation for multiple items
  const triggerStaggeredAnimation = (itemCount: number, customDelay?: number) => {
    if (!isVisible) return

    const delay = customDelay || staggerDelay
    
    // Clear existing items
    setVisibleItems([])
    
    // Add items one by one with stagger
    for (let i = 0; i < itemCount; i++) {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, i])
      }, i * delay)
    }
  }

  return {
    isVisible,
    visibleItems,
    elementRef,
    triggerStaggeredAnimation,
    // Helper function to get consistent animation classes
    getAnimationClasses: (index?: number, customDelay?: number) => {
      const baseDelay = customDelay || (index !== undefined ? index * staggerDelay : 0)
      return {
        base: `transition-all duration-700 ease-out`,
        visible: 'opacity-100 translate-y-0 translate-x-0',
        hidden: 'opacity-0 translate-y-8',
        style: {
          transitionDelay: `${baseDelay}ms`
        }
      }
    }
  }
}

// Specialized hook for staggered list animations
export function useStaggeredAnimation(
  itemCount: number,
  options: ScrollAnimationOptions = {}
) {
  const animation = useScrollAnimation(options)

  useEffect(() => {
    if (animation.isVisible && itemCount > 0) {
      animation.triggerStaggeredAnimation(itemCount)
    }
  }, [animation.isVisible, itemCount])

  return animation
}
````

## File: src/app/sitemap.ts
````typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://nirvishasoni.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ]
}
````

## File: src/components/ui/ThemeToggle.tsx
````tsx

'use client'
import { useTheme } from '@/contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
        theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
      }`}>
        {theme === 'dark' ? (
          <Moon size={10} className="text-purple-600" />
        ) : (
          <Sun size={10} className="text-yellow-500" />
        )}
      </div>
    </button>
  )
}
````

## File: src/components/sections/Skills.tsx
````tsx
'use client'
import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'

// Unified scroll animation hook
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCategories, setVisibleCategories] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger category animations
          setTimeout(() => setVisibleCategories([0]), 200)
          setTimeout(() => setVisibleCategories([0, 1]), 350)
          setTimeout(() => setVisibleCategories([0, 1, 2]), 500)
          setTimeout(() => setVisibleCategories([0, 1, 2, 3]), 650)
        }
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const section = document.getElementById('skills')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return { isVisible, visibleCategories }
}

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const { isVisible, visibleCategories } = useScrollAnimation()

  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      borderColor: "from-blue-500 via-purple-500 to-blue-500",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", delay: 0 },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", delay: 50 },
        { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", delay: 100 },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", delay: 150 },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", delay: 200 },
        { name: "C", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png", delay: 250 }
      ]
    },
    {
      title: "Frameworks",
      icon: "⚛️",
      borderColor: "from-cyan-500 via-blue-500 to-cyan-500",
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", delay: 300 },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", delay: 350 },
        { name: "LlamaIndex", logo: "https://avatars.githubusercontent.com/u/130722866?s=200&v=4", delay: 400 },
        { name: "Langchain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4", delay: 450 },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", delay: 500 },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", delay: 550 }
      ]
    },
    {
      title: "AI/ML",
      icon: "🤖",
      borderColor: "from-purple-500 via-pink-500 to-purple-500",
      skills: [
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", delay: 600 },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", delay: 650 },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", delay: 700 },
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", delay: 750 },
        { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", delay: 800 },
        { name: "W&B", logo: "https://logo.clearbit.com/wandb.ai", delay: 850 }
      ]
    },
    {
      title: "Cloud & Databases",
      icon: "☁️",
      borderColor: "from-green-500 via-emerald-500 to-green-500",
      skills: [
        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", delay: 900 },
        { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", delay: 950 },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", delay: 1000 },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", delay: 1050 },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", delay: 1100 },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", delay: 1150 }
      ]
    }
  ]

  return (
    <section id="skills" data-scroll-section className="py-12 sm:py-16 lg:py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-200 dark:border-purple-800">
            <span className="animate-bounce">💻</span>
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The tools that power my projects and solutions
          </p>
        </div>

        {/* 4 Skills Categories with Animated Borders */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const isCategoryVisible = visibleCategories.includes(categoryIndex)
            
            return (
              <div
                key={category.title}
                className={`relative group bg-white dark:bg-gray-900/50 rounded-2xl p-4 backdrop-blur-sm transition-all duration-700 ease-out overflow-hidden ${
                  isCategoryVisible
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${categoryIndex * 150}ms`
                }}
              >
                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.borderColor} p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r ${category.borderColor} opacity-30 animate-pulse"></div>
                  <div className="w-full h-full bg-white dark:bg-gray-900/90 rounded-2xl"></div>
                </div>

                {/* Tracing Light Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.borderColor} animate-spin-slow opacity-20`}
                       style={{
                         background: `conic-gradient(from 0deg, transparent, transparent, rgba(139, 92, 246, 0.8), transparent, transparent)`,
                         animation: 'rotate 3s linear infinite'
                       }}>
                  </div>
                </div>

                {/* Static Border */}
                <div className="absolute inset-0 rounded-2xl border border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-colors duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className={`text-center mb-4 transition-all duration-500 ${
                    isCategoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ 
                    transitionDelay: `${categoryIndex * 150 + 200}ms`
                  }}>
                    <div className="text-2xl mb-2 group-hover:animate-bounce transition-all duration-300">{category.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills in Category */}
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`group/skill relative bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3 border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 cursor-pointer ${
                          hoveredSkill === skill.name ? 'scale-110 shadow-lg' : 'hover:scale-105'
                        } ${
                          isCategoryVisible
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{ 
                          transitionDelay: `${categoryIndex * 150 + 300 + (skillIndex * 50)}ms`
                        }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Skill Logo */}
                        <div className={`w-8 h-8 mb-2 mx-auto transition-all duration-300 ${
                          hoveredSkill === skill.name ? 'rotate-12 scale-110' : 'group-hover/skill:rotate-6'
                        }`}>
                          <img 
                            src={skill.logo} 
                            alt={skill.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                              e.currentTarget.parentElement!.innerHTML = `<div class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold text-xs">${skill.name.slice(0,2)}</div>`
                            }}
                          />
                        </div>

                        {/* Skill Name */}
                        <div className="text-center">
                          <h4 className="font-medium text-gray-900 dark:text-white text-xs leading-tight">
                            {skill.name}
                          </h4>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.borderColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}></div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: rotate 3s linear infinite;
        }
      `}</style>
    </section>
  )
}
````

## File: public/google59538ecd12158324.html
````html
google-site-verification: google59538ecd12158324.html
````

## File: public/robots.txt
````
User-agent: *
Allow: /

Sitemap: https://nirvishasoni.dev/sitemap.xml
````

## File: public/site.webmanifest
````
{
  "name": "Nirvisha Soni - Portfolio",
  "short_name": "Nirvisha Soni",
  "description": "Backend Developer & AI Engineer",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#6d28d9",
  "background_color": "#ffffff",
  "display": "standalone",
  "start_url": "/",
  "scope": "/"
}
````

## File: src/app/globals.css
````css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

:root {
  --background-light: #fafafa;
  --background-dark: #0f0f23;
  --foreground-light: #1f2937;
  --foreground-dark: #f8fafc;
}

/* HORIZONTAL SCROLL FIX */
html, body {
  overflow-x: hidden !important;
  width: 100% !important;
  max-width: 100vw !important;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: border-box;
}

/* Enhanced Light Mode Body - Smooth flowing gradient */
body {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #f1f5f9 50%, #f8fafc 75%, #ffffff 100%);
  color: var(--foreground-light);
  transition: background-color 0.3s ease, color 0.3s ease;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* Light Mode - MORE VISIBLE flowing pattern */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  pointer-events: none;
  z-index: -2;
  background: 
    radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
    linear-gradient(45deg, transparent 0%, rgba(139, 92, 246, 0.06) 50%, transparent 100%);
  animation: lightFlow 20s ease-in-out infinite;
  opacity: 1;
  overflow: hidden;
}

/* Light Mode - NO GRID, just flowing gradients like dark mode */
body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  background: 
    radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.02) 0%, transparent 30%),
    radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.015) 0%, transparent 30%),
    radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.01) 0%, transparent 25%);
  animation: lightBreathe 8s ease-in-out infinite;
  overflow: hidden;
}

/* CORRECTED Dark Mode Body - Keep your original beautiful design */
.dark body,
html.dark body {
  background: linear-gradient(135deg, #0f0b27 0%, #1a1332 25%, #231944 50%, #1a1332 75%, #0f0b27 100%) !important;
  color: var(--foreground-dark);
  position: relative;
  overflow-x: hidden;
}

/* Safari-specific dark mode fixes - only for navigation elements */
@supports (-webkit-backdrop-filter: blur(10px)) {
  .dark nav[class*="backdrop-blur"] {
    background-color: rgba(26, 19, 50, 0.85) !important;
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
  }
  
  .dark .backdrop-blur-md,
  .dark .backdrop-blur-sm {
    background-color: rgba(26, 19, 50, 0.8) !important;
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
  }
}

/* Dark Mode Grid Pattern Background Animation */
.dark body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  pointer-events: none;
  z-index: -2;
  background-image: 
    linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridMove 30s linear infinite;
  opacity: 0.4;
  overflow: hidden;
}

.dark body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  background: 
    radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.02) 0%, transparent 30%),
    radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.015) 0%, transparent 30%),
    radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.01) 0%, transparent 25%);
  animation: breathe 8s ease-in-out infinite;
  overflow: hidden;
}

/* LIGHT MODE - Elegant floating particles */
.light-particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  opacity: 0.6;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: linear-gradient(45deg, rgba(139, 92, 246, 0.4), rgba(59, 130, 246, 0.3));
  border-radius: 50%;
  animation: particleFloat 12s ease-in-out infinite;
}

.particle::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  animation: particleGlow 8s ease-in-out infinite;
}

/* Light Mode - Subtle accent lines */
.light-accent-lines {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  opacity: 0.15;
  overflow: hidden;
}

.accent-line {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent);
  animation: lineFlow 15s ease-in-out infinite;
  max-width: calc(100vw - 50px);
}

/* Light Mode Constellation Effect - MATCH dark mode visibility */
.light-constellation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  opacity: 0.6;
  overflow: hidden;
}

.light-constellation-dot {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(139, 92, 246, 0.6);
  border-radius: 50%;
  animation: lightTwinkle 4s ease-in-out infinite;
}

.light-constellation-dot::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: 7px;
  height: 7px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: lightGlow 6s ease-in-out infinite;
}

/* Light mode constellation connecting lines - MATCH dark mode */
.light-constellation-line {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent);
  animation: lightFadeInOut 8s ease-in-out infinite;
  transform-origin: left;
  max-width: calc(100vw - 100px);
}

/* Constellation Effect for Dark Mode */
.dark-constellation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  opacity: 0.6;
  overflow: hidden;
}

.constellation-dot {
  position: absolute;
  width: 3px;
  height: 3px;
  background: rgba(139, 92, 246, 0.6);
  border-radius: 50%;
  animation: twinkle 4s ease-in-out infinite;
}

.constellation-dot::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: 7px;
  height: 7px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: glow 6s ease-in-out infinite;
}

/* Line connections between dots */
.constellation-line {
  position: absolute;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.1), transparent);
  animation: fadeInOut 8s ease-in-out infinite;
  transform-origin: left;
  max-width: calc(100vw - 100px);
}

/* Optional: Very subtle floating dots (barely visible) */
.subtle-dots {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  opacity: 0.3;
  background-image: 
    radial-gradient(1px 1px at 100px 200px, rgba(139, 92, 246, 0.15), transparent),
    radial-gradient(1px 1px at 300px 400px, rgba(59, 130, 246, 0.15), transparent),
    radial-gradient(1px 1px at 600px 100px, rgba(16, 185, 129, 0.1), transparent),
    radial-gradient(1px 1px at 450px 350px, rgba(139, 92, 246, 0.1), transparent);
  background-size: 800px 600px;
  animation: dotsFloat 30s linear infinite;
  overflow: hidden;
}

.dark .subtle-dots {
  opacity: 0.15;
}

/* Ensure all sections stay within viewport */
section {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

main {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}

/* Fix for mobile devices specifically */
@media (max-width: 768px) {
  /* Ensure constellation elements don't cause horizontal scroll */
  .light-constellation-dot[style*="left: 85%"],
  .constellation-dot[style*="left: 85%"] {
    left: 75% !important;
  }
  
  .light-constellation-line,
  .constellation-line {
    max-width: calc(100vw - 150px) !important;
  }
  
  .accent-line {
    max-width: calc(100vw - 30px) !important;
  }
  
  /* Ensure hero content container doesn't overflow */
  .hero-content {
    width: 100%;
    max-width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* FIXED: Education and Experience sections - ensure consistent dark background */
/* Override any bright purple backgrounds in these sections */
.dark [data-section="education"],
.dark [data-section="experience"] {
  background: transparent !important;
}

/* Ensure no section-specific backgrounds override the main dark gradient */
.dark section {
  background: transparent;
}

/* If there are any card/container backgrounds in education/experience, make them subtle */
.dark [data-section="education"] .bg-purple-100,
.dark [data-section="education"] .bg-purple-200,
.dark [data-section="education"] .bg-purple-300,
.dark [data-section="experience"] .bg-purple-100,
.dark [data-section="experience"] .bg-purple-200,
.dark [data-section="experience"] .bg-purple-300 {
  background: rgba(139, 92, 246, 0.05) !important;
}

/* Ensure card backgrounds in education/experience remain subtle */
.dark [data-section="education"] .bg-white,
.dark [data-section="experience"] .bg-white {
  background: rgba(15, 11, 39, 0.3) !important;
  border: 1px solid rgba(139, 92, 246, 0.1);
}

/* Fix any gradient backgrounds that might be too bright */
.dark [data-section="education"] .bg-gradient-to-br,
.dark [data-section="education"] .bg-gradient-to-r,
.dark [data-section="experience"] .bg-gradient-to-br,
.dark [data-section="experience"] .bg-gradient-to-r {
  background: rgba(15, 11, 39, 0.2) !important;
}

/* Creative Footer Gradient */
.footer-gradient {
  background: linear-gradient(180deg, 
    transparent 0%, 
    rgba(139, 92, 246, 0.03) 20%,
    rgba(99, 102, 241, 0.05) 40%,
    rgba(79, 70, 229, 0.07) 60%,
    rgba(67, 56, 202, 0.09) 80%,
    rgba(55, 48, 163, 0.11) 100%
  );
}

.dark .footer-gradient {
  background: linear-gradient(180deg, 
    transparent 0%, 
    rgba(15, 11, 39, 0.3) 20%,
    rgba(26, 19, 50, 0.4) 40%,
    rgba(45, 27, 105, 0.3) 60%,
    rgba(26, 19, 50, 0.4) 80%,
    rgba(15, 11, 39, 0.5) 100%
  );
}

/* LIGHT MODE FLOWING FOOTER */
.flowing-footer {
  background: linear-gradient(180deg, 
    transparent 0%, 
    rgba(248, 250, 252, 0.8) 20%,
    rgba(241, 245, 249, 0.9) 40%,
    rgba(226, 232, 240, 0.95) 60%,
    rgba(203, 213, 225, 0.98) 80%,
    rgba(148, 163, 184, 1) 100%
  );
}

/* Fix the flowing footer to maintain dark theme */
.dark .flowing-footer {
  background: linear-gradient(180deg, 
    transparent 0%, 
    rgba(15, 11, 39, 0.2) 30%,
    rgba(26, 19, 50, 0.3) 50%,
    rgba(45, 27, 105, 0.2) 70%,
    rgba(15, 11, 39, 0.4) 100%
  );
}

/* Custom gradient text utility */
.gradient-text {
  background: linear-gradient(45deg, #8b5cf6, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Animations */
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* LIGHT MODE CONSTELLATION ANIMATIONS - MATCH dark mode */
@keyframes lightTwinkle {
  0%, 100% { 
    opacity: 0.3;
    transform: scale(1);
  }
  50% { 
    opacity: 1;
    transform: scale(1.5);
  }
}

@keyframes lightGlow {
  0%, 100% { 
    opacity: 0.1;
    transform: scale(1);
  }
  50% { 
    opacity: 0.4;
    transform: scale(2);
  }
}

@keyframes lightFadeInOut {
  0%, 100% { 
    opacity: 0;
    transform: scaleX(0);
  }
  50% { 
    opacity: 0.3;
    transform: scaleX(1);
  }
}

/* LIGHT MODE SPECIFIC ANIMATIONS */
@keyframes lightFlow {
  0%, 100% { 
    transform: rotate(0deg) scale(1);
    opacity: 0.8;
  }
  50% { 
    transform: rotate(0.5deg) scale(1.01);
    opacity: 1;
  }
}

@keyframes lightBreathe {
  0%, 100% { 
    opacity: 0.8;
    transform: scale(1);
  }
  50% { 
    opacity: 1;
    transform: scale(1.05);
  }
}

@keyframes particleFloat {
  0%, 100% { 
    transform: translateY(0px) translateX(0px) scale(1);
    opacity: 0.3;
  }
  25% { 
    transform: translateY(-15px) translateX(5px) scale(1.2);
    opacity: 0.6;
  }
  50% { 
    transform: translateY(-8px) translateX(-3px) scale(0.8);
    opacity: 1;
  }
  75% { 
    transform: translateY(-20px) translateX(8px) scale(1.1);
    opacity: 0.4;
  }
}

@keyframes particleGlow {
  0%, 100% { 
    opacity: 0.05;
    transform: scale(1);
  }
  50% { 
    opacity: 0.2;
    transform: scale(2);
  }
}

@keyframes lineFlow {
  0%, 100% { 
    opacity: 0;
    transform: translateX(-100px) scaleX(0);
  }
  50% { 
    opacity: 0.3;
    transform: translateX(0px) scaleX(1);
  }
}

/* DARK MODE ANIMATIONS */
@keyframes gridMove {
  0% { 
    transform: translateX(0px) translateY(0px);
  }
  100% { 
    transform: translateX(60px) translateY(60px);
  }
}

@keyframes breathe {
  0%, 100% { 
    opacity: 0.3;
    transform: scale(1);
  }
  50% { 
    opacity: 0.5;
    transform: scale(1.05);
  }
}

@keyframes twinkle {
  0%, 100% { 
    opacity: 0.3;
    transform: scale(1);
  }
  50% { 
    opacity: 1;
    transform: scale(1.5);
  }
}

@keyframes glow {
  0%, 100% { 
    opacity: 0.1;
    transform: scale(1);
  }
  50% { 
    opacity: 0.4;
    transform: scale(2);
  }
}

@keyframes fadeInOut {
  0%, 100% { 
    opacity: 0;
    transform: scaleX(0);
  }
  50% { 
    opacity: 0.3;
    transform: scaleX(1);
  }
}

/* Subtle Background Animations */
@keyframes subtleMove {
  0%, 100% { 
    background-position: 30% 20%;
    transform: scale(1);
  }
  50% { 
    background-position: 70% 80%;
    transform: scale(1.1);
  }
}

@keyframes dotsFloat {
  0% { 
    transform: translateY(0px) translateX(0px); 
  }
  100% { 
    transform: translateY(-50px) translateX(30px); 
  }
}

/* Keep the scroll progress bar */
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    rgba(139, 92, 246, 0.8), 
    rgba(59, 130, 246, 0.8), 
    rgba(16, 185, 129, 0.8)
  );
  transform-origin: left;
  transform: scaleX(0);
  z-index: 1000;
  transition: transform 0.3s ease;
}

/* Waving Hand Animation */
.wave {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.animate-breathe {
  animation: breathe 6s ease-in-out infinite;
}

:root {
  --animation-duration-fast: 300ms;
  --animation-duration-normal: 500ms;
  --animation-duration-slow: 700ms;
  --animation-ease: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Performance boost */
.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
````

## File: src/app/layout.tsx
````tsx
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from '@/providers'

export const metadata: Metadata = {
  title: "Nirvisha Soni - Portfolio",
  description: "Nirvisha Soni - Computer Science graduate student at University of Florida. Backend developer and AI engineer with published research, experience at Barclays. Specializing in Python, Go, React, and machine learning.",
  keywords: "Nirvisha Soni, backend developer, AI engineer, computer science, University of Florida, machine learning, Python, Go, React, software engineer, full stack developer",
  authors: [{ name: "Nirvisha Soni" }],
  creator: "Nirvisha Soni",
  publisher: "Nirvisha Soni",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico'
  },
  openGraph: {
    title: "Nirvisha Soni - Portfolio",
    description: "Computer Science student and developer specializing in backend systems and AI solutions. Published researcher with industry experience.",
    url: "https://nirvishasoni.dev",
    siteName: "Nirvisha Soni - Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Nirvisha Soni - Portfolio'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Nirvisha Soni - Portfolio",
    description: "Computer Science student and developer specializing in backend systems and AI solutions.",
    creator: "@nirvishaaa", // If you have Twitter
    images: ['/icon-512.png']
  },
  alternates: {
    canonical: "https://nirvishasoni.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <head>
        {/* Additional favicon links for maximum compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nirvisha Soni",
              "jobTitle": "Backend Developer & AI Engineer",
              "description": "Computer Science student specializing in backend development and AI solutions",
              "url": "https://nirvishasoni.dev",
              "image": "https://nirvishasoni.dev/icon-512.png",
              "sameAs": [
                "https://linkedin.com/in/nirvishasoni",
                "https://github.com/Nirvisha82",
                "https://scholar.google.com/citations?user=levmF9MAAAAJ&hl=en"
              ],
              "knowsAbout": [
                "Backend Development",
                "Artificial Intelligence",
                "Machine Learning",
                "Python",
                "Go",
                "React",
                "Software Engineering"
              ],
              "alumniOf": [
                {
                  "@type": "CollegeOrUniversity",
                  "name": "University of Florida"
                },
                {
                  "@type": "CollegeOrUniversity", 
                  "name": "Vishwakarma Institute of Technology"
                }
              ]
            })
          }}
        />
        
        {/* SINGLE UNIFIED SCRIPT - Dark Mode First + Safari Fix */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const theme = localStorage.getItem('theme');
                
                // If they have a saved preference, use it (returning user)
                if (theme === 'light' || theme === 'dark') {
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } else {
                  // First-time visitor - always start with dark mode
                  document.documentElement.classList.add('dark');
                }
                
                // Safari-specific fixes (both mobile and desktop)
                const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                const isMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                
                if (isSafari) {
                  const isDark = theme === 'dark' || !theme; // Default to dark for new users
                  if (isDark) {
                    document.documentElement.style.background = 'linear-gradient(135deg, #0f0b27 0%, #1a1332 25%, #231944 50%, #1a1332 75%, #0f0b27 100%)';
                  } else {
                    document.documentElement.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #f1f5f9 50%, #f8fafc 75%, #ffffff 100%)';
                  }
                }
              } catch (e) {
                // Fallback to dark mode for new users
                document.documentElement.classList.add('dark');
              }
            })();
          `
        }} />

        {/* CSS Styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html { 
              color-scheme: light;
            }
            html.dark { 
              color-scheme: dark;
            }
            
            html.loading * { 
              transition: none !important; 
              animation-duration: 0s !important;
            }
          `
        }} />
        
        {/* Animation Re-enabler */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.documentElement.classList.add('loading');
            
            function enableAnimations() {
              document.documentElement.classList.remove('loading');
            }
            
            // Longer delay for Safari
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            const delay = isSafari ? 200 : 100;
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', function() {
                setTimeout(enableAnimations, delay);
              });
            } else {
              setTimeout(enableAnimations, delay);
            }
          `
        }} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
````

## File: src/components/sections/Research.tsx
````tsx
// Research.tsx
'use client'
import { useState, useEffect } from 'react'
import { ExternalLink, Calendar, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react'

// Unified scroll animation hook
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [visiblePapers, setVisiblePapers] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger paper animations
          setTimeout(() => setVisiblePapers([0]), 200)
          setTimeout(() => setVisiblePapers([0, 1]), 350)
          setTimeout(() => setVisiblePapers([0, 1, 2]), 500)
          setTimeout(() => setVisiblePapers([0, 1, 2, 3]), 650)
        }
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const section = document.getElementById('research')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return { isVisible, visiblePapers }
}

export function Research() {
  const [currentPaper, setCurrentPaper] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const { isVisible, visiblePapers } = useScrollAnimation()

  const publications = [
    {
      id: 1,
      title: "Comparative Analysis of LSTM, GRU & Transformer for German-English Translation",
      journal: "2023 3rd Asian Conference on Innovation in Technology (ASIANCON)",
      year: "2023",
      description: "Comprehensive comparative study evaluating Neural Machine Translation techniques using RNN-based LSTM, GRU models, and Transformer architecture. Trained on over 220K sentence pairs and evaluated using BLEU and ROUGE metrics. Results demonstrated that Transformers significantly outperformed RNN variants in translation fluency and contextual accuracy.",
      tech: ["Neural Machine Translation", "LSTM", "GRU", "Transformer", "BLEU", "ROUGE", "Sequence-to-Sequence"],
      color: "from-purple-500 to-indigo-600",
      url: "https://ieeexplore.ieee.org/document/10270018"
    },
    {
      id: 2,
      title: "Transformer-Based Text Summary Generation for Videos",
      journal: "2024 International Conference on Current Trends in Advanced Computing (ICCTAC)",
      year: "2024",
      description: "Novel Transformer-based pipeline for generating concise textual summaries from videos with frequent scene transitions. System identifies keyframes using clustering, extracts features via InceptionV3, and generates captions using Transformer encoder-decoder. Achieved BLEU-4 score of 52.17 and ROUGE-F1 score of 40.21.",
      tech: ["Video Summarization", "Transformer", "InceptionV3", "Keyframe Extraction", "Encoder-Decoder", "Clustering"],
      color: "from-purple-500 to-blue-600",
      url: "https://ieeexplore.ieee.org/abstract/document/10581200"
    },
    {
      id: 3,
      title: "A Semi-Supervised GAN Architecture for Video Classification",
      journal: "2022 IEEE International Conference on Advancements in Smart, Secure and Intelligent Computing (ASSIC)",
      year: "2023",
      description: "Innovative semi-supervised learning approach using modified MoCoGAN architecture for video classification with minimal labeled data. Discriminator performs dual tasks of distinguishing real/fake videos and classifying across six categories. Achieved over 62% accuracy with 50% labeled data, outperforming traditional supervised baselines.",
      tech: ["Semi-Supervised Learning", "GAN", "MoCoGAN", "Video Classification", "Adversarial Training", "Discriminator"],
      color: "from-purple-500 to-cyan-600",
      url: "https://ieeexplore.ieee.org/document/10074051"
    },
    {
      id: 4,
      title: "LearnEasy: A Learning Platform for Autistic Children",
      journal: "AIP Conference Proceedings",
      year: "2023",
      description: "Comprehensive dual-user web application designed for early Autism Spectrum Disorder diagnosis and personalized learning support. Utilizes AdaBoost and SVM models to predict autism severity levels. Features interactive emotion, sound, and audio-based quizzes tailored to individual severity levels with comprehensive progress tracking for caregivers.",
      tech: ["Autism Spectrum Disorder", "AdaBoost", "SVM", "Machine Learning", "Educational Technology", "Healthcare AI"],
      color: "from-indigo-500 to-purple-600",
      url: "https://pubs.aip.org/aip/acp/article-abstract/2981/1/020025/2929172/LearnEasy-A-learning-platform-for-autistic"
    }
  ]

  const handleNextPaper = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentPaper((prev) => (prev + 1) % publications.length)
      setIsFlipping(false)
    }, 400)
  }

  const handlePrevPaper = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentPaper((prev) => (prev - 1 + publications.length) % publications.length)
      setIsFlipping(false)
    }, 400)
  }

  const getPaperStyle = (index: number) => {
    const relativePosition = (index - currentPaper + publications.length) % publications.length
    const isItemVisible = visiblePapers.includes(index)
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    return {
      transform: `
        translateY(${relativePosition * 8}px) 
        translateX(${relativePosition * 4}px) 
        rotateZ(${relativePosition * 2 - 3}deg)
        scale(${1 - relativePosition * 0.04})
      `,
      zIndex: 40 - relativePosition,
      opacity: isItemVisible ? (
        relativePosition === 0 ? 1 :
        relativePosition === 1 ? (isMobile ? 0.4 : 0.3) :
        relativePosition === 2 ? (isMobile ? 0.2 : 0.15) :
        relativePosition === 3 ? (isMobile ? 0.1 : 0.1) :
        0
      ) : 0,
      transitionProperty: 'transform, opacity, z-index',
      transitionDuration: '0.8s',
      transitionTimingFunction: 'ease-out',
      transitionDelay: isItemVisible ? `${index * 150}ms` : '0ms'
    }
  }

  return (
    <section id="research" data-scroll-section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 right-1/6 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-400/5 dark:bg-indigo-400/10 rounded-full blur-3xl animate-breathe transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{ transitionDelay: '200ms' }}></div>
        <div className={`absolute bottom-1/4 left-1/6 w-72 sm:w-96 h-72 sm:h-96 bg-purple-400/5 dark:bg-purple-400/10 rounded-full blur-3xl animate-breathe transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{ animationDelay: '3s', transitionDelay: '400ms' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-6 sm:mb-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-200 dark:border-purple-800">
            <span className="animate-bounce">📚</span> Research Contributions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Published Research Papers
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Flip through my collection of peer-reviewed research publications
          </p>
        </div>

        <div className={`relative max-w-full sm:max-w-3xl mx-auto mb-6 sm:mb-8 px-12 sm:px-0 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`} 
        style={{ transitionDelay: '200ms' }}>
          <div className="relative h-[500px] sm:h-[400px] perspective-1000">
            <div className={`absolute -left-12 sm:-left-12 top-[44%] sm:top-1/2 transform -translate-y-1/2 z-50 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`} 
            style={{ transitionDelay: '400ms' }}>
              <button
                onClick={handlePrevPaper}
                disabled={isFlipping}
                className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group hover:shadow-xl transition-all duration-300"
              >
                <ChevronLeft size={18} className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
              </button>
            </div>

            <div className={`absolute -right-12 sm:-right-12 top-[44%] sm:top-1/2 transform -translate-y-1/2 z-50 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`} 
            style={{ transitionDelay: '400ms' }}>
              <button
                onClick={handleNextPaper}
                disabled={isFlipping}
                className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group hover:shadow-xl transition-all duration-300"
              >
                <ChevronRight size={18} className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300" />
              </button>
            </div>

            {publications.map((paper, index) => (
              <div key={paper.id} className="absolute inset-0" style={getPaperStyle(index)}>
                <div className="w-full h-full bg-white dark:bg-gray-900 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                  <div className="p-4 sm:p-6 relative z-10 h-full flex flex-col">
                    <div className="mb-3 sm:mb-4">
                      <div className={`flex items-center justify-between mb-2 sm:mb-3 transition-all duration-500 ${
                        visiblePapers.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                      style={{ transitionDelay: `${index * 150 + 300}ms` }}>
                        <div className="flex items-center gap-2">
                          <Calendar size={12} className="text-gray-500" />
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{paper.year}</span>
                        </div>
                        <div className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-300">#{paper.id}</span>
                        </div>
                      </div>

                      <h3 className={`text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight break-words line-clamp-3 sm:line-clamp-none transition-all duration-500 ${
                        visiblePapers.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                      style={{ transitionDelay: `${index * 150 + 400}ms` }}>
                        {paper.title}
                      </h3>

                      <p className={`text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 italic mb-2 break-words transition-all duration-500 ${
                        visiblePapers.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                      style={{ transitionDelay: `${index * 150 + 500}ms` }}>
                        📰 {paper.journal}
                      </p>
                    </div>

                    <div className={`flex-1 mb-4 sm:mb-4 transition-all duration-500 ${
                      visiblePapers.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 600}ms` }}>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs sm:text-sm break-words line-clamp-5 sm:line-clamp-none">
                        {paper.description}
                      </p>
                    </div>

                    <div className={`mb-6 sm:mb-4 transition-all duration-500 ${
                      visiblePapers.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 700}ms` }}>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-xs sm:text-sm">
                        Keywords
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-0">
                        {paper.tech.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className={`px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 break-words ${
                              visiblePapers.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                            }`}
                            style={{ transitionDelay: `${index * 150 + 800 + (idx * 50)}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`mt-auto transition-all duration-500 ${
                      visiblePapers.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 900}ms` }}>
                      <a 
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 py-2 sm:py-3 rounded-lg font-semibold shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm relative overflow-hidden group transition-all duration-300 hover:scale-105"
                      >
                        <span className={`absolute inset-0 bg-gradient-to-r ${paper.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></span>
                        <span className="relative z-10 flex items-center gap-2">
                          <BookOpen size={12} />
                          Read Full Paper
                          <ExternalLink size={10} />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-bl from-white/40 to-transparent dark:from-black/20 transform rotate-45 translate-x-3 sm:translate-x-4 -translate-y-3 sm:-translate-y-4"></div>
                </div>
              </div>
            ))}

            {isFlipping && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-black/20 z-50 animate-pulse"></div>
            )}
          </div>
        </div>

        <div className={`flex justify-center gap-2 mb-6 sm:hidden transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} 
        style={{ transitionDelay: '500ms' }}>
          {publications.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isFlipping) {
                  setIsFlipping(true)
                  setTimeout(() => {
                    setCurrentPaper(index)
                    setIsFlipping(false)
                  }, 400)
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPaper ? 'bg-purple-600 dark:bg-purple-400 w-6' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>

        <div className={`text-center transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} 
        style={{ transitionDelay: '600ms' }}>
          <a 
            href="https://scholar.google.com/citations?user=levmF9MAAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
          >
            <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
            </svg>
            Google Scholar Profile
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-breathe {
          animation: breathe 8s ease-in-out infinite;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
````

## File: src/app/page.tsx
````tsx
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
      
      {/* LIGHT MODE - Purple Constellation (12 dots total) - MOBILE OPTIMIZED */}
      <div className="light-constellation block dark:hidden">
        <div className="light-constellation-dot" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
        <div className="light-constellation-dot" style={{top: '35%', left: '25%', animationDelay: '1s'}}></div>
        <div className="light-constellation-dot" style={{top: '60%', left: '10%', animationDelay: '2s'}}></div>
        <div className="light-constellation-dot" style={{top: '80%', left: '30%', animationDelay: '3s'}}></div>
        <div className="light-constellation-dot" style={{top: '25%', left: '70%', animationDelay: '1.5s'}}></div>
        <div className="light-constellation-dot" style={{top: '45%', left: '75%', animationDelay: '2.5s'}}></div>
        <div className="light-constellation-dot" style={{top: '70%', left: '75%', animationDelay: '0.5s'}}></div>
        <div className="light-constellation-dot" style={{top: '15%', left: '50%', animationDelay: '3.5s'}}></div>
        
        {/* Just 4 additional dots for perfect balance - MOBILE SAFE POSITIONS */}
        <div className="light-constellation-dot" style={{top: '10%', left: '75%', animationDelay: '4s'}}></div>
        <div className="light-constellation-dot" style={{top: '55%', left: '40%', animationDelay: '5s'}}></div>
        <div className="light-constellation-dot" style={{top: '75%', left: '50%', animationDelay: '2.2s'}}></div>
        <div className="light-constellation-dot" style={{top: '5%', left: '25%', animationDelay: '4.5s'}}></div>
        
        {/* Light mode constellation connecting lines - SHORTENED FOR MOBILE */}
        <div className="light-constellation-line" style={{
          top: '20%', 
          left: '15%', 
          width: '100px', 
          transform: 'rotate(35deg)',
          animationDelay: '4s'
        }}></div>
        <div className="light-constellation-line" style={{
          top: '35%', 
          left: '25%', 
          width: '80px', 
          transform: 'rotate(-20deg)',
          animationDelay: '5s'
        }}></div>
        <div className="light-constellation-line" style={{
          top: '25%', 
          left: '50%', 
          width: '120px', 
          transform: 'rotate(15deg)',
          animationDelay: '6s'
        }}></div>
        <div className="light-constellation-line" style={{
          top: '55%', 
          left: '40%', 
          width: '90px', 
          transform: 'rotate(-10deg)',
          animationDelay: '7s'
        }}></div>
      </div>
      
      {/* LIGHT MODE - Elegant Particles (MOBILE SAFE POSITIONS) */}
      <div className="light-particles block dark:hidden">
        <div className="particle" style={{top: '10%', left: '15%', animationDelay: '0s'}}></div>
        <div className="particle" style={{top: '25%', left: '70%', animationDelay: '2s'}}></div>
        <div className="particle" style={{top: '45%', left: '75%', animationDelay: '4s'}}></div>
        <div className="particle" style={{top: '35%', left: '25%', animationDelay: '1s'}}></div>
        <div className="particle" style={{top: '60%', left: '10%', animationDelay: '3s'}}></div>
        <div className="particle" style={{top: '70%', left: '65%', animationDelay: '5s'}}></div>
        <div className="particle" style={{top: '80%', left: '30%', animationDelay: '6s'}}></div>
        <div className="particle" style={{top: '15%', left: '50%', animationDelay: '7s'}}></div>
        <div className="particle" style={{top: '55%', left: '45%', animationDelay: '8s'}}></div>
        <div className="particle" style={{top: '85%', left: '70%', animationDelay: '9s'}}></div>
      </div>
      
      {/* Light Mode - Subtle accent lines - MOBILE SAFE SIZES */}
      <div className="light-accent-lines block dark:hidden">
        <div className="accent-line" style={{top: '20%', left: '0%', width: '150px', animationDelay: '0s'}}></div>
        <div className="accent-line" style={{top: '50%', right: '0%', width: '120px', animationDelay: '3s'}}></div>
        <div className="accent-line" style={{top: '75%', left: '20%', width: '100px', animationDelay: '6s'}}></div>
      </div>
      
      {/* Constellation Background Effect for Dark Mode (12 dots total) - MOBILE OPTIMIZED */}
      <div className="dark-constellation hidden dark:block">
        <div className="constellation-dot" style={{top: '20%', left: '15%', animationDelay: '0s'}}></div>
        <div className="constellation-dot" style={{top: '35%', left: '25%', animationDelay: '1s'}}></div>
        <div className="constellation-dot" style={{top: '60%', left: '10%', animationDelay: '2s'}}></div>
        <div className="constellation-dot" style={{top: '80%', left: '30%', animationDelay: '3s'}}></div>
        <div className="constellation-dot" style={{top: '25%', left: '70%', animationDelay: '1.5s'}}></div>
        <div className="constellation-dot" style={{top: '45%', left: '75%', animationDelay: '2.5s'}}></div>
        <div className="constellation-dot" style={{top: '70%', left: '75%', animationDelay: '0.5s'}}></div>
        <div className="constellation-dot" style={{top: '15%', left: '50%', animationDelay: '3.5s'}}></div>
        
        {/* Just 4 additional dots for perfect balance - MOBILE SAFE POSITIONS */}
        <div className="constellation-dot" style={{top: '10%', left: '75%', animationDelay: '4s'}}></div>
        <div className="constellation-dot" style={{top: '55%', left: '40%', animationDelay: '5s'}}></div>
        <div className="constellation-dot" style={{top: '75%', left: '50%', animationDelay: '2.2s'}}></div>
        <div className="constellation-dot" style={{top: '5%', left: '25%', animationDelay: '4.5s'}}></div>
        
        {/* Connecting lines between some dots - SHORTENED FOR MOBILE */}
        <div className="constellation-line" style={{
          top: '20%', 
          left: '15%', 
          width: '100px', 
          transform: 'rotate(35deg)',
          animationDelay: '4s'
        }}></div>
        <div className="constellation-line" style={{
          top: '35%', 
          left: '25%', 
          width: '80px', 
          transform: 'rotate(-20deg)',
          animationDelay: '5s'
        }}></div>
        <div className="constellation-line" style={{
          top: '25%', 
          left: '50%', 
          width: '120px', 
          transform: 'rotate(15deg)',
          animationDelay: '6s'
        }}></div>
        <div className="constellation-line" style={{
          top: '55%', 
          left: '40%', 
          width: '90px', 
          transform: 'rotate(-10deg)',
          animationDelay: '7s'
        }}></div>
      </div>
      
      {/* Enhanced subtle dots for light mode */}
      <div className="subtle-dots dark:hidden"></div>
      
      <Navigation />
      
      <main className="w-full max-w-full overflow-x-hidden">
        {/* Hero Section - Mobile Responsive & No Horizontal Scroll */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden w-full max-w-full">
          {/* Hero floating shapes - More subtle and mobile safe */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none w-full max-w-full">
            <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-purple-400/8 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse max-w-[200px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-400/8 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000 max-w-[250px]"></div>
            
            {/* More subtle additional shapes for light mode - MOBILE SAFE */}
            <div className="absolute top-1/2 right-1/3 w-24 sm:w-32 h-24 sm:h-32 bg-emerald-400/6 dark:bg-emerald-400/15 rounded-full blur-2xl animate-pulse delay-500 dark:hidden max-w-[100px]"></div>
            <div className="absolute bottom-1/3 left-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-rose-400/5 dark:bg-rose-400/12 rounded-full blur-2xl animate-pulse delay-1500 dark:hidden max-w-[150px]"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-6xl mx-auto w-full px-2 sm:px-4">
            
            {/* TOP SPACER - RESPONSIVE: Small on mobile, large on desktop */}
            <div className="mb-4 sm:mb-6 lg:mb-12 xl:mb-16">
              {/* Welcome Badge */}
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs sm:text-sm font-medium border border-purple-200 dark:border-purple-800 backdrop-blur-sm">
                <span className="wave">👋</span>
                Welcome to my portfolio
              </span>
            </div>
            
            {/* MAIN HEADING - Better mobile spacing and word wrap */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight text-gray-900 dark:text-white px-2 break-words">
              Powering Real Impact with{' '}
              <span className="text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text animate-gradient">
                Reliable Code
              </span>
            </h1>
            
            {/* BOTTOM CONTENT - Responsive spacing */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 break-words">
                Hi! I&apos;m <strong className="text-purple-600 dark:text-purple-400">Nirvisha</strong>, a software developer specializing in 
                <span className="text-blue-600 dark:text-blue-400"> backend systems</span> and 
                <span className="text-cyan-600 dark:text-cyan-400"> AI solutions</span>.
              </p>
              
              {/* CTA Buttons - Mobile optimized */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 w-full max-w-2xl mx-auto">
                <button 
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                  }}
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto text-sm sm:text-base max-w-xs sm:max-w-none"
                >
                  <span className="flex items-center justify-center gap-2">
                    See what I&apos;ve built
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </button>
                
                <a
                  href="/Nirvisha_Soni.pdf"
                  download="Nirvisha_Soni.pdf"
                  className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm w-full sm:w-auto text-sm sm:text-base inline-block text-center active:scale-95 touch-manipulation max-w-xs sm:max-w-none"
                  style={{ 
                    WebkitTapHighlightColor: 'transparent',
                    userSelect: 'none'
                  }}
                  onTouchStart={(e) => {
                    // Prevent double-tap zoom on iOS
                    e.preventDefault();
                    // Add immediate visual feedback
                    e.currentTarget.style.transform = 'scale(0.95)';
                  }}
                  onTouchEnd={(e) => {
                    // Reset transform
                    setTimeout(() => {
                      e.currentTarget.style.transform = '';
                    }, 150);
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                    Download Resume
                  </span>
                </a>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4 sm:gap-6 justify-center items-center">
                <a
                  href="https://linkedin.com/in/nirvishasoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a
                  href="https://github.com/Nirvisha82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                
                <a
                  href="https://scholar.google.com/citations?user=levmF9MAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-300"
                  aria-label="Google Scholar Profile"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" fill="currentColor">
                    <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.847 14.582 15.085 15 12 15s-5.847-.418-6.758-1.231z"/>
                    <path d="M6.5 15.5v3c0 2.485 2.239 4.5 5 4.5h1c2.761 0 5-2.015 5-4.5v-3l-5.5 2.5-5.5-2.5z"/>
                  </svg>
                </a>
              </div>
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
````

## File: src/components/sections/Projects.tsx
````tsx
'use client'
import { useState, useRef, useEffect } from 'react'
import { Github, ArrowRight } from 'lucide-react'

// Unified scroll animation hook
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger project animations
          setTimeout(() => setVisibleProjects([0]), 200)
          setTimeout(() => setVisibleProjects([0, 1]), 350)
          setTimeout(() => setVisibleProjects([0, 1, 2]), 500)
          setTimeout(() => setVisibleProjects([0, 1, 2, 3]), 650)
        }
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const section = document.getElementById('projects')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return { isVisible, visibleProjects }
}

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const { isVisible, visibleProjects } = useScrollAnimation()
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const projects = [
    {
      id: 1,
      title: "BioAssist",
      description: "AI-powered biomedical chatbot combining local knowledge base retrieval with live web search. Features advanced RAG pipeline, multi-format document processing, and hallucination detection for reliable healthcare responses.",
      tech: ["Python", "Streamlit", "FAISS", "Gemini 2.0", "RAG", "Docker"],
      icon: "🧬",
      accent: "purple",
      githubUrl: "https://github.com/Nirvisha82/BioAssist"
    },
    {
      id: 2,
      title: "Re:Gen",
      description: "Intelligent Gmail auto-reply assistant built with NestJS framework. Uses Google Cloud Pub/Sub for real-time email monitoring and Gemini AI for generating contextually appropriate responses with OAuth2 authentication.",
      tech: ["NestJS", "TypeScript", "Gemini AI", "Gmail API", "Pub/Sub", "OAuth2"],
      icon: "📧",
      accent: "blue",
      githubUrl: "https://github.com/Nirvisha82/re-gen"
    },
    {
      id: 3,
      title: "Roamio",
      description: "Ultimate travel companion platform for exploring/posting detailed itineraries and connecting with fellow travelers. Features social networking, interactive comments, travel analytics, and state-based destination discovery system.",
      tech: ["Go", "Gin", "GORM", "SQLite", "Swagger", "Python"],
      icon: "✈️",
      accent: "cyan",
      githubUrl: "https://github.com/Nirvisha82/Roamio"
    },
    {
      id: 4,
      title: "Reddit Clone",
      description: "High-performance social platform simulator using Proto Actor framework and concurrent operations. Models realistic user behavior with Zipf distribution, supporting 100K+ users with dynamic karma system and community features.",
      tech: ["Go", "Proto Actor", "Zipf Distribution", "Concurrency", "Actor Model"],
      icon: "👥",
      accent: "indigo",
      githubUrl: "https://github.com/Nirvisha82/Reddit-clone"
    }
  ]

  // Fixed particle positions to avoid hydration issues
  const particles = [
    { left: 10, top: 20, delay: 0 },
    { left: 80, top: 15, delay: 1 },
    { left: 25, top: 60, delay: 2 },
    { left: 70, top: 75, delay: 3 },
    { left: 45, top: 30, delay: 4 },
    { left: 90, top: 45, delay: 0.5 },
    { left: 15, top: 80, delay: 1.5 },
    { left: 60, top: 10, delay: 2.5 },
    { left: 35, top: 90, delay: 3.5 },
    { left: 85, top: 65, delay: 4.5 },
  ]

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const getCardTransform = (index: number) => {
    if (!mounted || hoveredProject !== index + 1) return 'rotateX(0deg) rotateY(0deg)'
    
    const card = cardRefs.current[index]
    if (!card) return 'rotateX(0deg) rotateY(0deg)'
    
    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateX = (mousePosition.y - centerY) / 10
    const rotateY = (centerX - mousePosition.x) / 10
    
    return `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleProjectClick = (githubUrl: string) => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer')
  }
  return (
    <section id="projects" data-scroll-section className="py-20 px-6 relative overflow-hidden">
      {/* Fixed Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-purple-400 opacity-20 dark:opacity-40 rounded-full animate-float transition-all duration-700 ease-out ${
              isVisible ? 'opacity-20 dark:opacity-40' : 'opacity-0'
            }`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: '6s',
              transitionDelay: `${particle.delay * 200}ms`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-200 dark:border-purple-800">
              <span className="animate-bounce">🚀</span>
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects with Purpose
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From concept to code - here&apos;s how I bring ideas to life
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isProjectVisible = visibleProjects.includes(index)
            
            return (
              <div
                key={project.id}
                // ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative card-perspective transition-all duration-700 ease-out ${
                  isProjectVisible 
                    ? 'opacity-100 translate-y-0 translate-x-0' 
                    : `opacity-0 translate-y-8 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 transition-all duration-700 backdrop-blur-sm card-transform-style"
                  style={{ 
                    transform: getCardTransform(index),
                    ...(hoveredProject === project.id 
                      ? { 
                          boxShadow: '0 25px 50px -12px rgba(124, 58, 237, 0.1)',
                          transform: `${getCardTransform(index)} scale(1.05)`
                        }
                      : {})
                  }}
                >
                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transition-opacity duration-500 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute inset-[1px] bg-white dark:bg-gray-900 rounded-2xl"></div>
                  </div>

                  {/* Simple Floating Orbs */}
                  {hoveredProject === project.id && isProjectVisible && (
                    <>
                      <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
                      <div 
                        className="absolute top-8 right-8 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse"
                      ></div>
                      <div 
                        className="absolute bottom-8 left-8 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-pulse"
                        style={{ animationDelay: '0.5s' }}
                      ></div>
                    </>
                  )}

                  {/* Card Content */}
                  <div className="relative p-6 z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                          project.accent === 'purple' 
                            ? 'from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/50 border-purple-200 dark:border-purple-700' 
                            : project.accent === 'blue' 
                            ? 'from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/50 border-blue-200 dark:border-blue-700'
                            : project.accent === 'cyan' 
                            ? 'from-cyan-100 to-cyan-200 dark:from-cyan-900/30 dark:to-cyan-800/50 border-cyan-200 dark:border-cyan-700'
                            : 'from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/50 border-indigo-200 dark:border-indigo-700'
                        } flex items-center justify-center text-xl border transition-all duration-500 ${
                          hoveredProject === project.id 
                            ? 'rotate-12 scale-110 animate-pulse shadow-lg' 
                            : 'group-hover:rotate-12 group-hover:scale-110'
                        } ${
                          isProjectVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}
                        style={{ transitionDelay: `${index * 150 + 200}ms` }}>
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <div className={`flex items-center gap-2 mb-1 transition-all duration-500 ${
                            isProjectVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                          }`}
                          style={{ transitionDelay: `${index * 150 + 300}ms` }}>
                            <h3 className={`text-lg font-bold transition-all duration-300 ${
                              hoveredProject === project.id
                                ? 'text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text'
                                : 'text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text'
                            }`}>
                              {project.title}
                            </h3>
                            {/* Accent Dot */}
                            <div className={`w-2 h-2 rounded-full ${
                              project.accent === 'purple' 
                                ? 'bg-purple-500' 
                                : project.accent === 'blue' 
                                ? 'bg-blue-500'
                                : project.accent === 'cyan' 
                                ? 'bg-cyan-500'
                                : 'bg-indigo-500'
                            } ${hoveredProject === project.id ? 'animate-pulse' : ''}`}></div>
                          </div>
                          {/* Subtitle */}
                          <p className={`text-xs font-medium transition-all duration-500 ${
                            project.accent === 'purple' 
                              ? 'text-purple-600 dark:text-purple-400' 
                              : project.accent === 'blue' 
                              ? 'text-blue-600 dark:text-blue-400'
                              : project.accent === 'cyan' 
                              ? 'text-cyan-600 dark:text-cyan-400'
                              : 'text-indigo-600 dark:text-indigo-400'
                          } ${
                            isProjectVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                          }`}
                          style={{ transitionDelay: `${index * 150 + 400}ms` }}>
                            {project.id === 1 ? 'Biomedical AI Assistant' : 
                             project.id === 2 ? 'Smart Email Automation' :
                             project.id === 3 ? 'Travel Social Platform' :
                             'Social Simulation Engine'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description with left accent */}
                    <div className={`relative mb-6 transition-all duration-500 ${
                      isProjectVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 150 + 500}ms` }}>
                      <div className={`absolute left-0 top-0 w-1 h-full rounded-full ${
                        project.accent === 'purple' 
                          ? 'bg-gradient-to-b from-purple-400 to-purple-600' 
                          : project.accent === 'blue' 
                          ? 'bg-gradient-to-b from-blue-400 to-blue-600'
                          : project.accent === 'cyan' 
                          ? 'bg-gradient-to-b from-cyan-400 to-cyan-600'
                          : 'bg-gradient-to-b from-indigo-400 to-indigo-600'
                      } transition-all duration-500 ${
                        hoveredProject === project.id ? 'opacity-100 scale-110' : 'opacity-60'
                      }`}></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed pl-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-xs rounded-lg border transition-all duration-500 hover:scale-110 hover:-translate-y-1 cursor-default bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-300 dark:hover:border-purple-500 ${
                            hoveredProject === project.id && isProjectVisible ? 'animate-bounce' : ''
                          } ${
                            isProjectVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                          }`}
                          style={{ 
                            animationDelay: `${techIndex * 100}ms`,
                            transitionDelay: `${index * 150 + 600 + (techIndex * 50)}ms`
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button 
                      onClick={() => handleProjectClick(project.githubUrl)}
                      className={`w-full bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 py-3 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group/btn overflow-hidden relative ${
                        isProjectVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${index * 150 + 800}ms` }}
                    >
                      <span className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-opacity duration-500 ${
                        hoveredProject === project.id ? 'opacity-100' : 'opacity-0 group-hover/btn:opacity-100'
                      }`}></span>
                      <span className="relative z-10 flex items-center gap-2">
                        <Github size={16} className="group-hover/btn:rotate-12 transition-all duration-300" />
                        View on GitHub
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" />
                      </span>
                    </button>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 pointer-events-none transition-opacity duration-500 ${
                    hoveredProject === project.id ? 'opacity-5' : 'opacity-0 group-hover:opacity-5'
                  }`}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .card-perspective {
          perspective: 1000px;
        }
        .card-transform-style {
          transform-style: preserve-3d;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
````

## File: src/components/layout/Navigation.tsx
````tsx
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
````

## File: src/components/sections/About.tsx
````tsx
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

// Unified scroll animation hook
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return { isVisible }
}

export function About() {
  const { isVisible } = useScrollAnimation()

  return (
    <section id="about" data-scroll-section className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
      {/* Background Elements - responsive sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/6 w-48 h-48 sm:w-72 sm:h-72 about-animate-breathe blur-2xl sm:blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 50%)'
        }}></div>
        <div className="absolute bottom-1/3 right-1/6 w-56 h-56 sm:w-96 sm:h-96 about-animate-breathe blur-2xl sm:blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 50%)',
          animationDelay: '4s'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header - responsive typography */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-3 sm:mb-4 border border-purple-200 dark:border-purple-800">
            <span className="animate-bounce">👨‍💻</span>
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Lines Between the Code
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Always learning, always building, always growing
          </p>
        </div>

        {/* Main Content Grid - responsive layout with image first */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Image (now first on all screen sizes) */}
          <div className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
          style={{ transitionDelay: '200ms' }}>
            <div className="relative group">
              {/* Image Container - responsive sizing */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 p-4 sm:p-6 lg:p-8 aspect-square flex items-center justify-center">
                {/* Profile Image */}
                <div className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden shadow-xl sm:shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/images/nirvisha.png" 
                    alt="Nirvisha Soni - Profile" 
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                </div>
                
                {/* Decorative Elements - responsive sizes */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-purple-500/20 rounded-full blur-lg sm:blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-blue-500/20 rounded-full blur-lg sm:blur-xl"></div>
              </div>
              
              {/* Floating Skills Badges - responsive positioning and sizing */}
              <div className={`absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-white dark:bg-gray-800 px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-md sm:shadow-lg border border-gray-200 dark:border-gray-700 about-animate-float transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">🚀 Backend Dev</span>
              </div>
              
              <div className={`absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-white dark:bg-gray-800 px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-md sm:shadow-lg border border-gray-200 dark:border-gray-700 about-animate-float transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} 
              style={{ 
                transitionDelay: '600ms',
                animationDelay: '1s' 
              }}>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">🤖 AI Engineer</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}
          style={{ transitionDelay: '300ms' }}>
            <div>
              <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}>
                Hey, I am Nirvisha!
              </h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                <p className={`transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '600ms' }}>
                  A Computer Science student with a passion for backend development and artificial intelligence. I enjoy creating scalable systems that solve real-world problems and make a meaningful impact through innovative technology solutions.
                </p>
                <p className={`transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '700ms' }}>
                  When I&apos;m not deep in coding projects, you&apos;ll find me exploring the latest AI research, experimenting with new technologies, or completely switching gears to indulge in my love for cooking. I enjoy exploring different cuisines and culinary experiences - from trying authentic regional dishes to experimenting with fusion flavors in my own kitchen.
                </p>
                <p className={`transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '800ms' }}>
                  I&apos;m always eager to connect with new people and learn from their diverse perspectives. 
                  Currently seeking opportunities to apply my skills in <strong className="text-purple-600 dark:text-purple-400">backend development</strong> and{' '}
                  <strong className="text-blue-600 dark:text-blue-400">AI engineering</strong> roles where I can contribute to innovative projects.
                </p>
              </div>
            </div>

            {/* CTA Button - responsive sizing */}
            <div className={`pt-2 sm:pt-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '900ms' }}>
              <a 
                href="mailto:nsoni@ufl.edu"
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto text-center"
              >
                Let&apos;s work together →
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes about-breathe {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.1) rotate(180deg); opacity: 1; }
        }
        .about-animate-breathe {
          animation: about-breathe 8s ease-in-out infinite;
        }
        
        @keyframes about-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .about-animate-float {
          animation: about-float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
````

## File: src/components/sections/Education.tsx
````tsx
'use client'
import { useState, useEffect } from 'react'
import { Calendar, MapPin, Users, BookOpen, Star, ChevronDown } from 'lucide-react'

// Unified scroll animation hook (inline for this example)
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger education items
          setTimeout(() => setVisibleItems([0]), 200)
          setTimeout(() => setVisibleItems([0, 1]), 350)
        }
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const section = document.getElementById('education')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return { isVisible, visibleItems }
}

export function Education() {
  const [activeScroll, setActiveScroll] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const { isVisible, visibleItems } = useScrollAnimation()

  const education = [
    {
      id: 1,
      degree: "Master of Science",
      field: "Computer Science",
      university: "University of Florida",
      location: "Gainesville, FL, USA",
      duration: "2024 - 2026",
      status: "In Progress",
      gpa: "3.94/4.0",
      highlights: [
        "Member - Women in Computer Science and Engineering (WiCSE), UF",
      ],
      relevantCourses: [
        "Advanced Data Structures", "Analysis of Algorithms", "Distributed Systems", "Math for Intelligent Systems","Machine Learning", "Natural Language Processing",  "Bioinformatics"
      ],
      color: "purple",
      logo: "UF"
    },
    {
      id: 2,
      degree: "Bachelor of Science", 
      field: "Information Technology",
      university: "Vishwakarma Institute of Technology (Pune University)",
      location: "Pune, Maharashtra, India", 
      duration: "2019 - 2023",
      status: "Completed",
      gpa: "9.62/10",
      highlights: [
        "Executive Committee Member - IEEE Student Branch, VIT",
        "Machine Learning Trainer - GedIT Coding Club, VIT",
        "Utkarsh Best Volunteer - Social Welfare and Development, VIT",
      ],
      relevantCourses: [
        "Data Structures", "Object Oriented Programming", "Design and Analysis of Algorithm", "Database Management System", "Computer Architecture and Operating System","Cloud Computing",
        "Data Communication and Networking", "Artificial Intelligence", "Image Processing and CV", "Data Science", "System Programming" 
      ],
      color: "blue",
      logo: "VIT"
    }
  ]

  // Detect mobile/touch devices
  useEffect(() => {
    const checkIsMobile = () => {
      const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth < 1024
      setIsMobile(hasTouchScreen || isSmallScreen)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const handleCardInteraction = (eduId: number) => {
    setActiveScroll(activeScroll === eduId ? null : eduId)
  }

  const handleMouseEnter = (eduId: number) => {
    if (!isMobile) {
      setActiveScroll(eduId)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveScroll(null)
    }
  }

  const getUniversityLogo = (logo: string) => {
    if (logo === "UF") {
      return (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 flex-shrink-0">
          <img 
            src="/images/uf-logo.png" 
            alt="University of Florida Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      )
    } else if (logo === "VIT") {
      return (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 flex-shrink-0">
          <img 
            src="/images/vit-logo.png" 
            alt="Vishwakarma Institute of Technology Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      )
    }
    return null
  }

  return (
    <section id="education" data-scroll-section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-3 sm:mb-4 border border-purple-200 dark:border-purple-800">
            <span className="animate-bounce">🎓</span>
            Academic Journey
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Education 
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Building knowledge through rigorous academic pursuit and continuous learning
          </p>
        </div>

        {/* Academic Scrolls */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {education.map((edu, index) => {
            const isItemVisible = visibleItems.includes(index)
            
            return (
              <div
                key={edu.id}
                className={`group relative transition-all duration-700 ease-out ${
                  isItemVisible 
                    ? 'opacity-100 translate-y-0 translate-x-0' 
                    : `opacity-0 translate-y-8 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`
                }}
                onMouseEnter={() => handleMouseEnter(edu.id)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Scroll Container */}
                <div className={`relative ${
                  edu.color === 'purple' 
                    ? 'bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-purple-200 dark:border-purple-800' 
                    : 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800'
                } rounded-xl sm:rounded-2xl border-2 transition-all duration-700 hover:shadow-xl sm:hover:shadow-2xl ${
                  activeScroll === edu.id ? 'scale-102' : ''
                }`}>
                  
                  {/* Scroll Header */}
                  <div 
                    className="p-4 sm:p-6 cursor-pointer"
                    onClick={() => handleCardInteraction(edu.id)}
                  >
                    <div className="flex items-start sm:items-center justify-between gap-3">
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        {/* University Logo */}
                        <div className={`transition-all duration-500 flex-shrink-0 ${
                          activeScroll === edu.id ? 'rotate-12 scale-110' : 'group-hover:rotate-6 group-hover:scale-105'
                        } ${
                          isItemVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}
                        style={{ 
                          transitionDelay: `${index * 150 + 200}ms`
                        }}>
                          {getUniversityLogo(edu.logo)}
                        </div>

                        <div className={`transition-all duration-700 flex-1 min-w-0 ${
                          isItemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                        style={{ 
                          transitionDelay: `${index * 150 + 300}ms`
                        }}>
                          {/* Status Badge */}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 inline-block w-fit ${
                              edu.status === 'Completed'
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                            } ${activeScroll === edu.id ? 'scale-110' : ''}`}>
                              {edu.status === 'Completed' ? '✅ Completed' : '🔄 In Progress'}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              <Calendar size={12} />
                              {edu.duration}
                            </span>
                          </div>

                          {/* Degree Info */}
                          <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold transition-all duration-300 break-words ${
                            activeScroll === edu.id
                              ? `text-transparent bg-gradient-to-r ${
                                  edu.color === 'purple' 
                                    ? 'from-purple-600 to-indigo-600' 
                                    : 'from-blue-600 to-cyan-600'
                                } bg-clip-text`
                              : 'text-gray-900 dark:text-white'
                          }`}>
                            {edu.degree}
                          </h3>
                          <p className={`text-base sm:text-lg font-medium break-words ${
                            edu.color === 'purple' 
                              ? 'text-purple-600 dark:text-purple-400' 
                              : 'text-blue-600 dark:text-blue-400'
                          }`}>
                            {edu.field}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1 text-gray-600 dark:text-gray-300 text-sm">
                            <span className="flex items-center gap-1 break-words">
                              <BookOpen size={14} className="flex-shrink-0" />
                              <span className="truncate">{edu.university}</span>
                            </span>
                            <span className="flex items-center gap-1 break-words">
                              <MapPin size={14} className="flex-shrink-0" />
                              <span className="truncate">{edu.location}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Expand Indicator */}
                      <div className={`transition-all duration-300 flex-shrink-0 ${
                        activeScroll === edu.id ? 'rotate-180' : ''
                      } ${
                        isItemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{ 
                        transitionDelay: `${index * 150 + 400}ms`
                      }}>
                        <ChevronDown size={20} className={
                          edu.color === 'purple' ? 'text-purple-500' : 'text-blue-500'
                        } />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div className={`overflow-hidden transition-all duration-700 ease-out ${
                    activeScroll === edu.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      {/* Divider */}
                      <div className={`w-full h-px mb-4 sm:mb-6 ${
                        edu.color === 'purple'
                          ? 'bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-700'
                          : 'bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-blue-700'
                      }`}></div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        {/* Left Column */}
                        <div className="order-2 lg:order-1">
                          {/* GPA */}
                          <div className="flex items-center gap-2 mb-4">
                            <Star size={16} className={
                              edu.color === 'purple' ? 'text-purple-500' : 'text-blue-500'
                            } />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              <span className={`font-bold text-base sm:text-lg ${
                                edu.color === 'purple' ? 'text-purple-600 dark:text-purple-400' : 'text-blue-600 dark:text-blue-400'
                              }`}>GPA: {edu.gpa}</span>
                            </span>
                          </div>

                          {/* Activities */}
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2 text-sm sm:text-base">
                              <Users size={16} className={
                                edu.color === 'purple' ? 'text-purple-500' : 'text-blue-500'
                              } />
                              Activities
                            </h4>
                            <ul className="space-y-2">
                              {edu.highlights.map((highlight, idx) => (
                                <li 
                                  key={idx}
                                  className={`flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                                    activeScroll === edu.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                                  }`}
                                  style={{ 
                                    transitionDelay: activeScroll === edu.id ? `${idx * 100}ms` : '0ms'
                                  }}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full mt-2 animate-pulse flex-shrink-0 ${
                                    edu.color === 'purple' ? 'bg-purple-400' : 'bg-blue-400'
                                  }`}></span>
                                  <span className="break-words">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right Column - Coursework */}
                        <div className="order-1 lg:order-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm sm:text-base">
                            Relevant Coursework
                          </h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {edu.relevantCourses.map((course, idx) => (
                              <span
                                key={idx}
                                className={`px-2 sm:px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-300 hover:scale-105 break-words ${
                                  edu.color === 'purple'
                                    ? 'border-purple-200 bg-purple-100 text-purple-700 dark:border-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                                    : 'border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                } ${
                                  activeScroll === edu.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                                }`}
                                style={{ 
                                  transitionDelay: activeScroll === edu.id ? `${idx * 50}ms` : '0ms'
                                }}
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                    activeScroll === edu.id
                      ? `animate-ping ${edu.color === 'purple' ? 'bg-purple-400' : 'bg-blue-400'}`
                      : 'bg-gray-300 dark:bg-gray-600'
                  } ${
                    isItemVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150 + 500}ms`
                  }}></div>
                  
                  {/* Scroll-like rolled edges */}
                  <div className={`absolute top-0 left-0 w-4 sm:w-6 h-full rounded-l-xl sm:rounded-l-2xl opacity-20 transition-all duration-700 ${
                    edu.color === 'purple'
                      ? 'bg-gradient-to-b from-purple-300 to-purple-400 dark:from-purple-700 dark:to-purple-800'
                      : 'bg-gradient-to-b from-blue-300 to-blue-400 dark:from-blue-700 dark:to-blue-800'
                  } ${
                    isItemVisible ? 'opacity-20' : 'opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150 + 100}ms`
                  }}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
````

## File: src/components/sections/Experience.tsx
````tsx
'use client'
import { useState, useEffect } from 'react'
import { Calendar, MapPin, Building } from 'lucide-react'

// Import the unified hook (you'll need to create this file)
// import { useStaggeredAnimation } from '@/hooks/useScrollAnimation'

// Temporary inline hook for this example - replace with import above
function useStaggeredAnimation(itemCount: number) {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Start staggered animation immediately when visible
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i])
            }, i * 100) // ✅ FIXED: Faster stagger (was 150ms)
          }
        }
        // Remove the else clause to prevent disappearing
      },
      { 
        threshold: 0.15, // ✅ FIXED: Much lower threshold for earlier trigger
        rootMargin: '0px 0px 100px 0px' // ✅ FIXED: Positive margin triggers 100px BEFORE entering viewport
      }
    )

    const section = document.getElementById('experience')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [itemCount])

  return { isVisible, visibleItems }
}

export function Experience() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  
  const experiences = [
    {
      id: 1,
      title: "AI Software Developer",
      company: "UF IC3 - University of Florida",
      location: "Gainesville, FL",
      duration: "Aug 2025 – Present",
      type: "Applied AI Engineering",
      current: true,
      description: "Developing an agentic, multimodal RAG pipeline for UF Shands Digital Twin project",
      highlights: [
        "Architected RAG pipeline processing 20K+ clinical documents with cross-modal reasoning (text, images, tables)",
        "Built hybrid retrieval system combining vector search + external knowledge, boosting clinical query accuracy by 30%",
        "Implemented HIPAA-compliant guardrails with PHI redaction and hallucination detection",
        "Developed automated tests to validate retrieval accuracy and cut query latency by 20%"
      ],
      skills: ["Python", "LangChain", "Vector Databases", "LLMs", "HIPAA Compliance"],
      logo: "/images/ic3-logo.png",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      title: "Software Engineer Apprentice",
      company: "American Express",
      location: "Florida",
      duration: "Aug 2025 – Present",
      type: "Apprenticeship",
      current: true,
      description: "Building a GitHub automation app to streamline enterprise development workflows",
      highlights: [
        "Built GitHub App in Go that auto-creates branches, generates PR templates, and suggests file changes, saving 40% developer setup time",
        "Designed repo-aware LLM workflow integrating static analysis + embeddings to identify impacted files and propose precise code modifications",
        "Implemented end-to-end issue→branch→PR pipeline, cutting issue-to-PR turnaround by 25%"
      ],
      skills: ["Go", "GitHub API", "CI/CD", "LLMs", "Developer Productivity"],
      logo: "/images/amex-logo.png",
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 3,
      title: "Graduate Analyst",
      company: "Barclays",
      location: "Pune, India",
      duration: "July 2023 – July 2024",
      type: "Industry",
      current: false,
      description: "Delivered backend microservices and data pipelines for global trading systems",
      highlights: [
        "Built Spring Boot microservices for trading platform processing $2B+ daily transactions with 99.9% uptime",
        "Developed REST APIs integrating live market data, achieving sub-millisecond latency and reducing order errors by 15%",
        "Implemented Azure Event Hubs + Kafka pipelines, cutting reporting time by 20% and improving trader insights",
        "Automated post-trade validation with AWS Lambda workflows, reducing manual intervention by 60%"
      ],
      skills: ["Java", "Spring Boot", "REST APIs", "Kafka", "AWS Lambda", "Azure Event Hubs"],
      logo: "/images/barclays-logo.png",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Machine Learning Intern",
      company: "AlgoAnalytics Private Limited",
      location: "Pune, India",
      duration: "Jan 2023 – Apr 2023",
      type: "Internship",
      current: false,
      description: "Built NLP models for topic modeling, summarization, and sentiment prediction on financial data",
      highlights: [
        "Conducted topic modeling on 5K+ financial articles, enabling production topic-based search",
        "Developed transformer-based summarization models, improving content clarity by 10%",
        "Built sentiment analysis model correlating financial news with stock movements (Pearson r = 0.7)"
      ],
      skills: ["Transformers", "NLP", "Topic Modeling", "Summarization", "Sentiment Analysis"],
      logo: "/images/algoanalytics-logo.png",
      color: "from-orange-500 to-red-600"
    }
  ]

  const { isVisible, visibleItems } = useStaggeredAnimation(experiences.length)

  return (
    <section id="experience" data-scroll-section className="py-12 sm:py-16 lg:py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-200 dark:border-purple-800">
            <span className="animate-bounce">💼</span>
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Growth
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From research labs to industry - building expertise through diverse challenges
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 via-green-400 to-orange-400 transform md:-translate-x-1/2 transition-all duration-1000 delay-200 origin-top ${
            isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              const itemVisible = visibleItems.includes(index)
              
              return (
                <div
                  key={exp.id}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row transition-all duration-700 ease-out ${
                    itemVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`  // ✅ FIXED: Faster (was 150ms)
                  }}
                  onMouseEnter={() => setHoveredItem(exp.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Timeline Node with Company Logo */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full bg-white dark:bg-gray-900 shadow-lg border-4 border-white dark:border-gray-900 flex items-center justify-center transition-all duration-500 overflow-hidden ${
                      hoveredItem === exp.id ? 'scale-125 rotate-12' : itemVisible ? 'scale-100' : 'scale-75'
                    }`}>
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const fallback = e.currentTarget.parentElement
                          if (fallback) {
                            fallback.innerHTML = `<div class="w-10 h-10 bg-gradient-to-br ${exp.color} rounded-lg flex items-center justify-center text-white font-bold text-lg">${exp.company.charAt(0)}</div>`
                          }
                        }}
                      />
                      
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} opacity-10 transition-opacity duration-300 ${
                        hoveredItem === exp.id ? 'opacity-20' : ''
                      }`}></div>
                    </div>
                    
                    {/* Pulse Ring for Current Position */}
                    {exp.current && itemVisible && (
                      <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className={`bg-white dark:bg-gray-900/80 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:border-purple-300 dark:hover:border-purple-500 backdrop-blur-sm ${
                      hoveredItem === exp.id ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
                    }`}>
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === 'Research' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400' :
                            exp.type === 'Teaching' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400' :
                            exp.type === 'Industry' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                            'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400'
                          }`}>
                            {exp.type}
                          </span>
                          {exp.current && (
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 rounded-full text-xs font-medium animate-pulse">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 text-sm">
                          <span className="flex items-center gap-1">
                            <Building size={14} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mt-1">
                          <Calendar size={14} />
                          {exp.duration}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, idx) => (
                          <div 
                            key={idx}
                            className={`flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 transition-all duration-500 ${
                              itemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                            }`}
                            style={{ 
                              transitionDelay: `${(index * 100) + (idx * 50) + 200}ms`  // ✅ FIXED: Much faster
                            }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 animate-pulse"></span>
                            {highlight}
                          </div>
                        ))}
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-500 ${
                              itemVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                            }`}
                            style={{ 
                              transitionDelay: `${(index * 100) + (idx * 30) + 300}ms`  // ✅ FIXED: Faster
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
````

## File: package.json
````json
{
  "name": "portfolio-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^12.23.6",
    "lucide-react": "^0.525.0",
    "next": "15.4.2",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "tailwind-merge": "^3.3.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.11",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.20",
    "eslint": "^9",
    "eslint-config-next": "15.4.2",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5"
  }
}
````

## File: README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: postcss.config.mjs
````
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
````

## File: postcss.config.js
````javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: next.config.ts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
````

## File: eslint.config.mjs
````
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
````

## File: tailwind.config.js
````javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
````

