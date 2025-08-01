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
        {/* FLASH FIX - Apply dark mode immediately before any rendering */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const theme = localStorage.getItem('theme');
                const isDark = theme === 'dark' || (theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                
                if (isDark) {
                  document.documentElement.classList.add('dark');
                  
                  // Safari-specific fix (apply immediately)
                  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                  if (isSafari) {
                    document.documentElement.style.backgroundColor = '#1a1332';
                  }
                }
              } catch (e) {
                // Silent fail
              }
            })();
          `
        }} />

        {/* FIXED: Only disable transitions briefly, then re-enable */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html.loading * { 
              transition: none !important; 
              animation-duration: 0s !important;
            }
            html { color-scheme: light; }
            html.dark { color-scheme: dark; }
          `
        }} />
        
        {/* Re-enable smooth animations after initial load */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.documentElement.classList.add('loading');
            window.addEventListener('DOMContentLoaded', function() {
              setTimeout(function() {
                document.documentElement.classList.remove('loading');
              }, 100);
            });
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