import { useState } from 'react'
import { useIntl } from 'react-intl'

import SkillList from './SkillList'
import { skills } from '@/constants/about.const'

export default function Skills() {
  const { formatMessage } = useIntl()

  const [hoveredList, setHoveredList] = useState(null)

  const highlightLine = (value) => {
    const dynamicClasses =
      hoveredList === value
        ? 'bg-primary dark:bg-primaryDark'
        : 'bg-dark dark:bg-light'

    const classes = `transition-colors duration-300 ${dynamicClasses}`

    return classes
  }

  return (
    <section className='text-dark dark:text-light mt-48 mb-24 tracking-widest sm:mt-36 sm:mb-24'>
      <div className='container mx-auto px-4'>
        <h2
          className={`w-fit text-center text-4xl font-bold mx-auto px-20 py-3 border-4 rounded-lg transition-colors duration-300 ${
            hoveredList
              ? 'border-primary dark:border-primaryDark text-primary dark:text-primaryDark'
              : 'border-dark dark:border-light'
          } sm:text-2xl sm:px-12 sm:py-2`}
        >
          {formatMessage({ id: 'about.skills' })}
        </h2>
        <div className='relative h-20 sm:h-10 w-full '>
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-dark dark:bg-light ${highlightLine(
              'other'
            )}`}
          />
          <div
            className={`absolute left-[40%] transform -translate-x-[40%] h-full w-0.5 bg-dark dark:bg-light ${highlightLine(
              'frontend'
            )}`}
          />
          <div
            className={`absolute left-[60%] transform -translate-x-[60%] h-full w-0.5 bg-dark dark:bg-light ${highlightLine(
              'backend'
            )}`}
          />
        </div>

        <div className='relative h-0 w-full'>
          <div
            className={`absolute left-[20%] w-[calc(20%+1px)] top-0 h-0.5 bg-dark dark:bg-light ${highlightLine(
              'frontend'
            )}`}
          ></div>
          <div
            className={`absolute left-[calc(60%-1px)] w-[20%] top-0 h-0.5 bg-dark dark:bg-light ${highlightLine(
              'backend'
            )}`}
          />
        </div>

        <div className='relative h-20 sm:h-10 w-full '>
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-dark dark:bg-light ${highlightLine(
              'other'
            )}`}
          />
          <div
            className={`absolute left-[20%] transform -translate-x-[20%] h-full w-0.5 bg-dark dark:bg-light ${highlightLine(
              'frontend'
            )}`}
          />
          <div
            className={`absolute left-[80%] transform -translate-x-[80%] h-full w-0.5 bg-dark dark:bg-light ${highlightLine(
              'backend'
            )}`}
          />
        </div>

        <div className='flex justify-between relative'>
          <SkillList
            skills={skills.frontend}
            classes='items-start justify-start pt-5 w-[46%]'
            onHover={() => setHoveredList('frontend')}
            onLeave={() => setHoveredList(null)}
          />
          <SkillList
            skills={skills.backend}
            classes='justify-end pt-5 w-[46%]'
            onHover={() => setHoveredList('backend')}
            onLeave={() => setHoveredList(null)}
          />
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-dark dark:bg-light ${highlightLine(
              'other'
            )}`}
          />
        </div>

        <SkillList
          skills={skills.other}
          classes='justify-center pt-8'
          onHover={() => setHoveredList('other')}
          onLeave={() => setHoveredList(null)}
        />
      </div>
    </section>
  )
}
