import Slider from './Slider'
import TechnologyTags from './TechnologyTags'

const ProjectDetails = ({ title, images, description, technologies }) => {
  return (
    <>
      <h2 className='text-xl font-semibold mb-4'>{title}</h2>
      <Slider images={images} />
      <p className='my-4 text-sm'>{description}</p>

      <TechnologyTags technologies={technologies} />
    </>
  )
}
export default ProjectDetails
