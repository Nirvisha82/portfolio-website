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
      description: "Driving R&D on an end-to-end RAG pipeline for the Hospital Digital Twin project using UF Shands data",
      highlights: [
        "Designing and implementing a personalized RAG pipeline to power a virtual clinical avatar",
        "Building a modular ingestion and indexing framework (CSV, DOCX, PDF, TXT, Images) with ChromaDB",
        "Integrating retrieval framework with web search for accurate, context-aware clinical support",
        "Implementing PHI redaction, hallucination detection, and HIPAA-aligned guardrails to ensure compliance"
      ],
      skills: ["Python", "LangChain", "FAISS", "ChromaDB", "HIPAA Compliance"],
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
      description: "Shadowing a senior developer under WiCSE’s program while contributing to workflow automation R&D",
      highlights: [
        "Building a GitHub automation bot in Go that streamlines issue-to-PR workflows through branch creation, PR templates, and reviewer assignment",
        "Implementing repository-wide governance checks (naming conventions, approvals, test requirements) to enforce standards",
        "Researching advanced features including flaky test detection and duplicate issue resolution, with planned extension to GitLab"
      ],
      skills: ["Go", "GitHub API", "CI/CD", "Software Automation"],
      logo: "/images/amex-logo.png",
      color: "from-indigo-500 to-purple-600"
   },

    {
      id: 3,
      title: "Graduate Student Assistant",
      company: "University of Florida",
      location: "Gainesville, FL", 
      duration: "January 2025 – May 2025",
      type: "Teaching Assistant",
      current: false,
      description: "Mentored students and automated grading workflows for COP5556 - Programming Language Principles by Dr. Alin Dobra",
      highlights: [
        "Mentored 200+ students on compiler design, regex, and type inference concepts",
        "Developed Python/JavaScript scripts to automate grading workflows,  reducing grading time by 80%",
        "Created standardized assignments and rubrics to enhance learning outcomes and streamline assessment"
      ],
      skills: ["Python", "JavaScript", "Teaching", "Automation"],
      logo: "/images/uf-logo-2.png",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 4,
      title: "Graduate Analyst",
      company: "Barclays",
      location: "Pune, India",
      duration: "July 2023 – July 2024",
      type: "Industry",
      current: false,
      description: "Developed serverless pipelines and automation frameworks for financial data processing",
      highlights: [
        "Wrote optimized SQL scripts for high-volume trade data auditing, ensuring regulatory compliance and reliable reporting",
        "Built AWS Lambda pipeline that reduced manual log analysis by 60% and enabled real-time trade verification",
        "Designed Python/Selenium automation framework reducing manual testing by 80% and improving precision by 25%"
      ],
      skills: ["SQL", "AWS Lambda", "Data Processing", "Financial Systems"],
      logo: "/images/barclays-logo.png",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 5,
      title: "Machine Learning Intern",
      company: "AlgoAnalytics Private Limited",
      location: "Pune, India",
      duration: "January 2023 – April 2023", 
      type: "Internship",
      current: false,
      description: "Developed ML models for financial news analysis and sentiment prediction",
      highlights: [
        "Implemented transformer-based models (T5, Pegasus) for financial news summarization, improving content clarity by 10% using ROUGE metrics",
        "Conducted topic modeling on 5,000+ financial articles using LDA and BERTopic to extract market-relevant investment themes",
        "Built sentiment analysis model correlating financial news with stock price movements, achieving 0.7 Pearson correlation through rolling window analysis"
      ],
      skills: ["Transformers", "T5", "Pegasus", "LDA", "BERTopic", "Financial Analysis"],
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