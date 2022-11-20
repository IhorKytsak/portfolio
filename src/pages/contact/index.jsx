import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';
import { RiContactsFill } from 'react-icons/ri';
import { BsTelegram } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';

import PageHeaderContent from '../../components/pageHeaderContent';
import HeaderWithUnderline from '../../components/headerWithUnderline';
import TextField from '../../components/textField';
import TextareaField from '../../components/textareaField';
import Button from '../../components/button';

import './styles.scss';
import SocialLink from '../../components/socialLink';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className='contact'>
      <PageHeaderContent
        text='My Contact'
        icon={<RiContactsFill size={35} />}
      />
      <div className='contact__content'>
        <div className='contact__social'>
          <SocialLink
            link='https://t.me/kytsak'
            text='Telegram'
            img={<BsTelegram size={45} />}
          />
          <SocialLink
            link='https://t.me/kytsak'
            text='Telegram'
            img={<BsTelegram size={45} />}
          />
          <SocialLink
            link='https://t.me/kytsak'
            text='Telegram'
            img={<BsTelegram size={45} />}
          />
          <SocialLink
            link='https://t.me/kytsak'
            text='Telegram'
            img={<BsTelegram size={45} />}
          />
          {/* <SocialLink
            link='https://t.me/kytsak'
            text='Telegram'
            img={<BsTelegram size={45} />}
          />
          <SocialLink
            link='https://t.me/kytsak'
            text='Telegram'
            img={<BsTelegram size={45} />}
          /> */}
        </div>

        <form className='contact__form' ref={form} onSubmit={sendEmail}>
          <HeaderWithUnderline text={"Let's Talk"} />
          <TextField name='name' label='name' />
          <TextField name='email' label='email' type='email' />
          <TextareaField name='message' label='message' />
          <Button type='submit' children='Submit' disabled={false} />
        </form>
      </div>
    </section>
  );
};
export default Contact;
