export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Enhanced Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text mb-3">
                Nirvisha Soni
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Backend Developer & AI Engineer
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Passionate about creating scalable systems and AI-powered solutions.
              </p>
            </div>

            {/* Location with icon */}
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Gainesville, Florida, USA</span>
            </div>
          </div>

          {/* Enhanced Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></span>
            </h4>
            <div className="space-y-3">
              <a href="#about" className="group flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-purple-500 transition-colors"></span>
                About
              </a>
              <a href="#projects" className="group flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-purple-500 transition-colors"></span>
                Projects
              </a>
              <a href="#education" className="group flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-purple-500 transition-colors"></span>
                Education
              </a>
              <a href="#experience" className="group flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-purple-500 transition-colors"></span>
                Experience
              </a>
            </div>
          </div>

          {/* Enhanced Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 relative">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></span>
            </h4>
            <div className="space-y-4">
              <a href="mailto:nsoni@ufl.edu" className="group flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-all hover:shadow-md">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-sm">
                  ✉️
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">nsoni@ufl.edu</p>
                </div>
              </a>

              {/* CTA Button */}
              <a href="mailto:nsoni@ufl.edu" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Let's Work Together
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <span>© 2025 Nirvisha Soni. Made with</span>
              <span className="text-red-500 animate-pulse">♥</span>
              <span>and lots of coffee</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
              <span>Built with</span>
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">Next.js</span>
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">TypeScript</span>
              <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-300">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}