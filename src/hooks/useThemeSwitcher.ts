import { useEffect, useState } from 'react'

import {
  isThemeMode,
  PREFER_DARK_MEDIA_QUERY,
  THEME_STORAGE_KEY,
} from '@/constants/theme.const'
import { applyThemeClass, resolveThemeMode } from '@/lib/theme'
import type { UseThemeSwitcherReturn } from '@/types/theme.types'

const useThemeSwitcher = (): UseThemeSwitcherReturn => {
  const [mode, setMode] = useState<UseThemeSwitcherReturn[0]>('')

  useEffect(() => {
    const mediaQuery = window.matchMedia(PREFER_DARK_MEDIA_QUERY)

    const handleChange = () => {
      const nextMode = resolveThemeMode(
        mediaQuery,
        window.localStorage.getItem(THEME_STORAGE_KEY),
      )
      setMode(nextMode)
      applyThemeClass(nextMode)
    }

    handleChange()

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (isThemeMode(mode)) {
      window.localStorage.setItem(THEME_STORAGE_KEY, mode)
      applyThemeClass(mode)
    }
  }, [mode])

  return [mode, setMode]
}

export default useThemeSwitcher

export { ThemeMode } from '@/constants/theme.const'
export type { ThemeModeState, UseThemeSwitcherReturn } from '@/types/theme.types'
