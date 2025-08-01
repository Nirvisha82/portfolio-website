'use client'
import { useState, useEffect } from 'react'

export function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // Fix hydration by only showing particles after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

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
      url: 'https://linkedin.com/in/nirvishasoni', // Replace with your LinkedIn
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Nirvisha82', // Replace with your GitHub
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=levmF9MAAAAJ&hl=en',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.847 14.582 15.085 15 12 15s-5.847-.418-6.758-1.231z"/>
          <path d="M6.5 15.5v3c0 2.485 2.239 4.5 5 4.5h1c2.761 0 5-2.015 5-4.5v-3l-5.5 2.5-5.5-2.5z"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-700'
    }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Fixed Floating particles - only render after mount */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 opacity-20 dark:opacity-40 rounded-full animate-float"
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

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Enhanced Brand Section with Social Links */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-3 animate-gradient">
                Nirvisha Soni
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Backend Developer & AI Engineer
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Passionate about creating scalable systems and AI-powered solutions.
              </p>
            </div>

            {/* Location with enhanced animation */}
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Gainesville, Florida, USA</span>
            </div>
          </div>

          {/* Enhanced Links with smooth scroll */}
          <div>

          </div>

          {/* Enhanced Contact - JUST REMOVED THE BUTTON */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse" style={{animationDelay: '0.5s'}}></span>
            </h4>
            <div className="space-y-4">
              <a href="mailto:nsoni@ufl.edu" className="group flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-md hover:scale-105">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm group-hover:rotate-12 transition-transform duration-300">
                  ✉️
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">nsoni@ufl.edu</p>
                </div>
              </a>
              
              {/* Social Icons in place of the removed button */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target={social.name !== 'Gmail' ? "_blank" : undefined}
                    rel={social.name !== 'Gmail' ? "noopener noreferrer" : undefined}
                    className={`group relative w-10 h-10 rounded-xl bg-gradient-to-r ${social.color} text-white flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:rotate-12 shadow-lg hover:shadow-xl`}
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
                    <div className={`absolute inset-0 rounded-xl bg-white/20 transition-opacity duration-300 ${
                      hoveredSocial === social.name ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    
                    {/* Floating tooltip */}
                    <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded transition-all duration-300 ${
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

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <span>© 2025 Nirvisha Soni. Made with</span>
              <span className="text-red-500 animate-pulse">♥</span>
              <span>and lots of coffee.</span>
              {/* <span className="animate-bounce">☕</span> */}
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
              <span>Built with</span>
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 hover:scale-105 transition-transform duration-300">Next.js</span>
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 hover:scale-105 transition-transform duration-300">TypeScript</span>
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300 hover:scale-105 transition-transform duration-300">Tailwind</span>
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