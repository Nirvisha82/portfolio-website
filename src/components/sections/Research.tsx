'use client'
import { useState, useEffect } from 'react'
import { ExternalLink, Calendar, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react'

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
      title: "Comparative Analysis of LSTM, GRU and Transformer Models for German to English Language Translation",
      journal: "2023 3rd Asian Conference on Innovation in Technology (ASIANCON)",
      year: "2023",
      description: "Comprehensive comparative study evaluating Neural Machine Translation techniques using RNN-based LSTM, GRU models, and Transformer architecture. Trained on over 220K sentence pairs and evaluated using BLEU and ROUGE metrics. Results demonstrated that Transformers significantly outperformed RNN variants in translation fluency and contextual accuracy.",
      tech: ["Neural Machine Translation", "LSTM", "GRU", "Transformer", "BLEU", "ROUGE", "Sequence-to-Sequence"],
      color: "from-purple-500 to-indigo-600",
      url: "https://ieeexplore.ieee.org/document/10270018"
    },
    {
      id: 2,
      title: "Transformer-Based Text Summary Generation for Videos",
      journal: "2024 International Conference on Current Trends in Advanced Computing (ICCTAC)",
      year: "2024",
      description: "Novel Transformer-based pipeline for generating concise textual summaries from videos with frequent scene transitions. System identifies keyframes using clustering, extracts features via InceptionV3, and generates captions using Transformer encoder-decoder. Achieved BLEU-4 score of 52.17 and ROUGE-F1 score of 40.21.",
      tech: ["Video Summarization", "Transformer", "InceptionV3", "Keyframe Extraction", "Encoder-Decoder", "Clustering"],
      color: "from-purple-500 to-blue-600",
      url: "https://ieeexplore.ieee.org/abstract/document/10581200"
    },
    {
      id: 3,
      title: "A Semi-Supervised GAN Architecture for Video Classification",
      journal: "2022 IEEE International Conference on Advancements in Smart, Secure and Intelligent Computing (ASSIC)",
      year: "2023",
      description: "Innovative semi-supervised learning approach using modified MoCoGAN architecture for video classification with minimal labeled data. Discriminator performs dual tasks of distinguishing real/fake videos and classifying across six categories. Achieved over 62% accuracy with 50% labeled data, outperforming traditional supervised baselines.",
      tech: ["Semi-Supervised Learning", "GAN", "MoCoGAN", "Video Classification", "Adversarial Training", "Discriminator"],
      color: "from-purple-500 to-cyan-600",
      url: "https://ieeexplore.ieee.org/document/10074051"
    },
    {
      id: 4,
      title: "LearnEasy: A Learning Platform for Autistic Children",
      journal: "AIP Conference Proceedings",
      year: "2023",
      description: "Comprehensive dual-user web application designed for early Autism Spectrum Disorder diagnosis and personalized learning support. Utilizes AdaBoost and SVM models to predict autism severity levels. Features interactive emotion, sound, and audio-based quizzes tailored to individual severity levels with comprehensive progress tracking for caregivers.",
      tech: ["Autism Spectrum Disorder", "AdaBoost", "SVM", "Machine Learning", "Educational Technology", "Healthcare AI"],
      color: "from-indigo-500 to-purple-600",
      url: "https://pubs.aip.org/aip/acp/article-abstract/2981/1/020025/2929172/LearnEasy-A-learning-platform-for-autistic"
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
    
    // Mobile vs Desktop differences - Enhanced stacking effect
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    
    return {
      transform: `
        translateY(${relativePosition * (isMobile ? 8 : 8)}px) 
        translateX(${relativePosition * (isMobile ? 4 : 4)}px) 
        rotateZ(${relativePosition * (isMobile ? 2 : 2) - (isMobile ? 3 : 3)}deg)
        scale(${1 - relativePosition * (isMobile ? 0.04 : 0.04)})
      `,
      zIndex: 40 - relativePosition,
      opacity: isItemVisible ? (
        relativePosition === 0 ? 1 : // Current paper full opacity
        relativePosition === 1 ? (isMobile ? 0.4 : 0.3) : // Next paper (visible on mobile too)
        relativePosition === 2 ? (isMobile ? 0.2 : 0.15) : // Third paper (subtle visibility)
        relativePosition === 3 ? (isMobile ? 0.1 : 0.1) : // Fourth paper (very subtle)
        0 // All others hidden
      ) : 0,
      transitionProperty: 'transform, opacity, z-index',
      transitionDuration: '0.8s',
      transitionTimingFunction: 'ease-out',
      transitionDelay: isItemVisible ? `${index * 200}ms` : '0ms'
    }
  }

  return (
    <section id="research" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/6 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-400/5 dark:bg-indigo-400/10 rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute bottom-1/4 left-1/6 w-72 sm:w-96 h-72 sm:h-96 bg-purple-400/5 dark:bg-purple-400/10 rounded-full blur-3xl animate-breathe" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-6 sm:mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-4 border border-purple-200 dark:border-purple-800">
            <span className="animate-bounce">📚</span>
            Research Contributions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Published Research Papers
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Flip through my collection of peer-reviewed research publications
          </p>
        </div>

        {/* Paper Stack Container */}
        <div className={`relative max-w-full sm:max-w-3xl mx-auto mb-6 sm:mb-8 px-12 sm:px-0 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`} style={{ transitionDelay: '200ms' }}>
          <div className="relative h-[520px] sm:h-[400px] perspective-1000">
            
            {/* Navigation Controls - Properly positioned */}
            <div className={`absolute -left-12 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`} style={{ transitionDelay: '400ms' }}>
              <button
                onClick={handlePrevPaper}
                disabled={isFlipping}
                className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group hover:shadow-xl"
                style={{
                  transform: 'scale(1)',
                  transitionProperty: 'transform',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <ChevronLeft size={18} className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
              </button>
            </div>

            <div className={`absolute -right-12 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`} style={{ transitionDelay: '400ms' }}>
              <button
                onClick={handleNextPaper}
                disabled={isFlipping}
                className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group hover:shadow-xl"
                style={{
                  transform: 'scale(1)',
                  transitionProperty: 'transform',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <ChevronRight size={18} className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
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
                <div className="w-full h-full bg-white dark:bg-gray-900 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                  
                  {/* Paper Content */}
                  <div className="p-4 sm:p-6 relative z-10 h-full flex flex-col">
                    
                    {/* Header */}
                    <div className="mb-3 sm:mb-4">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar size={12} className="text-gray-500" />
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{paper.year}</span>
                        </div>
                        <div className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-300">#{paper.id}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight break-words">
                        {paper.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm font-medium text-purple-600 dark:text-purple-400 italic mb-2 break-words">
                        📰 {paper.journal}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="flex-1 mb-4 sm:mb-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-xs sm:text-sm break-words">
                        {paper.description}
                      </p>
                    </div>

                    {/* Keywords */}
                    <div className="mb-6 sm:mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-xs sm:text-sm">
                        Keywords
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-0">
                        {paper.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 break-words"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto">
                      <a 
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-gray-900 py-2 sm:py-3 rounded-lg font-semibold shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm relative overflow-hidden group transition-all duration-300 hover:scale-105"
                      >
                        <span 
                          className={`absolute inset-0 bg-gradient-to-r ${paper.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        ></span>
                        <span className="relative z-10 flex items-center gap-2">
                          <BookOpen size={12} />
                          Read Full Paper
                          <ExternalLink size={10} />
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Paper Corner Fold Effect */}
                  <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-bl from-white/40 to-transparent dark:from-black/20 transform rotate-45 translate-x-3 sm:translate-x-4 -translate-y-3 sm:-translate-y-4"></div>
                </div>
              </div>
            ))}

            {/* Page Turn Effect Overlay */}
            {isFlipping && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-black/20 z-50 animate-pulse"></div>
            )}
          </div>
        </div>

        {/* Navigation Dots - Mobile Only */}
        <div className={`flex justify-center gap-2 mb-6 sm:hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '500ms' }}>
          {publications.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isFlipping) {
                  setIsFlipping(true)
                  setTimeout(() => {
                    setCurrentPaper(index)
                    setIsFlipping(false)
                  }, 400)
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentPaper 
                  ? 'bg-purple-600 dark:bg-purple-400 w-6' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Google Scholar Link */}
        <div 
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a 
            href="https://scholar.google.com/citations?user=levmF9MAAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
          >
            {/* Google Scholar Icon */}
            <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
            </svg>
            Google Scholar Profile
            <ExternalLink size={14} />
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