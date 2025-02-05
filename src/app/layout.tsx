import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'JobResume! - Free Resume Generator',
  description:
    'Create stunning, ATS-friendly resumes that capture attention and showcase your potential. Simple, elegant, and completely free Resume generator.',
  keywords:
    'Resume generator, resume builder, professional Resume, ats friendly resume, free Resume maker',
  authors: [{ name: 'Eren Dhoheiri' }],
  creator: 'Eren Dhoheiri',
  publisher: 'JobResume!',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://Resume-generator-app-sigma.vercel.app',
    title: 'JobResume! - Free Resume Generator',
    description:
      'Create stunning, ATS-friendly resumes that capture attention and showcase your potential. Simple, elegant, and completely free Resume generator.',
    siteName: 'JobResume!'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JobResume! - Professional Resume Generator',
    description:
      'Create stunning, ATS-friendly resumes that capture attention and showcase your potential. Simple, elegant, and completely free Resume generator.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
