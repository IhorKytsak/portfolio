import './styles.scss';

const SocialLink = ({ link, text, img }) => {
  return (
    <div className='socialBox'>
      <a className='socialLink' href={link} target='_blank'>
        <span>{img}</span>
        <p>{text}</p>
      </a>
    </div>
  );
};

export default SocialLink;
