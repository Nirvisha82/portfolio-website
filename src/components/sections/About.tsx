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

  const skills = [
    { category: "Backend", items: ["Python", "Node.js", "Java", "Express.js"] },
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
  ]

  return (
    <section id="about" className="min-h-screen py-20 px-6 relative">
      {/* Background Elements for Dark Mode */}
{/* Breathing Gradient Effect */}
{/* Breathing Gradient Effect */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-1/3 left-1/6 w-72 h-72 animate-breathe blur-3xl" style={{
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 50%)'
  }}></div>
  <div className="absolute bottom-1/3 right-1/6 w-96 h-96 animate-breathe blur-3xl" style={{
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 50%)',
    animationDelay: '4s'
  }}></div>
</div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get to know me better
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about turning complex problems into elegant solutions through code
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
                {/* Placeholder for now - you'll replace this with your actual image */}
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  N
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
                Building the future, one line of code at a time
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a Computer Science student with a passion for backend development and artificial intelligence. 
                  I love creating scalable systems that solve real-world problems and make a meaningful impact.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest AI research, contributing to open-source projects, 
                  or experimenting with new technologies. I believe in continuous learning and pushing the boundaries of what's possible.
                </p>
                <p>
                  Currently seeking opportunities to apply my skills in <strong className="text-purple-600 dark:text-purple-400">backend development</strong> and 
                  <strong className="text-blue-600 dark:text-blue-400"> AI engineering</strong> roles where I can contribute to innovative projects.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skillGroup, index) => (
                <div 
                  key={skillGroup.category}
                  className={`bg-white/50 dark:bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${800 + index * 100}ms` : '0ms'
                  }}
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {skillGroup.items.map((skill) => (
                      <span 
                        key={skill}
                        className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className={`pt-4 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Let's work together →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}