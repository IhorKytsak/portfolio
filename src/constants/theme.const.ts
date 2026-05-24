export enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

export const THEME_STORAGE_KEY = 'theme'

export const THEME_DARK_CLASS = 'dark'

export const PREFER_DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)'

export function isThemeMode(value: string | null): value is ThemeMode {
  return value === ThemeMode.Light || value === ThemeMode.Dark
}
