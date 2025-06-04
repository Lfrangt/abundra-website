import "./globals.css";
import type { Metadata } from "next";
import { LanguageProvider } from './contexts/LanguageContext';

export const metadata: Metadata = {
  title: "Abundra Capital Inc. - AI • Blockchain • Digital Capital",
  description: "Building the future with AI, Blockchain, and Digital Capital. Abundra Capital融合人工智能、区块链与数字资本的科技平台。",
  keywords: "AI, Blockchain, Digital Capital, Bitcoin, BTC, Cardano, Crypto, Investment, Technology",
  authors: [{ name: 'Abundra Capital Inc.' }],
  creator: 'Abundra Capital Inc.',
  publisher: 'Abundra Capital Inc.',
  metadataBase: new URL('https://abundra.com'),
  openGraph: {
    title: 'Abundra Capital Inc. - AI • Blockchain • Digital Capital',
    description: 'Building the future with AI, Blockchain, and Digital Capital',
    url: 'https://abundra.com',
    siteName: 'Abundra Capital',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abundra Capital Inc. - AI • Blockchain • Digital Capital',
    description: 'Building the future with AI, Blockchain, and Digital Capital',
    creator: '@AbundraCapital',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
