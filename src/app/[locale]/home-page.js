'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'
import profilePic from '../../../public/images/profile/web-development.png'
import TransitionEffect from '@/components/TransitionEffect'
import GetEmail from '@/components/GetEmail'

export default function HomePage() {
  const t = useTranslations()

  return (
    <>
      <TransitionEffect />
      <div className='flex items-center text-dark w-full min-h-[calc(100dvh-96px)] dark:text-light'>
        <Layout className='pt-8 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image
                src={profilePic}
                alt='Home Image'
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center '>
              <AnimatedText
                text={t('home.page.title')}
                className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                {t('home.subtitle')}
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <a
                  href='/CV.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center bg-dark text-light py-2 px-4 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-transparent border-2 border-solid hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                  md:py-1.5 md:px-3 md:text-base'
                >
                  {t('home.resume')} <LinkArrow className='w-6 ml-1' />
                </a>
                <GetEmail />
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  )
}
