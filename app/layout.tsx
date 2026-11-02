import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://grishisachdeva.github.io'),
  title: 'Grishi Sachdeva | AI Engineer & Full-Stack Developer',
  description:
    'Portfolio of Grishi Sachdeva — B.Tech Artificial Intelligence & Data Science student, Founder of GlowBerry (500+ orders), Chrome MV3 Extension builder, and Deep Learning researcher.',
  keywords: [
    'Grishi Sachdeva',
    'AI Engineer',
    'Full Stack Developer',
    'Glowberry',
    'Context Bridge',
    'Audio Deepfake Detector',
    'Chessio',
    'PyTorch',
    'React',
    'Next.js',
    'Chrome Extension',
  ],
  authors: [{ name: 'Grishi Sachdeva' }],
  icons: {
    icon: '/assets/avatar.jpg',
  },
  openGraph: {
    title: 'Grishi Sachdeva | AI Engineer & Full-Stack Developer',
    description:
      'Explore projects in Deep Learning, Multi-AI Chrome Extensions, and E-Commerce. Founder of GlowBerry.',
    type: 'website',
    url: 'https://grishisachdeva.github.io/',
    images: ['/assets/avatar.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
