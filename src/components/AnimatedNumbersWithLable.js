import AnimatedNumbers from '@/components/AnimatedNumbers'

const AnimatedNumbersWithLable = ({ value, label }) => {
  return (
    <div className='flex flex-col items-end justify-center xl:items-center'>
      <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl sx:text-4xl'>
        <AnimatedNumbers value={value} />+
      </span>
      <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-end xl:text-center md:text-lg sm:text-base xs:text-sm'>
        {label}
      </h2>
    </div>
  )
}

export default AnimatedNumbersWithLable
