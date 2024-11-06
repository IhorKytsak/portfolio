import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useIntl } from 'react-intl'

import { ChevronLeft, ChevronRight } from '../Icons'

const Slider = ({ images = [] }) => {
  const { formatMessage } = useIntl()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  if (images.length === 0) {
    return null
  }

  return (
    <div className='relative w-full h-[330px] md:h-[230px] overflow-hidden flex items-center justify-center'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.3 }}
          className='relative w-full h-full flex items-center justify-center'
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className='rounded-lg'
            style={{ objectFit: 'contain' }}
            fill
          />
        </motion.div>
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className='absolute left-5 top-1/2 transform -translate-y-1/2 p-2 bg-dark/50 text-light rounded-full hover:bg-dark/90 focus:outline-none transition-colors duration-300'
          >
            <ChevronLeft />
          </button>

          <button
            onClick={handleNext}
            className='absolute right-5 top-1/2 transform -translate-y-1/2 p-2 bg-dark/50 text-light rounded-full hover:bg-dark/90 focus:outline-none transition-colors duration-300'
          >
            <ChevronRight className='w-6 h-6' />
          </button>

          <div className='absolute bottom-2 text-white bg-dark/60 px-3 py-1 rounded-lg text-sm'>
            {`${currentIndex + 1} of ${images.length}`}
          </div>
        </>
      )}

      <a
        href={images[currentIndex].src}
        target='_blank'
        rel='noopener noreferrer'
        className='absolute top-2 text-white bg-dark/60 px-3 py-1 rounded-lg text-sm hover:bg-dark/90 transition-colors duration-300'
      >
        {formatMessage({ id: 'projects.view-more' })}
      </a>
    </div>
  )
}

export default Slider
