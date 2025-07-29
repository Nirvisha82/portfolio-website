'use client'
import { useState, useRef, useEffect } from 'react'
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react'

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const projects = [
    {
      id: 1,
      title: "AI Analytics Platform",
      description: "Real-time ML insights for business intelligence with predictive analytics powered by TensorFlow.",
      tech: ["Python", "TensorFlow", "FastAPI", "AWS"],
      category: "AI/ML",
      icon: "🤖",
      status: "Live Demo",
      complexity: "Advanced",
      accent: "purple"
    },
    {
      id: 2,
      title: "Microservices API",
      description: "Scalable e-commerce backend architecture with Docker containerization and Kubernetes orchestration.",
      tech: ["Node.js", "Docker", "Kubernetes", "Redis"],
      category: "Backend",
      icon: "⚡",
      status: "Production",
      complexity: "Expert",
      accent: "blue"
    },
    {
      id: 3,
      title: "Real-time Chat App",
      description: "Secure messaging application with end-to-end encryption and real-time file sharing capabilities.",
      tech: ["WebSocket", "React", "PostgreSQL"],
      category: "Full-Stack",
      icon: "💬",
      status: "GitHub",
      complexity: "Intermediate",
      accent: "cyan"
    },
    {
      id: 4,
      title: "Smart Dashboard",
      description: "Interactive data visualization platform with dynamic charts and comprehensive analytics reports.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      category: "Frontend",
      icon: "📊",
      status: "In Progress",
      complexity: "Advanced",
      accent: "indigo"
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

    // Scroll observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate projects one by one
          setTimeout(() => {
            projects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects(prev => [...prev, index])
              }, index * 200)
            })
          }, 300)
        }
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('projects')
    if (section) observer.observe(section)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
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

  if (!mounted) {
    return (
      <section id="projects" className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-200 dark:border-purple-800">
                <span className="animate-bounce">🚀</span>
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projects that showcase my journey
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From concept to code - here's how I bring ideas to life
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="animate-pulse">
                <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Fixed Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-purple-400 opacity-20 dark:opacity-40 rounded-full animate-float transition-all duration-1000 ${
              isVisible ? 'opacity-20 dark:opacity-40' : 'opacity-0'
            }`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: '6s',
              transitionDelay: isVisible ? `${particle.delay * 200}ms` : '0ms'
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header - NOW CONSISTENT */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-200 dark:border-purple-800">
              <span className="animate-bounce">🚀</span>
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects that showcase my journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From concept to code - here's how I bring ideas to life
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
                className={`group relative card-perspective transition-all duration-1000 ${
                  isProjectVisible 
                    ? 'opacity-100 translate-y-0 translate-x-0' 
                    : `opacity-0 translate-y-8 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{ transitionDelay: isProjectVisible ? '0ms' : `${index * 200}ms` }}
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

                  {/* Simple Floating Orbs (No Rotation) */}
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
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-xl border border-gray-200 dark:border-gray-700 transition-all duration-500 ${
                          hoveredProject === project.id 
                            ? 'rotate-12 scale-110 animate-pulse' 
                            : 'group-hover:rotate-12 group-hover:scale-110'
                        }`}>
                          {project.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-1 rounded-lg text-xs font-medium border transition-all duration-300 ${
                              project.accent === 'purple' 
                                ? 'border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
                                : project.accent === 'blue' 
                                ? 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                                : project.accent === 'cyan' 
                                ? 'border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400'
                                : 'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400'
                            }`}>
                              {project.category}
                            </span>
                            <span className={`px-2 py-1 rounded-lg text-xs font-medium transition-all duration-300 ${
                              project.complexity === 'Expert' 
                                ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                                : project.complexity === 'Advanced' 
                                ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400'
                                : 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                            }`}>
                              {project.complexity}
                            </span>
                          </div>
                          <h3 className={`text-lg font-bold transition-all duration-300 ${
                            hoveredProject === project.id
                              ? 'text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text'
                              : 'text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text'
                          }`}>
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className={`flex flex-col gap-2 transition-all duration-500 ${
                        hoveredProject === project.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                      }`}>
                        <button className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 group/btn">
                          <ExternalLink size={14} className="text-gray-600 dark:text-gray-400 group-hover/btn:text-purple-600 dark:group-hover/btn:text-purple-400" />
                        </button>
                        <button className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300 group/btn">
                          <Github size={14} className="text-gray-600 dark:text-gray-400 group-hover/btn:text-gray-800 dark:group-hover/btn:text-gray-200" />
                        </button>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Status */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live Demo' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                          :                         project.status === 'Production' 
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                          : project.status === 'GitHub' 
                          ? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          project.status === 'Live Demo' 
                            ? 'bg-green-500 animate-pulse'
                            : project.status === 'Production' 
                            ? 'bg-blue-500 animate-pulse'
                            : project.status === 'GitHub' 
                            ? 'bg-gray-500'
                            : 'bg-yellow-500 animate-pulse'
                        }`}></div>
                        {project.status}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-default ${
                            hoveredProject === project.id && isProjectVisible ? 'animate-bounce' : ''
                          } ${
                            isProjectVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                          }`}
                          style={{ 
                            animationDelay: `${techIndex * 100}ms`,
                            transitionDelay: isProjectVisible ? `${index * 200 + 300 + (techIndex * 50)}ms` : '0ms'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 py-3 rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group/btn overflow-hidden relative">
                      <span className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transition-opacity duration-500 ${
                        hoveredProject === project.id ? 'opacity-100' : 'opacity-0 group-hover/btn:opacity-100'
                      }`}></span>
                      <span className="relative z-10 flex items-center gap-2">
                        View Full Project
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