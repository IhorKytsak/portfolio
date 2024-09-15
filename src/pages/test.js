import { useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import TransitionEffect from '@/components/TransitionEffect'

const TestHiddenPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Head>
        <title>Test Hidden Page</title>
        <meta name='description' content='for test purposes' />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <div onClick={openModal}>HIIIIIIIIIIIIIIIi</div>
          <button
            onClick={openModal}
            className='mt-4 px-4 py-2 bg-blue-500 text-black rounded'
          >
            Open Fullscreen Modal
          </button>
        </Layout>
      </main>

      {isModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
          <div className='relative bg-white w-full h-full'>
            <header className='flex justify-between items-center p-4 border-b'>
              <h2 className='text-xl font-semibold'>Modal Header</h2>
              <button onClick={closeModal} className='text-xl p-2 bg-slate-500'>
                &times;
              </button>
            </header>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              className='w-full h-full'
            >
              <SwiperSlide>Slide 1 Content</SwiperSlide>
              <SwiperSlide>Slide 2 Content</SwiperSlide>
              <SwiperSlide>Slide 3 Content</SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
    </>
  )
}

export default TestHiddenPage
