import { type Metadata, type Viewport } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'
import Script from 'next/script'

import { Providers } from '@/app/providers'
import Garlands from '@/components/Garlands'
import { Analytics } from "@vercel/analytics/next"
import { PlausibleAnalytics } from '@/components/PlausibleAnalytics'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const monaSans = localFont({
  src: '../fonts/Mona-Sans.var.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
  weight: '200 900',
})

const siteUrl = 'https://square.lndevui.com'
const siteName = 'Square UI'
const defaultTitle = 'Square UI — Open-source shadcn/ui layouts and templates'
const defaultDescription =
  'A growing collection of beautifully crafted open-source layouts and templates built with Next.js, Tailwind CSS and shadcn/ui — copy, paste, and ship faster.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: `%s | ${siteName} by lndev-ui`,
    default: defaultTitle,
  },
  description: defaultDescription,
  applicationName: siteName,
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${siteUrl}/banner.png`,
        width: 2560,
        height: 1440,
        alt: defaultTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ln_dev7',
    creator: '@ln_dev7',
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${siteUrl}/banner.png`,
        width: 2560,
        height: 1440,
        alt: siteName,
      },
    ],
  },
  authors: [{ name: 'Leonel NGOYA', url: 'https://lndev.me/' }],
  creator: 'Leonel NGOYA',
  publisher: 'Leonel NGOYA',
  keywords: [
    'shadcn ui',
    'shadcn templates',
    'shadcn layouts',
    'next.js templates',
    'tailwind css templates',
    'react ui kit',
    'dashboard template',
    'open source ui',
    'square ui',
    'lndev',
    'lndev-ui',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
  ],
  width: 'device-width',
  initialScale: 1,
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  inLanguage: 'en',
  publisher: {
    '@type': 'Person',
    name: 'Leonel NGOYA',
    url: 'https://lndev.me/',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  founder: {
    '@type': 'Person',
    name: 'Leonel NGOYA',
    url: 'https://lndev.me/',
  },
  sameAs: ['https://x.com/ln_dev7', 'https://github.com/ln-dev7', 'https://lndev.me/'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, monaSans.variable)}
      suppressHydrationWarning
    >
      <head>
        <PlausibleAnalytics />
      </head>
      <body className="flex min-h-full flex-col bg-white dark:bg-gray-950">
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Providers>{children}</Providers>
        <Garlands />
        <Analytics />
      </body>
    </html>
  )
}
