import './styles.scss';

const TextareaField = ({ name, label }) => {
  return (
    <div className='textareaBox'>
      <textarea required name={name} />
      <span>{label}</span>
    </div>
  );
};

export default TextareaField;
