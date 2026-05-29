import SkillItem from './SkillItem'

type SkillListProps = {
  skills: string[]
  classes: string
  onHover: () => void
  onLeave: () => void
}

const SkillList = ({ skills, classes, onHover, onLeave }: SkillListProps) => {
  return (
    <ul
      className={`flex flex-wrap gap-3 h-fit ${classes}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {skills.map((skill, index) => (
        <SkillItem key={index} label={skill} />
      ))}
    </ul>
  )
}

export default SkillList
