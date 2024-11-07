import { useState } from 'react'
import { useIntl } from 'react-intl'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'

import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import Modal from '@/components/modal/Modal'

import { myProjects } from '@/constants/projects.const'
import { Project } from '@/components/project/Project'
import useProjectDetailModal from '@/hooks/useProjectDetailModal'
import ProjectDetails from '@/components/project/ProjectDetails'

const Projects = () => {
  const { formatMessage } = useIntl()

  const { modalData, open, setModalData } = useProjectDetailModal()
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 })

  const handleOpenModal = (project, event) => {
    setClickPosition({ x: event.clientX, y: event.clientY })
    setModalData(project)
  }

  const projects = myProjects(formatMessage)

  return (
    <>
      <Head>
        <title>{formatMessage({ id: 'projects.head.title' })}</title>
        <meta name='description' content='any desc' />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-8 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText
            text={formatMessage({ id: 'projects.title' })}
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
      </main>
      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        <Modal
          key={open ? 'open' : 'closed'}
          isOpen={open}
          onClose={() => setModalData(null)}
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

export default Projects
