const TechnologyTags = ({ technologies }) => {
  return (
    <div className='flex flex-wrap gap-2 my-1'>
      {technologies.map((tech, index) => (
        <span
          key={index}
          className='bg-light dark:bg-dark w-fit h-fit skill-item text-center px-3 py-2 text-dark dark:text-light  transition-all duration-300 tracking-widest rounded-lg shadow-md shadow-dark dark:shadow-light hover:shadow-lg hover:shadow-dark hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark dark:hover:shadow-light text-xs sm:text-[10px] sm:px-2 sm:rounded'
        >
          {tech}
        </span>
      ))}
    </div>
  )
}

export default TechnologyTags
