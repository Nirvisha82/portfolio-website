// src/components/theme-script.tsx
export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
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
              return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            
            const theme = getThemePreference();
            const resolvedTheme = getResolvedTheme(theme);
            
            if (resolvedTheme === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
            
            // Store for hydration
            window.__theme = theme;
            window.__resolvedTheme = resolvedTheme;
          })();
        `,
      }}
    />
  );
}