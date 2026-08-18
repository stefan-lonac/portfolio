import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { siteConfig } from '@/data/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: `${siteConfig.name} — ${siteConfig.role}`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ['Stefan Lončarić', 'Full Stack Developer', 'React Developer', 'Angular Developer', 'TypeScript', 'WordPress Developer', 'PHP Developer', 'Serbia'],
  authors: [{ name: siteConfig.name, url: siteConfig.linkedin }],
  creator: siteConfig.name,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    images: [{ url: `${siteConfig.url}/images/stefan-loncaric.jpg`, width: 1200, height: 1200, alt: siteConfig.name }],
  },
  twitter: { card: 'summary_large_image', title: `${siteConfig.name} — ${siteConfig.role}`, description: siteConfig.description, images: [`${siteConfig.url}/images/stefan-loncaric.jpg`] },
  icons: { icon: [{ url: `${siteConfig.url}/favicon.ico` }, { url: `${siteConfig.url}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' }], apple: `${siteConfig.url}/apple-touch-icon.png` },
  manifest: `${siteConfig.url}/site.webmanifest`,
  robots: { index: true, follow: true },
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: [{ media: '(prefers-color-scheme: light)', color: '#f7f8fc' }, { media: '(prefers-color-scheme: dark)', color: '#080b14' }] }

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
