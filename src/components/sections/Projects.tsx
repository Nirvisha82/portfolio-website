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

  if (!mounted) {
    return (
      <section id="projects" data-scroll-section className="py-20 px-6 relative overflow-hidden">
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
              From concept to code - here&apos;s how I bring ideas to life
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
            Projects that showcase my journey
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