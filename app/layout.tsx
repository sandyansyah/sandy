import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sandyka Ardiansyah - Fullstack Developer & UI/UX Designer',
  description: 'Portfolio website of Sandyka Ardiansyah, a passionate Informatics student specializing in front-end development, UI/UX design, and innovative digital solutions.',
  keywords: 'Sandyka Ardiansyah, Fullstack Developer, UI/UX Designer, Web Developer, Informatika, Portfolio',
  authors: [{ name: 'Sandyka Ardiansyah' }],
  creator: 'Sandyka Ardiansyah',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.ico', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.sandykaa.com',
    siteName: 'Sandyka Portfolio',
    title: 'Sandyka Ardiansyah - Fullstack Developer & UI/UX Designer',
    description: 'Explore the portfolio of Sandyka Ardiansyah, showcasing innovative web development projects and creative UI/UX designs.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sandyka Ardiansyah Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sandyka Ardiansyah - Fullstack Developer',
    description: 'Portfolio website showcasing innovative web development projects',
    images: ['/og-image.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}