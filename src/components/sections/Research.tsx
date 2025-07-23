'use client'
import { useState, useEffect } from 'react'
import { ExternalLink, Calendar, Users, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react'

export function Research() {
  const [currentPaper, setCurrentPaper] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [visiblePapers, setVisiblePapers] = useState<number[]>([])

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate papers one by one
          setTimeout(() => {
            publications.forEach((_, index) => {
              setTimeout(() => {
                setVisiblePapers(prev => [...prev, index])
              }, index * 200)
            })
          }, 300)
        }
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('research')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const publications = [
    {
      id: 1,
      title: "Advanced Neural Networks for RNA-Binding Protein Prediction",
      journal: "Nature Biotechnology",
      year: "2024",
      authors: "N. Sharma, X. Fan, et al.",
      description: "Novel deep learning approach for predicting RNA-binding protein sites using transformer-based models and achieving 92% accuracy.",
      tech: ["PyTorch", "Transformers", "Bioinformatics", "ESM3"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Scalable Microservices Architecture for Financial Data Processing",
      journal: "IEEE Transactions on Software Engineering",
      year: "2024",
      authors: "N. Sharma, A. Johnson, B. Chen",
      description: "Comprehensive framework for processing high-volume financial data using containerized microservices and achieving 60% performance improvement.",
      tech: ["Kubernetes", "Docker", "Apache Kafka", "MongoDB"],
      color: "from-purple-500 to-blue-600"
    },
    {
      id: 3,
      title: "Machine Learning Approaches for Financial News Sentiment Analysis",
      journal: "Journal of Financial Technology",
      year: "2023",
      authors: "N. Sharma, R. Patel, M. Kumar",
      description: "Comparative study of transformer models for financial sentiment analysis with novel preprocessing techniques and achieving 0.7 Pearson correlation.",
      tech: ["T5", "BERT", "Financial NLP", "Python"],
      color: "from-purple-500 to-cyan-600"
    },
    {
      id: 4,
      title: "Distributed Computing Framework for Real-time Data Analytics",
      journal: "ACM Transactions on Computer Systems",
      year: "2023",
      authors: "N. Sharma, K. Singh, L. Wang",
      description: "High-performance distributed computing system for processing streaming data with sub-millisecond latency and 99.9% availability.",
      tech: ["Apache Spark", "Kafka Streams", "Redis", "Elasticsearch"],
      color: "from-indigo-500 to-purple-600"
    }
  ]

  const handleNextPaper = () => {
    if (isFlipping) return
    setIsFlipping(true)
    
    setTimeout(() => {
      setCurrentPaper((prev) => (prev + 1) % publications.length)
      setIsFlipping(false)
    }, 400)
  }

  const handlePrevPaper = () => {
    if (isFlipping) return
    setIsFlipping(true)
    
    setTimeout(() => {
      setCurrentPaper((prev) => (prev - 1 + publications.length) % publications.length)
      setIsFlipping(false)
    }, 400)
  }

  const getPaperStyle = (index: number) => {
    // Calculate position relative to current paper (0 = top, 1 = second, etc.)
    const relativePosition = (index - currentPaper + publications.length) % publications.length
    const isItemVisible = visiblePapers.includes(index)
    
    return {
      transform: `
        translateY(${relativePosition * 8}px) 
        translateX(${relativePosition * 4}px) 
        rotateZ(${relativePosition * 2 - 3}deg)
        scale(${1 - relativePosition * 0.04})
      `,
      zIndex: 40 - relativePosition,
      opacity: isItemVisible ? (relativePosition < 4 ? 0.95 - relativePosition * 0.15 : 0) : 0,
      transitionProperty: 'transform, opacity, z-index',
      transitionDuration: '0.8s',
      transitionTimingFunction: 'ease-out',
      transitionDelay: isItemVisible ? `${index * 200}ms` : '0ms'
    }
  }

  return (
    <section id="research" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/6 w-80 h-80 bg-indigo-400/5 dark:bg-indigo-400/10 rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute bottom-1/4 left-1/6 w-96 h-96 bg-purple-400/5 dark:bg-purple-400/10 rounded-full blur-3xl animate-breathe" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium mb-4">
            📚 Research Contributions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Published Research Papers
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Flip through my collection of peer-reviewed research publications
          </p>
        </div>

        {/* Paper Stack Container */}
        <div className={`relative max-w-3xl mx-auto mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="relative h-[400px] perspective-1000">
            
            {/* Navigation Controls */}
            <div className={`absolute -left-12 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`} style={{ transitionDelay: '400ms' }}>
              <button
                onClick={handlePrevPaper}
                disabled={isFlipping}
                className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
                style={{
                  transform: 'scale(1)',
                  transitionProperty: 'transform',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <ChevronLeft size={16} className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
              </button>
            </div>

            <div className={`absolute -right-12 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`} style={{ transitionDelay: '400ms' }}>
              <button
                onClick={handleNextPaper}
                disabled={isFlipping}
                className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
                style={{
                  transform: 'scale(1)',
                  transitionProperty: 'transform',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <ChevronRight size={16} className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
              </button>
            </div>

            {/* Paper Stack */}
            {publications.map((paper, index) => (
              <div
                key={paper.id}
                className="absolute inset-0"
                style={getPaperStyle(index)}
              >
                {/* Paper Card */}
                <div className="w-full h-full bg-white dark:bg-gray-900 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                  
                  {/* Subtle gradient hover effect */}
                  <div 
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 pointer-events-none"
                    style={{
                      opacity: 0,
                      transitionProperty: 'opacity',
                      transitionDuration: '500ms',
                      transitionTimingFunction: 'ease-in-out'
                    }}
                  ></div>
                  
                  {/* Paper Content */}
                  <div className="p-6 relative z-10 h-full flex flex-col">
                    
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-gray-500" />
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{paper.year}</span>
                        </div>
                        <div className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-300">#{paper.id}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                        {paper.title}
                      </h3>
                      
                      <p className="text-sm font-medium text-purple-600 dark:text-purple-400 italic mb-2">
                        📰 {paper.journal}
                      </p>
                      
                      <div className="flex items-center gap-2">
                        <Users size={12} className="text-gray-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-300">{paper.authors}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="flex-1 mb-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs">
                        {paper.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-xs">
                        Technologies & Methods
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {paper.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700"
                            style={{
                              borderColor: 'rgb(209 213 219)',
                              transitionProperty: 'border-color',
                              transitionDuration: '300ms',
                              transitionTimingFunction: 'ease-in-out'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = 'rgb(196 181 253)' // purple-300
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = 'rgb(209 213 219)' // gray-300
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto">
                      <button 
                        className="w-full bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 py-2 rounded-lg font-semibold shadow-lg flex items-center justify-center gap-2 text-sm relative overflow-hidden group"
                        style={{
                          transform: 'scale(1)',
                          transitionProperty: 'transform',
                          transitionDuration: '300ms',
                          transitionTimingFunction: 'ease-in-out'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      >
                        <span 
                          className={`absolute inset-0 bg-gradient-to-r ${paper.color}`}
                          style={{
                            opacity: 0,
                            transitionProperty: 'opacity',
                            transitionDuration: '500ms',
                            transitionTimingFunction: 'ease-in-out'
                          }}
                        ></span>
                        <span className="relative z-10 flex items-center gap-2">
                          <BookOpen size={14} />
                          Read Full Paper
                          <ExternalLink size={12} />
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Paper Corner Fold Effect */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/40 to-transparent dark:from-black/20 transform rotate-45 translate-x-4 -translate-y-4"></div>
                </div>
              </div>
            ))}

            {/* Page Turn Effect Overlay */}
            {isFlipping && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-black/20 z-50 animate-pulse"></div>
            )}
          </div>
        </div>

        {/* Google Scholar Link */}
        <div 
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a 
            href="https://scholar.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            <BookOpen size={18} />
            View Complete Publications on Google Scholar
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-breathe {
          animation: breathe 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}