import type { Metadata } from "next";
import "./globals.css";
import { Providers } from '@/providers'

export const metadata: Metadata = {
  title: "Nirvisha Soni - Portfolio",
  description: "Computer Science student passionate about backend development and AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <head>

{/* Favicon */}
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%236d28d9'/><stop offset='100%' stop-color='%232563eb'/></linearGradient></defs><rect width='32' height='32' rx='6' fill='url(%23g)'/><text x='16' y='22' text-anchor='middle' fill='white' font-family='Arial,sans-serif' font-size='18' font-weight='bold'>N</text></svg>" />
        
        
        {/* SINGLE UNIFIED SCRIPT - Dark Mode First + Safari Fix */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const theme = localStorage.getItem('theme');
                
                // If they have a saved preference, use it (returning user)
                if (theme === 'light' || theme === 'dark') {
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } else {
                  // First-time visitor - always start with dark mode
                  document.documentElement.classList.add('dark');
                }
                
                // Safari-specific fixes (both mobile and desktop)
                const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                const isMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                
                if (isSafari) {
                  const isDark = theme === 'dark' || !theme; // Default to dark for new users
                  if (isDark) {
                    document.documentElement.style.background = 'linear-gradient(135deg, #0f0b27 0%, #1a1332 25%, #231944 50%, #1a1332 75%, #0f0b27 100%)';
                  } else {
                    document.documentElement.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #f1f5f9 50%, #f8fafc 75%, #ffffff 100%)';
                  }
                }
              } catch (e) {
                // Fallback to dark mode for new users
                document.documentElement.classList.add('dark');
              }
            })();
          `
        }} />

        {/* CSS Styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html { 
              color-scheme: light;
            }
            html.dark { 
              color-scheme: dark;
            }
            
            html.loading * { 
              transition: none !important; 
              animation-duration: 0s !important;
            }
          `
        }} />
        
        {/* Animation Re-enabler */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.documentElement.classList.add('loading');
            
            function enableAnimations() {
              document.documentElement.classList.remove('loading');
            }
            
            // Longer delay for Safari
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            const delay = isSafari ? 200 : 100;
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', function() {
                setTimeout(enableAnimations, delay);
              });
            } else {
              setTimeout(enableAnimations, delay);
            }
          `
        }} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}