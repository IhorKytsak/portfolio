import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContainer/portfolio';

const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <PageHeaderContent
        headerText='My skills'
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};

export default Skills;
