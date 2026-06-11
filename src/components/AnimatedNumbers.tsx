import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

type AnimatedNumbersProps = {
  value: number
  /** Milliseconds to wait after entering the viewport before counting up */
  delay?: number
}

const AnimatedNumbers = ({ value, delay = 0 }: AnimatedNumbersProps) => {
  const ref = useRef<HTMLSpanElement>(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: 3000,
  })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const timeout = setTimeout(() => {
      motionValue.set(value)
    }, delay)

    return () => clearTimeout(timeout)
  }, [isInView, value, motionValue, delay])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest <= value) {
        ref.current.textContent = Math.round(latest).toString()
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

export default AnimatedNumbers
