import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimate } from 'framer-motion'

import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { GithubIcon, LinkArrow } from '@/components/Icons'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import TransitionEffect from '@/components/TransitionEffect'
import { useRef } from 'react'

const FramerImage = motion(Image)

const Project = ({ title, img, link, github }) => {
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
    <article className='w-full flex flex-col items-center justify-center rounded-2xl bg-light2 hover:shadow-md hover:shadow-dark dark:hover:shadow-md dark:hover:shadow-light relative dark:bg-dark2 transition-shadow duration-300 ease-in-out overflow-hidden'>
      <FramerImage
        src={img}
        alt={title}
        className='w-full h-auto'
        // whileHover={{ scale: 1.05 }}
        // transition={{ duration: 0.2 }}
        priority
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
      />

      <div className='w-full flex flex-col items-start justify-between px-5 py-4 gap-5'>
        <h2 className='w-full text-left text-3xl font-bold lg:text-2xl sm:text-xl'>
          {title}
        </h2>

        <div className='w-full  flex items-center justify-between flex-wrap gap-4 relative'>
          {link && (
            <Link
              ref={scope}
              href={link}
              target='_blank'
              className='relative flex items-center gap-2 border border-solid rounded-xl px-5 py-2 sm:px-3 sm:py-1.5 group'
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
          {github && (
            <Link
              href={github}
              target='_blank'
              className='flex items-center gap-2 border border-solid rounded-xl px-5 py-2 sm:px-3 sm:py-1.5'
              onMouseOver={handleouseOver(gitRef)}
              onMouseOut={handleouseOut(gitRef)}
            >
              Details
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

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name='description' content='any desc' />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Trumps Knowledge!'
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
          />
          <div className='grid grid-cols-12 gap-24 gap-y-28 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-6 md:col-span-12'>
              <Project
                title='Crypto Screener Application'
                img={project1}
                link='/'
                github='/'
              />
            </div>
            <div className='col-span-6 md:col-span-12'>
              <Project
                title='Crypto Screener Application'
                img={project1}
                github='/'
              />
            </div>
            <div className='col-span-6 md:col-span-12'>
              <Project
                title='Crypto Screener Application'
                img={project1}
                link='/'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects
