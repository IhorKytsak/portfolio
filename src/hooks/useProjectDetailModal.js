import { useEffect, useState } from 'react'

const useProjectDetailModal = () => {
  const [modalData, setModalData] = useState(null)

  useEffect(() => {
    if (!!modalData) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [modalData])

  return { open: !!modalData, modalData, setModalData }
}

export default useProjectDetailModal
