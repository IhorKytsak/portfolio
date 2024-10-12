import SkillItem from './SkillItem'

const SkillList = ({ skills, classes, onHover, onLeave }) => {
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
