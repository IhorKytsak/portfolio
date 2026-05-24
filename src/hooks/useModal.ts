import { useCallback, useState } from 'react'

import type { UseModalReturn } from '@/types/modal.types'

const useModal = <T>(): UseModalReturn<T> => {
  const [data, setData] = useState<T | null>(null)

  const openModal = (value: T) => setData(value)
  const closeModal = () => setData(null)

  return {
    open: data !== null,
    data,
    setData,
    openModal,
    closeModal,
  }
}

export default useModal

export type { UseModalReturn } from '@/types/modal.types'
