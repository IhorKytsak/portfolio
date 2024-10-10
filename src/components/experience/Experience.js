import { useRef } from 'react'
import { useIntl } from 'react-intl'
import { motion, useScroll } from 'framer-motion'

import ExperienceItem from './ExperienceItem'
import { experienceData } from '@/constants/about.const'

const Experience = () => {
  const { formatMessage } = useIntl()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  const experience = experienceData(formatMessage)

  return (
    <div className='my-48'>
      <h2 className='font-bold text-7xl mb-32 w-full text-center md:text-6xl sm:text-4xl md:mb-16'>
        {formatMessage({ id: 'about.experience.title' })}
      </h2>
      <div ref={ref} className=' w-[75%] mx-auto relative lg:w-[80%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          {experience.map((experience, index) => (
            <ExperienceItem
              key={index}
              position={experience.position}
              company={experience.company}
              companyLink={experience.companyLink}
              time={experience.time}
              address={experience.address}
              description={experience.description}
              responsibilities={experience.responsibilities}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Experience
