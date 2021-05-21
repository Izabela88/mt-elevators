import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon}>
        <img src={props.src} alt={props.alt} />
      </div>

      <div className={styles.card__text}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
