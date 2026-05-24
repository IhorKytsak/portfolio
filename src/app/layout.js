import { Analytics } from '@vercel/analytics/next'
import { getLocale } from 'next-intl/server'
import { getThemeInitScript } from '@/lib/theme'

export default async function RootLayout({ children }) {
  const locale = await getLocale()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className='scrollbar'>
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
