import './cards.css';
import React, { useEffect, useCallback, useState } from 'react';

import icon1 from '../../../assets/icons/icon7.svg';
import icon2 from '../../../assets/icons/icon12.svg';
import icon3 from '../../../assets/icons/icon5.svg';
import icon4 from '../../../assets/icons/icon6.svg';
import icon5 from '../../../assets/icons/icon4.svg';
import icon6 from '../../../assets/icons/icon3.svg';
import icon7 from '../../../assets/icons/icon9.svg';
import icon8 from '../../../assets/icons/icon2.svg';
import icon9 from '../../../assets/icons/icon13.svg';

const cardItems = [
  {
    id: 1,
    title: 'Plan',
    image: icon1,
  },
  {
    id: 2,
    title: 'Installation',
    image: icon2,
  },
  {
    id: 3,
    title: 'Modernization',
    image: icon3,
  },
  {
    id: 4,
    title: 'Service',
    image: icon4,
  },
  {
    id: 5,
    title: 'Fault Finding',
    image: icon5,
  },
  {
    id: 6,
    title: 'Electric services',
    image: icon6,
  },
  {
    id: 7,
    title: 'Repairs',
    image: icon7,
  },
  {
    id: 8,
    title: 'Realization With Certificate',
    image: icon8,
  },
  {
    id: 9,
    title: 'Passenger and Goods Lifts',
    image: icon9,
  },
];

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return 'active';
  } else if (indexes.nextIndex === cardIndex) {
    return 'next';
  } else if (indexes.previousIndex === cardIndex) {
    return 'prev';
  }
  return 'inactive';
}

const Cards = () => {
  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      handleCardTransition();
    }, 2500);

    return () => clearInterval(transitionInterval);
  }, [handleCardTransition, indexes]);

  return (
    <div className='card-carousel'>
      {cardItems.map((card, index) => (
        <div
          key={card.id}
          className={`card ${determineClasses(indexes, index)}`}
        >
          <h2>{card.title}</h2>
          <div className='card__icon'>
            <img src={card.image} alt='Card Slide' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
