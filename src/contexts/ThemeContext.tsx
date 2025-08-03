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