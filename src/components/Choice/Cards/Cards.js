import React from 'react';
import styles from './Cards.module.css';
import icon from '../../../assets/icons/icon-2.svg';
import icon2 from '../../../assets/icons/icon-8.svg';
import icon3 from '../../../assets/icons/icon-1.svg';
import icon4 from '../../../assets/icons/icon-5.svg';
import icon5 from '../../../assets/icons/icon-7.svg';

const cardItems = [
  {
    id: 1,
    title: 'Professional Team',
    image: icon,
  },
  {
    id: 2,
    title: 'Wide range of services',
    image: icon2,
  },
  {
    id: 3,
    title: 'Statisfied Customers',
    image: icon3,
  },
  {
    id: 4,
    title: 'SafeContractor',
    image: icon4,
  },
  {
    id: 5,
    title: 'NICEIC Approved Contractor',
    image: icon5,
  },
];

export default function Cards() {
  return (
    <div className={styles.cards}>
      {cardItems.map((card, index) => (
        <div className={styles.card} key={card.id}>
          <div className={styles.card__icon}>
            <img src={card.image} alt='Card Slides' />
          </div>
          <div className={styles.card__title}>
            <h1>{card.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
