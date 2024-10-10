import { motion } from 'framer-motion'
import { useRef } from 'react'

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null)

  return (
    <div
      ref={ref}
      className='my-8 w-[90%] mx-auto flex flex-col items-center justify-center bg-light dark:bg-dark p-6 rounded-lg shadow-md dark:shadow-light'
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-3xl sm:text-2xl xs:text-xl mb-2'>
          {type}
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {place}
        </span>
        <p className='font-medium mt-4 md:text-sm'>{info}</p>
      </motion.div>
    </div>
  )
}

const Education = () => {
  const ref = useRef(null)
  return (
    <div className='my-32'>
      <h2 className='font-bold text-7xl mb-16 w-full text-center md:text-6xl sm:text-4xl'>
        Education
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[80%] md:w-full'>
        <Details
          type='Bachelor Of Science In Computer Engineering'
          time='2014-2018'
          place='Lviv Polytechnic National University'
          info='Relevant courses included Object-Oriented Programming, Data Structures and Algorithms, Computer Systems Engineering, Software Development, and Network Programming.'
        />
      </div>
    </div>
  )
}

export default Education
