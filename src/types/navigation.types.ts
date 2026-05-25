import type { ReactNode } from 'react'

import messages from '@/i18n/en.json'

type NavigationKey = keyof typeof messages.navigation

export type NavTitleId = `navigation.${NavigationKey}`

export type NavItem = {
  titleId: NavTitleId
  href: '/' | '/about' | '/projects'
}

export type SocialItemName = 'github' | 'linkedin' | 'telegram'

export type SocialItem = {
  name: SocialItemName
  icon: ReactNode
  href: string
}
