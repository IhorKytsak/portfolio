import {
  isThemeMode,
  PREFER_DARK_MEDIA_QUERY,
  THEME_DARK_CLASS,
  THEME_STORAGE_KEY,
  ThemeMode,
} from '@/constants/theme.const'

export function applyThemeClass(mode: ThemeMode): void {
  document.documentElement.classList.toggle(
    THEME_DARK_CLASS,
    mode === ThemeMode.Dark,
  )
}

export function resolveThemeMode(
  mediaQuery: MediaQueryList,
  storedTheme: string | null,
): ThemeMode {
  if (isThemeMode(storedTheme)) {
    return storedTheme
  }

  return mediaQuery.matches ? ThemeMode.Dark : ThemeMode.Light
}

/** Inline script in root layout — prevents theme flash before React hydrates. */
export function getThemeInitScript(): string {
  const key = JSON.stringify(THEME_STORAGE_KEY)
  const dark = JSON.stringify(ThemeMode.Dark)
  const light = JSON.stringify(ThemeMode.Light)
  const darkClass = JSON.stringify(THEME_DARK_CLASS)
  const mediaQuery = JSON.stringify(PREFER_DARK_MEDIA_QUERY)

  return `(function(){try{var k=${key},d=${dark},l=${light},c=${darkClass},mq=${mediaQuery},s=localStorage.getItem(k),m=window.matchMedia(mq),mode=s===d||s===l?s:m.matches?d:l;document.documentElement.classList.toggle(c,mode===d)}catch(e){}})();`
}
