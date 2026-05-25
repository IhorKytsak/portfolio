import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'uk'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
})

export type Locale = (typeof routing.locales)[number]

export function isLocale(value: string): value is Locale {
  return (routing.locales as readonly string[]).includes(value)
}

export function resolveLocale(value: string): Locale {
  return isLocale(value) ? value : routing.defaultLocale
}
