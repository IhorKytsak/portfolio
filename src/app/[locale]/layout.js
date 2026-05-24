import { Montserrat } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { HtmlLang } from '@/components/HtmlLang'
import { NavBar } from '@/components/navigation'
import '@/styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  description:
    'Discover my full-stack development expertise in building modern, scalable web applications.',
  keywords:
    'full-stack developer, web development, React, Node.js, JavaScript, portfolio, back-end developer, front-end developer, Ihor Kytsak, developer',
  authors: [{ name: 'Ihor Kytsak' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params

  if (!routing.locales.includes(locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <>
      <HtmlLang locale={locale} />
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          {children}
        </NextIntlClientProvider>
      </main>
    </>
  )
}
