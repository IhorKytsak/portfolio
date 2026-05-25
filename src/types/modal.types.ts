import type { Dispatch, ReactNode, SetStateAction } from 'react'

export type ClickPosition = {
  x: number
  y: number
}

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  initialPosition: ClickPosition
}

export type UseModalReturn<T> = {
  open: boolean
  data: T | null
  setData: Dispatch<SetStateAction<T | null>>
  openModal: (data: T) => void
  closeModal: () => void
}
