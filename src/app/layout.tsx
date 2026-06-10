import { Analytics } from '@vercel/analytics/next'
import { getLocale } from 'next-intl/server'

import { getThemeInitScript } from '@/lib/theme'

export default async function RootLayout({
  children,
}: LayoutProps<'/'>) {
  const locale = await getLocale()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className='scrollbar bg-light dark:bg-dark'>
        <script
          id='theme-switcher'
          dangerouslySetInnerHTML={{ __html: getThemeInitScript() }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
