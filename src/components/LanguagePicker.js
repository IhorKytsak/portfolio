import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Link from 'next/link'

const LanguagePicker = () => {
  const { locales, locale, pathname } = useRouter()

  return (
    <div className='flex items-center justify-center ml-2 divide-x divide-dark dark:divide-light lg:divide-light lg:dark:divide-dark lg:text-light lg:dark:text-dark'>
      {[...locales].sort().map((l) => (
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
