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
            Get to know me better
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