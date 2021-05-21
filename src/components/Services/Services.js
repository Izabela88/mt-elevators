import React from 'react';
import styles from './Services.module.css';
import Card from './Card/Card';

export default function Services() {
  return (
    <section id='services' className={styles.services}>
      <div className={styles.container}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
