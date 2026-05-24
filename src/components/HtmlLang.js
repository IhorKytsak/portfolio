'use client'

import { useLayoutEffect } from 'react'

/** Keeps `<html lang>` in sync on client-side locale navigations. */
export function HtmlLang({ locale }) {
  useLayoutEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return null
}
