type SkillItemProps = {
  label: string
  compact?: boolean
}

const SkillItem = ({ label, compact = false }: SkillItemProps) => {
  return (
    <li
      className={`bg-light dark:bg-dark skill-item h-fit w-fit rounded-lg text-center text-dark shadow-md shadow-dark transition-all duration-300 dark:text-light dark:shadow-light hover:bg-dark hover:text-light hover:shadow-lg hover:shadow-dark dark:hover:bg-light dark:hover:text-dark dark:hover:shadow-light ${
        compact
          ? 'px-2 py-1 text-[10px] tracking-wide sm:px-1.5 sm:text-[8px]'
          : 'px-4 py-2 tracking-widest sm:rounded sm:px-1 sm:text-[8px]'
      }`}
    >
      {label.toUpperCase()}
    </li>
  )
}

export default SkillItem
