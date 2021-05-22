import React from 'react';
import styles from './Cards.module.css';
import Card from '../Card/Card';
import icon1 from '../../../assets/icons/icon7.svg';
import icon2 from '../../../assets/icons/icon12.svg';
import icon3 from '../../../assets/icons/icon5.svg';
import icon4 from '../../../assets/icons/icon6.svg';
import icon5 from '../../../assets/icons/icon4.svg';
import icon6 from '../../../assets/icons/icon3.svg';
import icon7 from '../../../assets/icons/icon9.svg';
import icon8 from '../../../assets/icons/icon2.svg';
import icon9 from '../../../assets/icons/icon13.svg';

const Cards = (props) => {
  return (
    <div className={styles.cards}>
      <Card src={icon1} text='Plan' />
      <Card src={icon2} text='Installation' />
      <Card src={icon3} text='Modernization' />
      <Card src={icon4} text='Service' />
      <Card src={icon5} text='Fault Finding' />
      <Card src={icon6} text='Electric services' />
      <Card src={icon7} text='Repairs' />
      <Card src={icon8} text='Realization With Certificate' />
      <Card src={icon9} text='Passenger and Goods Lifts' />
    </div>
  );
};

export default Cards;
