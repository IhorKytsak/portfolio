import Head from 'next/head'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { IntlProvider } from 'react-intl'
import en from '../i18n/en.json'
import uk from '../i18n/uk.json'
import { Montserrat } from 'next/font/google'
import '@/styles/globals.css'

import { NavBar } from '@/components/navigation'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

const messages = {
  en,
  uk,
}

export const flattenMessages = (nestedMessages, prefix = '') => {
  if (nestedMessages === null) {
    return {}
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value })
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
}

function getDirection(locale) {
  return 'Itr'
}

export default function App({ Component, pageProps }) {
  const { locale, asPath } = useRouter()

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Discover my full-stack development expertise in building modern, scalable web applications.'
        />
        <meta
          name='keywords'
          content='full-stack developer, web development, React, Node.js, JavaScript, portfolio, back-end developer, front-end developer, Ihor Kytsak, developer'
        />

        <meta name='author' content='Ihor Kytsak' />

        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link
          rel='icon'
          href='/favicon-16x16.png'
          sizes='16x16'
          type='image/png'
        />
        <link
          rel='icon'
          href='/favicon-32x32.png'
          sizes='32x32'
          type='image/png'
        />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link
          rel='icon'
          href='/android-chrome-192x192.png'
          sizes='192x192'
          type='image/png'
        />
        <link
          rel='icon'
          href='/android-chrome-512x512.png'
          sizes='512x512'
          type='image/png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <IntlProvider
          locale={locale}
          messages={flattenMessages(messages[locale])}
        >
          <NavBar />
          <AnimatePresence mode='wait'>
            <Component key={asPath} {...pageProps} dir={getDirection(locale)} />
          </AnimatePresence>
          {/* <Footer /> */}
        </IntlProvider>
      </main>
    </>
  )
}
