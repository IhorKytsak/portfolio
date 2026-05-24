import { useEffect, useRef } from 'react'

const useBodyScrollLock = (locked: boolean): void => {
  const previousOverflow = useRef('')

  useEffect(() => {
    if (!locked) return

    previousOverflow.current = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow.current
    }
  }, [locked])
}

export default useBodyScrollLock
