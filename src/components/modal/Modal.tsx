'use client'

import { motion } from 'framer-motion'

import type { ModalProps } from '@/types/modal.types'

import { getDropInVariants } from './modal.variants'

const Modal = ({ isOpen, onClose, children, initialPosition }: ModalProps) => {
  if (!isOpen) return null

  const dropIn = getDropInVariants(initialPosition)

  return (
    <div className='fixed inset-0 z-40 flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        exit={{ opacity: 0 }}
        className='absolute inset-0 bg-black'
        onClick={onClose}
      />
      <motion.div
        className='scrollbar relative z-50 bg-light dark:bg-dark text-dark dark:text-light rounded-lg p-6 w-full max-w-3xl xs:max-w-[90vw] md:max-w-md lg:max-w-2xl mx-auto shadow-lg max-h-[85dvh] overflow-auto'
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
