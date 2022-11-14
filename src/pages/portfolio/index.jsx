import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import { portfolioData, filterData } from './constants';
import './styles.scss';

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id='portfolio' className='portfolio'>
      <PageHeaderContent
        text='My Portfolio'
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className='portfolio__content'>
        <ul className='portfolio__content__filter'>
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? 'active' : ''}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className='portfolio__content__cards'>
          {filteredItems.map((item, index) => (
            <div
              className='portfolio__content__cards__item'
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className='portfolio__content__cards__item__img-wrapper'>
                <a>
                  <img alt='dummy data' src={item.image} />
                </a>
              </div>
              <div className='overlay'>
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
