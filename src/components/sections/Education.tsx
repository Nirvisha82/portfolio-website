'use client'
import { useState, useEffect } from 'react'
import { Calendar, MapPin, Users, BookOpen, Star, ChevronDown } from 'lucide-react'

export function Education() {
  const [activeScroll, setActiveScroll] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])

  const education = [
    {
      id: 1,
      degree: "Master of Science",
      field: "Computer Science",
      university: "University of Florida",
      location: "Gainesville, FL, USA",
      duration: "2024 - 2026",
      status: "In Progress",
      gpa: "3.94/4.0",
      highlights: [
        "Member - Women in Computer Science and Engineering (WiCSE), UF",

      ],
      relevantCourses: [
        "Advanced Data Structures", "Math for Intelligent Systems","Machine Learning", "Natural Language Processing", "Distributed Systems", "Software Engineering"
      ],
      color: "purple",
      logo: "UF"
    },
    {
      id: 2,
      degree: "Bachelor of Science", 
      field: "Information Technology",
      university: "Vishwakarma Institute of Technology",
      location: "Pune, Maharashtra, India", 
      duration: "2019 - 2023",
      status: "Completed",
      gpa: "9.62/10",
      highlights: [
        "Executive Committee Member - IEEE Student Branch, VIT",
        "Machine Learning Trainer - GedIT Coding Club, VIT",
        "Utkarsh Best Volunteer - Social Welfare and Development, VIT",
      ],
      relevantCourses: [
        "Data Structures", "Object Oriented Programming", "Design and Analysis of Algorithm", "Database Managment System", "Computer Architecture and Operating System","Cloud Computing",
        "Data  Communication  and  Networking",   "Artificial    Intelligence  ",  
         "Image Processing and CV", "Data Science" ,"System Programming" 
      ],
      color: "blue",
      logo: "VIT"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate education items one by one
          const timer = setTimeout(() => {
            education.forEach((_, index) => {
              const itemTimer = setTimeout(() => {
                setVisibleItems(prev => [...prev, index])
              }, index * 300)
              return () => clearTimeout(itemTimer)
            })
          }, 300)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('education')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
      observer.disconnect()
    }
  }, [education.length])

  const getUniversityLogo = (logo: string) => {
    if (logo === "UF") {
      return (
        <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200">
          <img 
            src="/images/uf-logo.png" 
            alt="University of Florida Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      )
    } else if (logo === "VIT") {
      return (
        <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200">
          <img 
            src="/images/vit-logo.png" 
            alt="Vishwakarma Institute of Technology Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      )
    }
    return null
  }

  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header - NOW CONSISTENT */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-200 dark:border-purple-800">
            <span className="animate-bounce">🎓</span>
            Academic Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education 
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Building knowledge through rigorous academic pursuit and continuous learning
          </p>
        </div>

        {/* Academic Scrolls */}
        <div className="space-y-8">
          {education.map((edu, index) => {
            const isItemVisible = visibleItems.includes(index)
            
            return (
              <div
                key={edu.id}
                className={`group relative transition-all duration-1000 ${
                  isItemVisible 
                    ? 'opacity-100 translate-y-0 translate-x-0' 
                    : `opacity-0 translate-y-8 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{ 
                  transitionDelay: isItemVisible ? '0ms' : `${index * 300}ms` 
                }}
                onMouseEnter={() => setActiveScroll(edu.id)}
                onMouseLeave={() => setActiveScroll(null)}
              >
                {/* Scroll Container */}
                <div className={`relative ${
                  edu.color === 'purple' 
                    ? 'bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-purple-200 dark:border-purple-800' 
                    : 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800'
                } rounded-2xl border-2 transition-all duration-700 hover:shadow-2xl ${
                  activeScroll === edu.id ? 'scale-102' : ''
                }`}>
                  
                  {/* Scroll Header */}
                  <div className="p-6 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* University Logo */}
                        <div className={`transition-all duration-500 ${
                          activeScroll === edu.id ? 'rotate-12 scale-110' : 'group-hover:rotate-6 group-hover:scale-105'
                        } ${
                          isItemVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}
                        style={{ 
                          transitionDelay: isItemVisible ? `${index * 300 + 200}ms` : '0ms' 
                        }}>
                          {getUniversityLogo(edu.logo)}
                        </div>

                        <div className={`transition-all duration-700 ${
                          isItemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                        style={{ 
                          transitionDelay: isItemVisible ? `${index * 300 + 400}ms` : '0ms' 
                        }}>
                          {/* Status Badge */}
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                              edu.status === 'Completed'
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                            } ${activeScroll === edu.id ? 'scale-110' : ''}`}>
                              {edu.status === 'Completed' ? '✅ Completed' : '🔄 In Progress'}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              <Calendar size={12} />
                              {edu.duration}
                            </span>
                          </div>

                          {/* Degree Info */}
                          <h3 className={`text-2xl font-bold transition-all duration-300 ${
                            activeScroll === edu.id
                              ? `text-transparent bg-gradient-to-r ${
                                  edu.color === 'purple' 
                                    ? 'from-purple-600 to-indigo-600' 
                                    : 'from-blue-600 to-cyan-600'
                                } bg-clip-text`
                              : 'text-gray-900 dark:text-white'
                          }`}>
                            {edu.degree}
                          </h3>
                          <p className={`text-lg font-medium ${
                            edu.color === 'purple' 
                              ? 'text-purple-600 dark:text-purple-400' 
                              : 'text-blue-600 dark:text-blue-400'
                          }`}>
                            {edu.field}
                          </p>
                          <div className="flex items-center gap-4 mt-1 text-gray-600 dark:text-gray-300">
                            <span className="flex items-center gap-1">
                              <BookOpen size={14} />
                              {edu.university}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {edu.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Expand Indicator */}
                      <div className={`transition-all duration-300 ${
                        activeScroll === edu.id ? 'rotate-180' : ''
                      } ${
                        isItemVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{ 
                        transitionDelay: isItemVisible ? `${index * 300 + 600}ms` : '0ms' 
                      }}>
                        <ChevronDown size={24} className={
                          edu.color === 'purple' ? 'text-purple-500' : 'text-blue-500'
                        } />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div className={`overflow-hidden transition-all duration-700 ease-out ${
                    activeScroll === edu.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      {/* Divider */}
                      <div className={`w-full h-px mb-6 ${
                        edu.color === 'purple'
                          ? 'bg-gradient-to-r from-transparent via-purple-300 to-transparent dark:via-purple-700'
                          : 'bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-blue-700'
                      }`}></div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div>
                          {/* GPA */}
                          <div className="flex items-center gap-2 mb-4">
                            <Star size={16} className={
                              edu.color === 'purple' ? 'text-purple-500' : 'text-blue-500'
                            } />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              <span className={`font-bold text-lg ${
                                edu.color === 'purple' ? 'text-purple-600 dark:text-purple-400' : 'text-blue-600 dark:text-blue-400'
                              }`}>GPA: {edu.gpa}</span>
                            </span>
                          </div>

                          {/* Activities */}
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                              <Users size={16} className={
                                edu.color === 'purple' ? 'text-purple-500' : 'text-blue-500'
                              } />
                              Activities
                            </h4>
                            <ul className="space-y-2">
                              {edu.highlights.map((highlight, idx) => (
                                <li 
                                  key={idx}
                                  className={`flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300 transition-all duration-300 ${
                                    activeScroll === edu.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                                  }`}
                                  style={{ 
                                    transitionDelay: activeScroll === edu.id ? `${idx * 100}ms` : '0ms'
                                  }}
                                >
                                  <span className={`w-1.5 h-1.5 rounded-full mt-2 animate-pulse ${
                                    edu.color === 'purple' ? 'bg-purple-400' : 'bg-blue-400'
                                  }`}></span>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Relevant Coursework
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevantCourses.map((course, idx) => (
                              <span
                                key={idx}
                                className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all duration-300 hover:scale-105 ${
                                  edu.color === 'purple'
                                    ? 'border-purple-200 bg-purple-100 text-purple-700 dark:border-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                                    : 'border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                                } ${
                                  activeScroll === edu.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                                }`}
                                style={{ 
                                  transitionDelay: activeScroll === edu.id ? `${idx * 50}ms` : '0ms'
                                }}
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner Elements */}
                  <div className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-500 ${
                    activeScroll === edu.id
                      ? `animate-ping ${edu.color === 'purple' ? 'bg-purple-400' : 'bg-blue-400'}`
                      : 'bg-gray-300 dark:bg-gray-600'
                  } ${
                    isItemVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isItemVisible ? `${index * 300 + 800}ms` : '0ms' 
                  }}></div>
                  
                  {/* Scroll-like rolled edges */}
                  <div className={`absolute top-0 left-0 w-6 h-full rounded-l-2xl opacity-20 transition-all duration-1000 ${
                    edu.color === 'purple'
                      ? 'bg-gradient-to-b from-purple-300 to-purple-400 dark:from-purple-700 dark:to-purple-800'
                      : 'bg-gradient-to-b from-blue-300 to-blue-400 dark:from-blue-700 dark:to-blue-800'
                  } ${
                    isItemVisible ? 'opacity-20' : 'opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isItemVisible ? `${index * 300 + 100}ms` : '0ms' 
                  }}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}