import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

type AnimatedNumbersProps = {
  value: number
}

const AnimatedNumbers = ({ value }: AnimatedNumbersProps) => {
  const ref = useRef<HTMLSpanElement>(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: 3000,
  })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

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
