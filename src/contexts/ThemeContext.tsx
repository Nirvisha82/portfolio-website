'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Extend Window interface for TypeScript
declare global {
  interface Window {
    __theme?: Theme;
    __resolvedTheme?: 'light' | 'dark';
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Start with safe defaults that match server-side rendering
  const [theme, setTheme] = useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // Hydrate with actual values after mounting
  useEffect(() => {
    setMounted(true)
    
    if (typeof window !== 'undefined') {
      const actualTheme = window.__theme || 'system'
      const actualResolvedTheme = window.__resolvedTheme || 'light'
      
      setTheme(actualTheme)
      setResolvedTheme(actualResolvedTheme)
    }
  }, [])

  // Handle theme changes
  useEffect(() => {
    if (!mounted) return

    const updateTheme = () => {
      let newResolvedTheme: 'light' | 'dark'
      
      if (theme === 'light') {
        newResolvedTheme = 'light'
      } else if (theme === 'dark') {
        newResolvedTheme = 'dark'
      } else {
        // system
        newResolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      }
      
      setResolvedTheme(newResolvedTheme)
      
      // Apply to document
      const root = document.documentElement
      if (newResolvedTheme === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
      
      // Store in localStorage and window
      localStorage.setItem('theme', theme)
      window.__theme = theme
      window.__resolvedTheme = newResolvedTheme
    }

    updateTheme()

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemChange = () => {
      if (theme === 'system') {
        updateTheme()
      }
    }
    
    mediaQuery.addEventListener('change', handleSystemChange)
    return () => mediaQuery.removeEventListener('change', handleSystemChange)
  }, [theme, mounted])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
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