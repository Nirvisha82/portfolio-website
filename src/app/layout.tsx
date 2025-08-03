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
        {/* IMPROVED FLASH FIX - More aggressive Safari mobile fix */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = theme === 'dark' || (theme !== 'light' && prefersDark);
                
                const html = document.documentElement;
                
                if (isDark) {
                  html.classList.add('dark');
                  html.style.colorScheme = 'dark';
                } else {
                  html.classList.remove('dark');
                  html.style.colorScheme = 'light';
                }
                
                // Safari-specific mobile fix - force immediate background
                const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                
                if (isSafari && isMobile) {
                  if (isDark) {
                    document.body.style.background = 'linear-gradient(135deg, #0f0b27 0%, #1a1332 25%, #231944 50%, #1a1332 75%, #0f0b27 100%)';
                  } else {
                    document.body.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #f1f5f9 50%, #f8fafc 75%, #ffffff 100%)';
                  }
                }
              } catch (e) {
                // Fallback to light mode
                document.documentElement.classList.remove('dark');
                document.documentElement.style.colorScheme = 'light';
              }
            })();
          `
        }} />

        {/* Enhanced CSS to prevent flashing */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Prevent any flash of unstyled content */
            html { 
              color-scheme: light; 
              background: linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #f1f5f9 50%, #f8fafc 75%, #ffffff 100%);
            }
            html.dark { 
              color-scheme: dark; 
              background: linear-gradient(135deg, #0f0b27 0%, #1a1332 25%, #231944 50%, #1a1332 75%, #0f0b27 100%);
            }
            
            /* Disable transitions only during initial load */
            html.loading * { 
              transition: none !important; 
              animation-duration: 0s !important;
            }
            
            /* Ensure body inherits the background immediately */
            body {
              background: inherit;
              transition: background-color 0.3s ease;
            }
            
            /* Safari mobile specific fixes */
            @supports (-webkit-touch-callout: none) {
              html {
                -webkit-text-size-adjust: 100%;
                background-attachment: fixed;
              }
              
              body {
                -webkit-overflow-scrolling: touch;
                background-attachment: fixed;
              }
            }
          `
        }} />
        
        {/* Re-enable smooth animations after load - with longer delay for Safari */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.documentElement.classList.add('loading');
            
            function enableAnimations() {
              document.documentElement.classList.remove('loading');
            }
            
            // Longer delay for Safari mobile
            const isSafariMobile = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && /iPhone|iPad|iPod/i.test(navigator.userAgent);
            const delay = isSafariMobile ? 300 : 100;
            
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