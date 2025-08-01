import type { Metadata } from "next";
import "./globals.css";
import { Providers } from '@/providers'

export const metadata: Metadata = {
  title: "Nirvisha Soni - Portfolio",
  description: "Computer Science student passionate about backend development and AI",
};
// Update your layout.tsx - add this script to the existing head section

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Your existing flash fix script */}
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

        {/* NEW: Safari-only purple tint fix that doesn't interfere with CSS */}
        <script dangerouslySetInnerHTML={{
          __html: `
            const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            
            if (isSafari) {
              function applySafariPurpleFix() {
                const isDark = document.documentElement.classList.contains('dark');
                if (isDark) {
                  // Only set the html background, don't touch body or pseudo-elements
                  document.documentElement.style.setProperty('background', '#1a1332', 'important');
                  document.documentElement.style.setProperty('background-color', '#1a1332', 'important');
                }
              }
              
              // Apply on theme changes
              const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                  if (mutation.attributeName === 'class') {
                    applySafariPurpleFix();
                  }
                });
              });
              
              observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['class']
              });
              
              // Apply immediately if already dark
              document.addEventListener('DOMContentLoaded', applySafariPurpleFix);
            }
          `
        }} />

        {/* Your existing style tag */}
        <style dangerouslySetInnerHTML={{
          __html: `
            * { transition: none !important; }
            html { color-scheme: light; }
            html.dark { color-scheme: dark; }
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