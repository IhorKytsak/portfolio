import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'

import HomePage from './home-page'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations({ locale })

  return {
    title: t('home.head.title'),
  }
}

export default function Page() {
  return <HomePage />
}
