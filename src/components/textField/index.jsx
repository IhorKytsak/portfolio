import './styles.scss';

const TextField = ({ type = 'text', name, label }) => {
  return (
    <div className='inputBox'>
      <input required name={name} type={type} placeholder=' ' />
      <span>{label}</span>
    </div>
  );
};

export default TextField;
