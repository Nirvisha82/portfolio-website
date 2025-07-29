'use client'
import { useState, useEffect } from 'react'

export function About() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="min-h-screen py-20 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/6 w-72 h-72 animate-breathe blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 50%)'
        }}></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 animate-breathe blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 50%)',
          animationDelay: '4s'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-200 dark:border-purple-800">
            <span className="animate-bounce">👨‍💻</span>
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get to know me better
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Building the future, one line of code at a time
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="relative group">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 p-8 aspect-square flex items-center justify-center">
                {/* Profile Image */}
                <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/images/nirvisha.png" 
                    alt="Nirvisha Soni - Profile" 
                    className="w-full h-full object-cover object-center"
                    onLoad={() => setImageLoaded(true)}
                    onError={(e) => {
                      // Fallback to gradient with initial if image fails to load
                      e.currentTarget.style.display = 'none'
                      const fallback = e.currentTarget.parentElement
                      if (fallback) {
                        fallback.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center text-white text-6xl font-bold">N</div>`
                      }
                    }}
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
              </div>
              
              {/* Floating Skills Badges */}
              <div className={`absolute -top-6 -right-6 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 animate-float transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">🚀 Backend Dev</span>
              </div>
              
              <div className={`absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 animate-float transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`} style={{ animationDelay: '1s' }}>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">🤖 AI Engineer</span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`order-1 lg:order-2 space-y-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Hey, I am Nirvisha!
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                A Computer Science student with a passion for backend development and artificial intelligence. I enjoy creating scalable systems that solve real-world problems and make a meaningful impact through innovative technology solutions.
                </p>
                <p>
                 When I'm not deep in coding projects, you'll find me exploring the latest AI research, experimenting with new technologies, or completely switching gears to indulge in my love for cooking. I enjoy exploring different cuisines and culinary experiences - from trying authentic regional dishes to experimenting with fusion flavors in my own kitchen.
                </p>
                <p>

                  I'm always eager to connect with new people and learn from their diverse perspectives. 
                  Currently seeking opportunities to apply my skills in <strong className="text-purple-600 dark:text-purple-400">backend development</strong> and 
                  <strong className="text-blue-600 dark:text-blue-400"> AI engineering</strong> roles where I can contribute to innovative projects.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className={`pt-4 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
<a 
  href="mailto:nsoni@ufl.edu"
  className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
>
  Let's work together →
</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}