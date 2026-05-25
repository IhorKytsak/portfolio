import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'

import AboutPage from './about-page'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations({ locale })

  return {
    title: t('about.head.title'),
  }
}

export default function Page() {
  return <AboutPage />
}
