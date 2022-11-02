import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { useTranslation } from 'react-i18next';
import './styles.scss';

const Home = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleNavigateToContactMePage = () => {
    navigate('/contact');
  };
  console.log(i18n);

  return (
    <section id='home' className='home'>
      <div className='home__text-wrapper'>
        <h1>
          {t('homePage.greetingsPartOne')}
          <br />
          {t('homePage.greetingsPartTwo')}
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(550px)',
        }}
        end={{
          transform: 'translatex(0px)',
        }}
      >
        <div className='home__contact-me'>
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};
export default Home;
