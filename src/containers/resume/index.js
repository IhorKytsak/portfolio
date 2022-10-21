import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContainer/portfolio';

const Resume = () => {
  return (
    <section id='resume' className='resume'>
      <PageHeaderContent
        headerText='My resume'
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Resume;
