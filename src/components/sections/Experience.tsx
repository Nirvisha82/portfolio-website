'use client'
import { useState, useEffect } from 'react'
import { Calendar, MapPin, Building } from 'lucide-react'

// Import the unified hook (you'll need to create this file)
// import { useStaggeredAnimation } from '@/hooks/useScrollAnimation'

// Temporary inline hook for this example - replace with import above
function useStaggeredAnimation(itemCount: number) {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Start staggered animation immediately when visible
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i])
            }, i * 100) // ✅ FIXED: Faster stagger (was 150ms)
          }
        }
        // Remove the else clause to prevent disappearing
      },
      { 
        threshold: 0.15, // ✅ FIXED: Much lower threshold for earlier trigger
        rootMargin: '0px 0px 100px 0px' // ✅ FIXED: Positive margin triggers 100px BEFORE entering viewport
      }
    )

    const section = document.getElementById('experience')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [itemCount])

  return { isVisible, visibleItems }
}

export function Experience() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  
  const experiences = [
    {
      id: 1,
      title: "AI Software Developer",
      company: "UF IC3 - University of Florida",
      location: "Gainesville, FL",
      duration: "Aug 2025 – Present",
      type: "Applied AI Engineering",
      current: true,
      description: "Developing an agentic, multimodal RAG pipeline for UF Shands Digital Twin project",
      highlights: [
        "Architected RAG pipeline processing 20K+ clinical documents with cross-modal reasoning (text, images, tables)",
        "Built hybrid retrieval system combining vector search + external knowledge, boosting clinical query accuracy by 30%",
        "Implemented HIPAA-compliant guardrails with PHI redaction and hallucination detection",
        "Developed automated tests to validate retrieval accuracy and cut query latency by 20%"
      ],
      skills: ["Python", "LangChain", "Vector Databases", "LLMs", "HIPAA Compliance"],
      logo: "/images/ic3-logo.png",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      title: "Software Engineer Apprentice",
      company: "American Express",
      location: "Florida",
      duration: "Aug 2025 – Present",
      type: "Apprenticeship",
      current: true,
      description: "Building a GitHub automation app to streamline enterprise development workflows",
      highlights: [
        "Built GitHub App in Go that auto-creates branches, generates PR templates, and suggests file changes, saving 40% developer setup time",
        "Designed repo-aware LLM workflow integrating static analysis + embeddings to identify impacted files and propose precise code modifications",
        "Implemented end-to-end issue→branch→PR pipeline, cutting issue-to-PR turnaround by 25%"
      ],
      skills: ["Go", "GitHub API", "CI/CD", "LLMs", "Developer Productivity"],
      logo: "/images/amex-logo.png",
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 3,
      title: "Graduate Analyst",
      company: "Barclays",
      location: "Pune, India",
      duration: "July 2023 – July 2024",
      type: "Industry",
      current: false,
      description: "Delivered backend microservices and data pipelines for global trading systems",
      highlights: [
        "Built Spring Boot microservices for trading platform processing $2B+ daily transactions with 99.9% uptime",
        "Developed REST APIs integrating live market data, achieving sub-millisecond latency and reducing order errors by 15%",
        "Implemented Azure Event Hubs + Kafka pipelines, cutting reporting time by 20% and improving trader insights",
        "Automated post-trade validation with AWS Lambda workflows, reducing manual intervention by 60%"
      ],
      skills: ["Java", "Spring Boot", "REST APIs", "Kafka", "AWS Lambda", "Azure Event Hubs"],
      logo: "/images/barclays-logo.png",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Machine Learning Intern",
      company: "AlgoAnalytics Private Limited",
      location: "Pune, India",
      duration: "Jan 2023 – Apr 2023",
      type: "Internship",
      current: false,
      description: "Built NLP models for topic modeling, summarization, and sentiment prediction on financial data",
      highlights: [
        "Conducted topic modeling on 5K+ financial articles, enabling production topic-based search",
        "Developed transformer-based summarization models, improving content clarity by 10%",
        "Built sentiment analysis model correlating financial news with stock movements (Pearson r = 0.7)"
      ],
      skills: ["Transformers", "NLP", "Topic Modeling", "Summarization", "Sentiment Analysis"],
      logo: "/images/algoanalytics-logo.png",
      color: "from-orange-500 to-red-600"
    }
  ]

  const { isVisible, visibleItems } = useStaggeredAnimation(experiences.length)

  return (
    <section id="experience" data-scroll-section className="py-12 sm:py-16 lg:py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-200 dark:border-purple-800">
            <span className="animate-bounce">💼</span>
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Growth
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From research labs to industry - building expertise through diverse challenges
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 via-green-400 to-orange-400 transform md:-translate-x-1/2 transition-all duration-1000 delay-200 origin-top ${
            isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0
              const itemVisible = visibleItems.includes(index)
              
              return (
                <div
                  key={exp.id}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row transition-all duration-700 ease-out ${
                    itemVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`  // ✅ FIXED: Faster (was 150ms)
                  }}
                  onMouseEnter={() => setHoveredItem(exp.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Timeline Node with Company Logo */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full bg-white dark:bg-gray-900 shadow-lg border-4 border-white dark:border-gray-900 flex items-center justify-center transition-all duration-500 overflow-hidden ${
                      hoveredItem === exp.id ? 'scale-125 rotate-12' : itemVisible ? 'scale-100' : 'scale-75'
                    }`}>
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const fallback = e.currentTarget.parentElement
                          if (fallback) {
                            fallback.innerHTML = `<div class="w-10 h-10 bg-gradient-to-br ${exp.color} rounded-lg flex items-center justify-center text-white font-bold text-lg">${exp.company.charAt(0)}</div>`
                          }
                        }}
                      />
                      
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} opacity-10 transition-opacity duration-300 ${
                        hoveredItem === exp.id ? 'opacity-20' : ''
                      }`}></div>
                    </div>
                    
                    {/* Pulse Ring for Current Position */}
                    {exp.current && itemVisible && (
                      <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className={`bg-white dark:bg-gray-900/80 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:border-purple-300 dark:hover:border-purple-500 backdrop-blur-sm ${
                      hoveredItem === exp.id ? 'scale-105 shadow-2xl' : 'hover:shadow-xl'
                    }`}>
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.type === 'Research' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400' :
                            exp.type === 'Teaching' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400' :
                            exp.type === 'Industry' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                            'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400'
                          }`}>
                            {exp.type}
                          </span>
                          {exp.current && (
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 rounded-full text-xs font-medium animate-pulse">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 text-sm">
                          <span className="flex items-center gap-1">
                            <Building size={14} />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm mt-1">
                          <Calendar size={14} />
                          {exp.duration}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, idx) => (
                          <div 
                            key={idx}
                            className={`flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 transition-all duration-500 ${
                              itemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                            }`}
                            style={{ 
                              transitionDelay: `${(index * 100) + (idx * 50) + 200}ms`  // ✅ FIXED: Much faster
                            }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 animate-pulse"></span>
                            {highlight}
                          </div>
                        ))}
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-500 ${
                              itemVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                            }`}
                            style={{ 
                              transitionDelay: `${(index * 100) + (idx * 30) + 300}ms`  // ✅ FIXED: Faster
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}