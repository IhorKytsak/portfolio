import { motion } from 'framer-motion'

const Modal = ({ isOpen, onClose, children, initialPosition }) => {
  if (!isOpen) return null

  const dropIn = {
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
        duration: 0.5,
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
  }

  return (
    <div className='fixed inset-0 z-40 flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        exit={{ opacity: 0 }}
        className='absolute inset-0 bg-black'
        onClick={onClose}
      ></motion.div>
      <motion.div
        className='relative z-50 bg-white dark:bg-dark2 text-dark dark:text-light rounded-lg p-6 w-full max-w-3xl xs:max-w-[90vw] md:max-w-md lg:max-w-2xl mx-auto shadow-lg max-h-[85dvh] overflow-auto'
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <button
          onClick={onClose}
          className='size-8 rounded-full absolute top-2 right-2 text-dark2 dark:text-light2 hover:text-dark dark:hover:text-light transition duration-300 hover:bg-dark/10 dark:hover:bg-light/10'
        >
          ✕
        </button>
        {children}
      </motion.div>
    </div>
  )
}

export default Modal
