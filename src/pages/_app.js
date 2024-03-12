import Head from 'next/head'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { IntlProvider } from 'react-intl'
import en from '../i18n/en.json'
import uk from '../i18n/uk.json'
import { Montserrat } from 'next/font/google'
import '@/styles/globals.css'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

const messages = {
  en,
  uk,
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
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <IntlProvider locale={locale} messages={messages[locale]}>
          <AnimatePresence mode='wait'>
            <Component key={asPath} {...pageProps} dir={getDirection(locale)} />
          </AnimatePresence>
        </IntlProvider>
        <Footer />
      </main>
    </>
  )
}
