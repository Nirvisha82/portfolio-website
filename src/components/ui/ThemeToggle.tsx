'use client'
import { useTheme } from '@/contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
    >
      <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
        resolvedTheme === 'dark' ? 'translate-x-6' : 'translate-x-0'
      }`}>
        {resolvedTheme === 'dark' ? (
          <Moon size={10} className="text-purple-600" />
        ) : (
          <Sun size={10} className="text-yellow-500" />
        )}
      </div>
    </button>
  )
}