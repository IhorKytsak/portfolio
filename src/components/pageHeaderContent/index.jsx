import './styles.scss';

const PageHeaderContent = ({ text, icon }) => {
  return (
    <div className='wrapper'>
      <h2>{text}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeaderContent;
