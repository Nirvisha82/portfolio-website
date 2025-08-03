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
        <style dangerouslySetInnerHTML={{
          __html: `
            html { 
              color-scheme: light;
              /* Fallback background for Safari mobile */
              background: linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #f1f5f9 50%, #f8fafc 75%, #ffffff 100%);
            }
            html.dark { 
              color-scheme: dark;
              /* Fallback background for Safari mobile */
              background: linear-gradient(135deg, #0f0b27 0%, #1a1332 25%, #231944 50%, #1a1332 75%, #0f0b27 100%);
            }
            
            /* Desktop: Let body background from globals.css handle it */
            @media (min-width: 768px) {
              html {
                background: transparent;
              }
            }
            
            /* Mobile: Force the background to show */
            @media (max-width: 767px) {
              html {
                background: linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #f1f5f9 50%, #f8fafc 75%, #ffffff 100%) !important;
              }
              html.dark {
                background: linear-gradient(135deg, #0f0b27 0%, #1a1332 25%, #231944 50%, #1a1332 75%, #0f0b27 100%) !important;
              }
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