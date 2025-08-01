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
        <script src="/theme-script.js" async />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}