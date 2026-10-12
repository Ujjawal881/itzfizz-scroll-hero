import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ITZFIZZ — Move with impact',
  description: 'A scroll-driven automotive hero experience built with Next.js, Tailwind CSS and GSAP ScrollTrigger.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
