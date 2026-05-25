import type { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'

import ProjectsPage from './projects-page'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const t = await getTranslations({ locale })

  return {
    title: t('projects.head.title'),
  }
}

export default function Page() {
  return <ProjectsPage />
}
