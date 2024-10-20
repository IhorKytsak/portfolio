import Link from 'next/link'
import { useRouter } from 'next/router'

export const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter()
  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      href={href}
      className={`${className} relative group text-dark dark:text-light`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? 'w-full' : 'w-0'}
       dark:bg-light `}
      >
        &nbsp;
      </span>
    </button>
  )
}
