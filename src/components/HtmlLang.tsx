'use client'

import { useLayoutEffect } from 'react'

import type { Locale } from '@/i18n/routing'

type HtmlLangProps = {
  locale: Locale
}

/** Keeps `<html lang>` in sync on client-side locale navigations. */
export function HtmlLang({ locale }: HtmlLangProps) {
  useLayoutEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return null
}
