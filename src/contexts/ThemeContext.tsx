'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  // Helper function to get stored theme
  const getStoredTheme = (): Theme => {
    if (typeof window === 'undefined') return 'system'
    
    try {
      const stored = localStorage.getItem('theme')
      if (stored && ['light', 'dark', 'system'].includes(stored)) {
        return stored as Theme
      }
    } catch (error) {
      console.warn('Failed to read theme from localStorage:', error)
    }
    return 'system'
  }

  // Helper function to resolve theme
  const resolveTheme = (themeToResolve: Theme): 'light' | 'dark' => {
    if (themeToResolve === 'light') return 'light'
    if (themeToResolve === 'dark') return 'dark'
    
    // For system preference
    if (typeof window !== 'undefined') {
      try {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      } catch (error) {
        console.warn('Failed to check system theme preference:', error)
      }
    }
    return 'light'
  }

  // Helper function to apply theme to document
  const applyThemeToDocument = (resolvedTheme: 'light' | 'dark') => {
    try {
      const root = document.documentElement
      if (resolvedTheme === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    } catch (error) {
      console.warn('Failed to apply theme to document:', error)
    }
  }

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true)
    
    // Get initial theme from localStorage or system preference
    const initialTheme = getStoredTheme()
    const initialResolvedTheme = resolveTheme(initialTheme)
    
    setTheme(initialTheme)
    setResolvedTheme(initialResolvedTheme)
    
    // Apply theme immediately to prevent flash
    applyThemeToDocument(initialResolvedTheme)
  }, [])

  // Handle theme changes
  useEffect(() => {
    if (!mounted) return

    const newResolvedTheme = resolveTheme(theme)
    setResolvedTheme(newResolvedTheme)
    applyThemeToDocument(newResolvedTheme)
    
    // Store in localStorage
    try {
      localStorage.setItem('theme', theme)
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error)
    }
  }, [theme, mounted])

  // Listen for system preference changes
  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleSystemChange = () => {
      if (theme === 'system') {
        const newResolvedTheme = resolveTheme('system')
        setResolvedTheme(newResolvedTheme)
        applyThemeToDocument(newResolvedTheme)
      }
    }
    
    try {
      mediaQuery.addEventListener('change', handleSystemChange)
      return () => mediaQuery.removeEventListener('change', handleSystemChange)
    } catch (error) {
      // Fallback for older browsers
      console.warn('MediaQuery addEventListener not supported, using addListener fallback')
      const addListener = mediaQuery.addListener || mediaQuery.addEventListener
      const removeListener = mediaQuery.removeListener || mediaQuery.removeEventListener
      
      if (addListener && removeListener) {
        addListener.call(mediaQuery, handleSystemChange)
        return () => removeListener.call(mediaQuery, handleSystemChange)
      }
    }
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