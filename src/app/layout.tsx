import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { siteConfig } from '@/config/site'
import { env } from '@/lib/env'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})

// Busts the browsers' sticky favicon cache; bump whenever the icon artwork
// (public/icon-32x32.png / apple-icon.png, from scripts/generate-favicons.ps1)
// changes.
const faviconVersion = 2

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: [{ url: `/icon-32x32.png?v=${faviconVersion}`, sizes: '32x32', type: 'image/png' }],
    apple: `/apple-icon.png?v=${faviconVersion}`,
  },
}

// Applies the saved or OS-preferred theme class before first paint so there is
// no flash of the wrong theme; ThemeToggle keeps the class in sync afterwards.
const themeInitScript = `try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add(t)}catch(e){}`

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} bg-background`}
      // The theme boot script adds .light/.dark before hydration.
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <SiteHeader />
        {children}
        <SiteFooter />
        {env.isVercel && <Analytics />}
      </body>
    </html>
  )
}
