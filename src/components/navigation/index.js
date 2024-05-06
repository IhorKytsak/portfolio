import { useState } from 'react'
import Logo from '../Logo'
import { SunIcon, MoonIcon } from '../Icons'
import { motion } from 'framer-motion'
import { useIntl } from 'react-intl'

import useThemeSwitcher from '@/hooks/useThemeSwitcher'
import LanguagePicker from '../LanguagePicker'
import { NAV_ITEMS, SOCIAL_ITEMS } from './constants'
import { CustomLink } from './CustomLink'
import { CustomMobileLink } from './CustomMobileLink'

export const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const { formatMessage } = useIntl()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
      <button
        className='flex-col justify-center items-center hidden lg:flex'
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className='w-full flex justify-between items-center lg:hidden  '>
        <nav>
          {NAV_ITEMS.map((item) => {
            const title = formatMessage({ id: item.titleId })
            return (
              <CustomLink
                key={item.titleId}
                href={item.href}
                title={title}
                className='mr-4'
              />
            )
          })}
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
          {SOCIAL_ITEMS.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target='_blank'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mx-1.5'
            >
              {item.icon}
            </motion.a>
          ))}
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
            }`}
          >
            {mode === 'dark' ? (
              <SunIcon className='fill-dark' />
            ) : (
              <MoonIcon className='fill-dark' />
            )}
          </button>
          <LanguagePicker />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className='min-w-[70vw] flex justify-between items-center flex-col z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
        >
          <nav className='flex items-center flex-col justify-center'>
            {NAV_ITEMS.map((item) => {
              const title = formatMessage({ id: item.titleId })
              return (
                <CustomMobileLink
                  key={item.titleId}
                  href={item.href}
                  title={title}
                  toggle={handleClick}
                />
              )
            })}
          </nav>
          <nav className='flex items-center justify-center flex-wrap mt-2 gap-y-1'>
            {SOCIAL_ITEMS.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target='_blank'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-6 mx-1.5 sm:mx-1 ${
                  item.name === 'github'
                    ? 'bg-light rounded-full dark:bg-dark'
                    : ''
                }`}
              >
                {item.icon}
              </motion.a>
            ))}
            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
              }`}
            >
              {mode === 'dark' ? (
                <SunIcon className='fill-dark' />
              ) : (
                <MoonIcon className='fill-dark' />
              )}
            </button>
            <LanguagePicker />
          </nav>
        </motion.div>
      ) : null}

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}
