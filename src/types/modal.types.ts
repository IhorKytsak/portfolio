import type { Dispatch, SetStateAction } from 'react'

export type UseModalReturn<T> = {
  open: boolean
  data: T | null
  setData: Dispatch<SetStateAction<T | null>>
  openModal: (data: T) => void
  closeModal: () => void
}
