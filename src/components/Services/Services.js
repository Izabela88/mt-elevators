import React from 'react';
import styles from './Services.module.css';
import Card from './Card/Card';
import icon1 from '../../assets/icons/icon1.svg';
import icon2 from '../../assets/icons/icon2.svg';

export default function Services() {
  return (
    <section id='services' className={styles.services}>
      <div className={styles.container}>
        <div className={styles.cards}>
          <Card src={icon1} text='Plan' />
          <Card src={icon2} text='Service' />
          <Card />
        </div>
      </div>
    </section>
  );
}
