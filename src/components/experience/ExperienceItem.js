import { motion, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'
import { useIntl } from 'react-intl'

import LiIcon from '../LiIcon'

const ExperienceItem = ({
  position,
  company,
  companyLink,
  time,
  address,
  description,
  responsibilities,
}) => {
  const ref = useRef(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center center'],
  })

  const { formatMessage } = useIntl()

  const handleToggle = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
    >
      <LiIcon scrollYProgress={scrollYProgress} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}{' '}
          <a
            href={companyLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary dark:text-primaryDark capitalize whitespace-nowrap'
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>

        <motion.div
          initial={{ height: 'auto' }}
          animate={{ height: isExpanded ? 'auto' : '46px' }}
          transition={{ duration: 0.3 }}
          className={`relative overflow-hidden ${
            !isExpanded
              ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[35px] after:bg-gradient-to-t after:from-light dark:after:from-dark'
              : ''
          }`}
        >
          <p className={`font-medium w-full md:text-sm  `}>{description}</p>

          <ul className='list-disc pl-2 space-y-1 mt-3'>
            {responsibilities.map((item, index) => (
              <li
                key={index}
                className=' font-medium md:text-sm flex items-start gap-3'
              >
                <p>&#10003;</p>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <button
          onClick={handleToggle}
          className='mt-4 text-primary dark:text-primaryDark underline cursor-pointer'
        >
          {isExpanded
            ? formatMessage({ id: 'about.show-less-button' })
            : formatMessage({ id: 'about.show-more-button' })}
        </button>
      </motion.div>
    </li>
  )
}

export default ExperienceItem
