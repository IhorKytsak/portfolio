import type { Dispatch, SetStateAction } from 'react'

import type { ThemeMode } from '@/constants/theme.const'

export type ThemeModeState = ThemeMode | ''

export type UseThemeSwitcherReturn = [
  ThemeModeState,
  Dispatch<SetStateAction<ThemeModeState>>,
]
