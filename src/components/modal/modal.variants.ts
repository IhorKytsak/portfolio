import type { Variants } from 'framer-motion'

import type { ClickPosition } from '@/types/modal.types'

export const getDropInVariants = (initialPosition: ClickPosition): Variants => ({
  hidden: {
    x: initialPosition.x - window.innerWidth / 2,
    y: initialPosition.y - window.innerHeight / 2,
    scale: 0.3,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    scale: 0.3,
    opacity: 0,
    transition: { duration: 0.3 },
  },
})
