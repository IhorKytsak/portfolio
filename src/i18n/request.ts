import { getRequestConfig } from 'next-intl/server'
import { resolveLocale } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale
  const locale = resolveLocale(requestedLocale ?? '')

  return {
    locale,
    messages: (await import(`./${locale}.json`)).default,
  }
})
