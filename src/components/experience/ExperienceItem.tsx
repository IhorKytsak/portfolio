'use client'

import { motion, useScroll } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

import type { ExperienceEntry } from '@/types/about.types'

import LiIcon from '../LiIcon'
import SkillItem from '../skills/SkillItem'

const ExperienceItem = ({
  position,
  projectName,
  time,
  industry,
  domain,
  description,
  responsibilities,
  technologies,
}: ExperienceEntry) => {
  const ref = useRef<HTMLLIElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center center'],
  })

  const t = useTranslations()

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
        className='w-full'
      >
        <h3 className='font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}
          <span className='font-medium text-dark/75 dark:text-light/75'>
            {' '}
            | {time}
          </span>
        </h3>
        <p className='mt-1 font-semibold text-primary dark:text-primaryDark sm:text-base xs:text-sm'>
          {projectName}
        </p>

        <motion.div
          initial={{ height: 'auto' }}
          animate={{ height: isExpanded ? 'auto' : '88px' }}
          transition={{ duration: 0.3 }}
          className={`relative mt-3 overflow-hidden ${
            !isExpanded
              ? 'after:absolute after:bottom-0 after:left-0 after:h-[35px] after:w-full after:bg-gradient-to-t after:from-light after:content-[""] dark:after:from-dark'
              : ''
          }`}
        >
          <div className='space-y-2 md:text-sm'>
            <p className='font-medium'>
              <span className='font-semibold'>
                {t('about.experience.industry')}:
              </span>{' '}
              {industry}
            </p>
            <p className='font-medium'>
              <span className='font-semibold'>
                {t('about.experience.domain')}:
              </span>{' '}
              {domain}
            </p>
            <p className='font-medium'>{description}</p>
          </div>

          <ul className='mt-4 space-y-2 pl-2'>
            {responsibilities.map((item, index) => (
              <li
                key={index}
                className='flex items-start gap-3 font-medium md:text-sm'
              >
                <span className='shrink-0'>&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className='mt-4 mb-2 mx-2 flex flex-wrap gap-1.5'>
            {technologies.map((tech, index) => (
              <SkillItem key={index} label={tech} compact />
            ))}
          </ul>
        </motion.div>

        <button
          onClick={handleToggle}
          className='mt-4 cursor-pointer text-primary underline dark:text-primaryDark'
        >
          {isExpanded
            ? t('about.show-less-button')
            : t('about.show-more-button')}
        </button>
      </motion.div>
    </li>
  )
}

export default ExperienceItem
