import { getTranslations, setRequestLocale } from 'next-intl/server'
import AboutPage from './about-page'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale })

  return {
    title: t('about.head.title'),
  }
}

export default async function Page({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return <AboutPage />
}
