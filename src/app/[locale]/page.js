import { getTranslations, setRequestLocale } from 'next-intl/server'
import HomePage from './home-page'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return {
    title: t('home.head.title'),
  }
}

export default async function Page({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return <HomePage />
}
