import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAnimate } from 'framer-motion'

import { ClickIcon, GithubIcon, LinkArrow } from '@/components/Icons'

export const Project = ({ item, handleOpenModal }) => {
  const [scope, animate] = useAnimate()

  const linkRef = useRef()
  const gitRef = useRef()

  const handleouseOver = (ref) => () => {
    animate(ref.current, { x: 5 }, { duration: 0.3 })
  }
  const handleouseOut = (ref) => () => {
    animate(ref.current, { x: 0 }, { duration: 0.3 })
  }

  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl bg-light2 shadow-md shadow-dark dark:shadow-light relative dark:bg-dark2 transition-shadow duration-300 ease-in-out overflow-hidden'>
      <div
        onClick={(event) => handleOpenModal(item, event)}
        className='relative w-full h-full cursor-pointer group'
      >
        <Image
          src={item.images[0]}
          alt={item.title}
          className='w-full h-auto group-hover:scale-105 duration-300'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
        />
        {/* Hover Icon */}
        <div className='absolute inset-0 flex items-center justify-center group-hover:scale-90 duration-300'>
          <ClickIcon />
        </div>
      </div>

      <div className='w-full flex flex-col items-start justify-between px-5 py-4 gap-5 bg-texturePattern'>
        <h2 className='w-full text-left text-3xl font-bold lg:text-2xl sm:text-xl'>
          {item.title}
        </h2>

        <div className='w-full  flex items-center justify-evenly md:justify-end flex-wrap gap-4 relative'>
          {item?.visitUrl && (
            <Link
              ref={scope}
              href={item.visitUrl}
              target='_blank'
              className='flex items-center gap-2 border border-solid border-dark dark:border-light rounded-xl px-5 py-2 sm:px-3 sm:py-1.5'
              onMouseOver={handleouseOver(linkRef)}
              onMouseOut={handleouseOut(linkRef)}
            >
              {/* Main button content */}
              <p>Visit</p>
              <div ref={linkRef}>
                <LinkArrow className='w-7' />
              </div>
              {/* Animated border */}
            </Link>
          )}
          {item?.gitHubUrl && (
            <Link
              href={item.gitHubUrl}
              target='_blank'
              className='flex items-center gap-2 border border-solid border-dark dark:border-light rounded-xl px-5 py-2 sm:px-3 sm:py-1.5'
              onMouseOver={handleouseOver(gitRef)}
              onMouseOut={handleouseOut(gitRef)}
            >
              More
              <div ref={gitRef} className='w-7'>
                <GithubIcon />
              </div>
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
