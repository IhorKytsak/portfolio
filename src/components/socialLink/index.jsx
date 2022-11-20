import './styles.scss';

const SocialLink = ({ link, text, Icon }) => {
  return (
    <div className='socialBox'>
      <a className='socialLink' href={link} target='_blank'>
        <span>{Icon}</span>
        <p>{text}</p>
      </a>
    </div>
  );
};

export default SocialLink;
