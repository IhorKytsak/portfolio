import type { StaticImageData } from 'next/image'

import Slider from './Slider'
import TechnologyTags from './TechnologyTags'

type ProjectDetailsProps = {
  title?: string
  images?: StaticImageData[]
  description?: string
  technologies?: string[]
}

const ProjectDetails = ({
  title,
  images,
  description,
  technologies,
}: ProjectDetailsProps) => {
  return (
    <>
      <h2 className='text-xl font-semibold mb-4'>{title}</h2>
      <Slider images={images} />
      <p className='my-5 text-sm'>{description}</p>

      <TechnologyTags technologies={technologies ?? []} />
    </>
  )
}

export default ProjectDetails
