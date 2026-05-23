'use client'

import { motion } from 'framer-motion'
import { Link, usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { routing } from '@/i18n/routing'

const LanguagePicker = () => {
  const pathname = usePathname()
  const locale = useLocale()

  return (
    <div className='flex items-center justify-center ml-2 divide-x divide-dark dark:divide-light lg:divide-dark lg:dark:divide-light lg:text-dark lg:dark:text-light'>
      {[...routing.locales].sort().map((l) => (
        <Link key={l} href={pathname} locale={l}>
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`px-1.5 leading-tight ${
              l === locale ? 'font-bold' : ''
            }`}
          >
            {l === 'uk' ? 'UA' : l.toLocaleUpperCase()}
          </motion.div>
        </Link>
      ))}
    </div>
  )
}

export default LanguagePicker
