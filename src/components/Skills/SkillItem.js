const SkillItem = ({ label }) => {
  return (
    <li className='bg-light dark:bg-dark w-fit h-fit skill-item text-center px-4 py-2 text-dark dark:text-light  transition-all duration-300 tracking-widest rounded-lg shadow-md shadow-dark dark:shadow-light hover:shadow-lg hover:shadow-dark hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark dark:hover:shadow-light sm:text-[8px] sm:px-1 sm:rounded'>
      {label.toUpperCase()}
    </li>
  )
}
export default SkillItem
