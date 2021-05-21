import React from 'react';
import styles from './Card.module.css';
import icon from '../../../assets/icons/icon1.svg';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon}>
        <img src={icon} alt={props.alt} />
      </div>
      <div className={styles.card__text}>
        <p>Services</p>
      </div>
    </div>
  );
};

export default Card;
