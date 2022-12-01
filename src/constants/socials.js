import { BsTelegram } from 'react-icons/bs';
// import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const iconSize = 45;

export const socials = [
  {
    link: 'https://t.me/kytsak',
    text: 'Telegram',
    icon: <BsTelegram size={iconSize} />,
  },
  {
    link: 'https://github.com/IhorKytsak',
    text: 'GitHub',
    icon: <AiFillGithub size={iconSize} />,
  },
  {
    link: 'www.linkedin.com/in/ihorkytsak',
    text: 'Linkedin',
    icon: <AiFillLinkedin size={iconSize} />,
  },
  {
    link: 'https://www.instagram.com/ihor_kitsak/',
    text: 'Instagram',
    icon: <AiFillInstagram size={iconSize} />,
  },
  // {
  //   link: 'https://www.facebook.com/igor.kitsak.9',
  //   text: 'Facebook',
  //   icon: <BsFacebook size={iconSize} />,
  // },
];
