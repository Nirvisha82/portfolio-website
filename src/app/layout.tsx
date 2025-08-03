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
        {/* MINIMAL Safari fix - just CSS */}
        {/* COMPLETE FIX - Constellation + Safari Mobile */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const theme = localStorage.getItem('theme');
                const isDark = theme === 'dark' || (theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                
                if (isDark) {
                  document.documentElement.classList.add('dark');
                }
                
                // ONLY Safari mobile gets forced background
                const isSafariMobile = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && /iPhone|iPad|iPod/i.test(navigator.userAgent);
                
                if (isSafariMobile) {
                  if (isDark) {
                    document.documentElement.style.background = 'linear-gradient(135deg, #0f0b27 0%, #1a1332 25%, #231944 50%, #1a1332 75%, #0f0b27 100%)';
                  } else {
                    document.documentElement.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #f1f5f9 50%, #f8fafc 75%, #ffffff 100%)';
                  }
                }
              } catch (e) {
                // Silent fail
              }
            })();
          `
        }} />

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

        {/* Keep your original theme detection script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const theme = localStorage.getItem('theme');
                const isDark = theme === 'dark' || (theme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
                
                if (isDark) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                // Silent fail
              }
            })();
          `
        }} />
        
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