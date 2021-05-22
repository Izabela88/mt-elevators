import React from 'react';
import styles from './Services.module.css';
import Cards from './Cards/Cards';

export default function Services() {
  return (
    <section id='services' className={styles.services}>
      <div className={styles.container}>
        <Cards />
      </div>
    </section>
  );
}
