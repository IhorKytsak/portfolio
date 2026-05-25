'use client'

import { useState, type MouseEvent } from 'react'
import { useTranslations } from 'next-intl'
import { AnimatePresence } from 'framer-motion'

import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import Modal from '@/components/modal/Modal'

import { myProjects } from '@/constants/projects.const'
import { Project } from '@/components/project/Project'
import useBodyScrollLock from '@/hooks/useBodyScrollLock'
import useModal from '@/hooks/useModal'
import ProjectDetails from '@/components/project/ProjectDetails'
import type { ClickPosition } from '@/types/modal.types'
import type { Project as ProjectType } from '@/types/project.types'

export default function ProjectsPage() {
  const t = useTranslations()

  const { data: modalData, open, openModal, closeModal } =
    useModal<ProjectType>()
  useBodyScrollLock(open)
  const [clickPosition, setClickPosition] = useState<ClickPosition>({
    x: 0,
    y: 0,
  })

  const handleOpenModal = (project: ProjectType, event: MouseEvent) => {
    setClickPosition({ x: event.clientX, y: event.clientY })
    openModal(project)
  }

  const projects = myProjects(t)

  return (
    <>
      <TransitionEffect />
      <div className='w-full flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text={t('projects.title')}
            className='mb-16 !text-3xl lg:!text-2xl sm:mb-8 sm:!text-xl xs:!text-lg'
          />
          <div className='grid grid-cols-12 gap-16  lg:gap-x-8 md:grid-cols-6'>
            {projects.map((project, index) => (
              <div key={index} className='col-span-6'>
                <Project item={project} handleOpenModal={handleOpenModal} />
              </div>
            ))}
          </div>
        </Layout>
      </div>
      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        <Modal
          key={open ? 'open' : 'closed'}
          isOpen={open}
          onClose={closeModal}
          initialPosition={clickPosition}
        >
          <ProjectDetails
            description={modalData?.description}
            title={modalData?.title}
            images={modalData?.images}
            technologies={modalData?.technologies}
          />
        </Modal>
      </AnimatePresence>
    </>
  )
}
