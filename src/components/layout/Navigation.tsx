// 'use client'
// import { useState, useEffect } from 'react'
// import { ThemeToggle } from '../ui/ThemeToggle'

// export function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//       isScrolled 
//         ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-purple-500/30' 
//         : 'bg-transparent'
//     }`}>
//       <div className="max-w-5xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Empty space for balance */}
//           <div className="w-12"></div>

//           {/* Center Navigation Links */}
//           <div className="flex items-center gap-8">
//             <a 
//               href="#" 
//               className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
//             >
//               Skills
//             </a>
            
//             <a 
//               href="#projects" 
//               className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
//             >
//               Projects
//             </a>
            
//             <a 
//               href="#experience" 
//               className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
//             >
//               Experience
//             </a>

//             <a 
//               href="#education" 
//               className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
//             >
//               Education
//             </a>
            
//             <a 
//               href="#contact" 
//               className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
//             >
//               Contact
//             </a>
//           </div>

//           {/* Theme Toggle */}
//           <ThemeToggle />
//         </div>
//       </div>
//     </nav>
//   )
// }






'use client'
import { useState, useEffect } from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsVisible(false)
      } else {
        // Scrolling up or at top
        setIsVisible(true)
      }
      
      setIsScrolled(currentScrollY > 20)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-purple-500/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Empty space for balance */}
          <div className="w-12"></div>

          {/* Center Navigation Links */}
          <div className="flex items-center gap-8">
            <a 
              href="#skills" 
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Projects
            </a>
            
            <a 
              href="#experience" 
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Experience
            </a>



            <a 
              href="#education" 
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Education
            </a>
            
            <a 
              href="#research" 
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              Research
            </a>
                        <a 
              href="#about" 
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-white transition-colors duration-300 font-medium"
            >
              About
            </a>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}