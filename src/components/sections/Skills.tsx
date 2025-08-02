'use client'
import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'

// Unified scroll animation hook
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleCategories, setVisibleCategories] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Stagger category animations
          setTimeout(() => setVisibleCategories([0]), 200)
          setTimeout(() => setVisibleCategories([0, 1]), 350)
          setTimeout(() => setVisibleCategories([0, 1, 2]), 500)
          setTimeout(() => setVisibleCategories([0, 1, 2, 3]), 650)
        }
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const section = document.getElementById('skills')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return { isVisible, visibleCategories }
}

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const { isVisible, visibleCategories } = useScrollAnimation()

  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      borderColor: "from-blue-500 via-purple-500 to-blue-500",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", delay: 0 },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", delay: 50 },
        { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", delay: 100 },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", delay: 150 },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", delay: 200 },
        { name: "C", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1853px-C_Programming_Language.svg.png", delay: 250 }
      ]
    },
    {
      title: "Frameworks",
      icon: "⚛️",
      borderColor: "from-cyan-500 via-blue-500 to-cyan-500",
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", delay: 300 },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", delay: 350 },
        { name: "LlamaIndex", logo: "https://avatars.githubusercontent.com/u/130722866?s=200&v=4", delay: 400 },
        { name: "Langchain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4", delay: 450 },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", delay: 500 },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", delay: 550 }
      ]
    },
    {
      title: "AI/ML",
      icon: "🤖",
      borderColor: "from-purple-500 via-pink-500 to-purple-500",
      skills: [
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", delay: 600 },
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", delay: 650 },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", delay: 700 },
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", delay: 750 },
        { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", delay: 800 },
        { name: "Weights & Biases", logo: "https://logo.clearbit.com/wandb.ai", delay: 850 }
      ]
    },
    {
      title: "Cloud & Databases",
      icon: "☁️",
      borderColor: "from-green-500 via-emerald-500 to-green-500",
      skills: [
        { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", delay: 900 },
        { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", delay: 950 },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", delay: 1000 },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", delay: 1050 },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", delay: 1100 },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", delay: 1150 }
      ]
    }
  ]

  return (
    <section id="skills" data-scroll-section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-200 dark:border-purple-800">
            <span className="animate-bounce">💻</span>
            Technical Arsenal
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Core technologies organized by expertise area
          </p>
        </div>

        {/* 4 Skills Categories with Animated Borders */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const isCategoryVisible = visibleCategories.includes(categoryIndex)
            
            return (
              <div
                key={category.title}
                className={`relative group bg-white dark:bg-gray-900/50 rounded-2xl p-4 backdrop-blur-sm transition-all duration-700 ease-out overflow-hidden ${
                  isCategoryVisible
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${categoryIndex * 150}ms`
                }}
              >
                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.borderColor} p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r ${category.borderColor} opacity-30 animate-pulse"></div>
                  <div className="w-full h-full bg-white dark:bg-gray-900/90 rounded-2xl"></div>
                </div>

                {/* Tracing Light Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.borderColor} animate-spin-slow opacity-20`}
                       style={{
                         background: `conic-gradient(from 0deg, transparent, transparent, rgba(139, 92, 246, 0.8), transparent, transparent)`,
                         animation: 'rotate 3s linear infinite'
                       }}>
                  </div>
                </div>

                {/* Static Border */}
                <div className="absolute inset-0 rounded-2xl border border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-colors duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className={`text-center mb-4 transition-all duration-500 ${
                    isCategoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ 
                    transitionDelay: `${categoryIndex * 150 + 200}ms`
                  }}>
                    <div className="text-2xl mb-2 group-hover:animate-bounce transition-all duration-300">{category.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills in Category */}
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`group/skill relative bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3 border border-gray-100 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 cursor-pointer ${
                          hoveredSkill === skill.name ? 'scale-110 shadow-lg' : 'hover:scale-105'
                        } ${
                          isCategoryVisible
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                        style={{ 
                          transitionDelay: `${categoryIndex * 150 + 300 + (skillIndex * 50)}ms`
                        }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Skill Logo */}
                        <div className={`w-8 h-8 mb-2 mx-auto transition-all duration-300 ${
                          hoveredSkill === skill.name ? 'rotate-12 scale-110' : 'group-hover/skill:rotate-6'
                        }`}>
                          <img 
                            src={skill.logo} 
                            alt={skill.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                              e.currentTarget.parentElement!.innerHTML = `<div class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold text-xs">${skill.name.slice(0,2)}</div>`
                            }}
                          />
                        </div>

                        {/* Skill Name */}
                        <div className="text-center">
                          <h4 className="font-medium text-gray-900 dark:text-white text-xs leading-tight">
                            {skill.name}
                          </h4>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.borderColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}></div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: rotate 3s linear infinite;
        }
      `}</style>
    </section>
  )
}