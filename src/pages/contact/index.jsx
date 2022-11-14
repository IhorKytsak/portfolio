import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import PageHeaderContent from '../../components/pageHeaderContent';
import { RiContactsFill } from 'react-icons/ri';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import HeaderWithUnderline from '../../components/headerWithUnderline';
import TextField from '../../components/textField';
import TextareaField from '../../components/textareaField';
import Button from '../../components/button';

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
    <section id='contact' className='contact'>
      <PageHeaderContent
        text='My Contact'
        icon={<RiContactsFill size={35} />}
      />
      <div className='contact__content'>
        <HeaderWithUnderline text={"Let's Talk"} />

        <form
          className='contact__content__form'
          ref={form}
          onSubmit={sendEmail}
        >
          <div className='contact__content__form__controlswrapper'>
            <TextField name='name' label='name' />
            <TextField name='email' label='email' type='email' />
            <TextareaField name='message' label='message' />
            <Button type='submit' children='Submit' disabled={false} />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
