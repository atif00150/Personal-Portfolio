import type { Metadata } from 'next';
import { Lato, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeContext';

const lato = Lato({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato' 
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta' 
});

export const metadata: Metadata = {
  title: 'Muhammad Atif | Full Stack Developer & Software Engineer',
  description: 'Full Stack Developer crafting modern web applications, AI-powered tools and scalable solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-terracotta/20 selection:text-terracotta font-lato">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
