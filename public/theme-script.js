(function() {
  try {
    function getThemePreference() {
      if (typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem('theme');
        if (stored && ['light', 'dark', 'system'].includes(stored)) {
          return stored;
        }
      }
      return 'system';
    }
    
    function getResolvedTheme(theme) {
      if (theme === 'light') return 'light';
      if (theme === 'dark') return 'dark';
      // system
      if (typeof window !== 'undefined' && window.matchMedia) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      return 'light';
    }
    
    const theme = getThemePreference();
    const resolvedTheme = getResolvedTheme(theme);
    
    if (resolvedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (error) {
    // Fallback to light theme if anything fails
    document.documentElement.classList.remove('dark');
  }
})();