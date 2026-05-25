'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills/Skills'
import Experience from '@/components/experience/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'
import AnimatedNumbersWithLable from '@/components/AnimatedNumbersWithLable'

import {
  completedProjects,
  yearsOfExperience,
  clients,
} from '@/constants/about.const'

import profilePic from '@/assets/images/profile/avatar.jpg'

export default function AboutPage() {
  const t = useTranslations()

  return (
    <>
      <TransitionEffect />
      <div className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text={t('about.title')}
            className='mb-16 !text-7xl lg:!text-4xl sm:!text-4xl xs:!text-4xl sm:mb-8'
          />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div
              className='col-span-3 flex flex-col items-start justify-start
            xl:col-span-4 md:order-2 md:col-span-8'
            >
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                {t('about.biography.title')}
              </h2>
              <p className='font-medium'>
                {t('about.biography.paragraphs.0')}
              </p>
              <p className='font-medium my-4'>
                {t('about.biography.paragraphs.1')}
              </p>
              <p className='font-medium'>
                {t('about.biography.paragraphs.2')}
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image
                src={profilePic}
                alt='About image'
                className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <AnimatedNumbersWithLable
                label={t('about.satisfied-clients')}
                value={clients}
              />
              <AnimatedNumbersWithLable
                label={t('about.projects-completed')}
                value={completedProjects}
              />
              <AnimatedNumbersWithLable
                label={t('about.years-of-experience')}
                value={yearsOfExperience}
              />
            </div>
          </div>
          <Experience />
          <Education />
          <Skills />
        </Layout>
      </div>
    </>
  )
}
