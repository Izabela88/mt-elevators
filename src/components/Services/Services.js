import React from 'react';
import styles from './Services.module.css';
import Cards from './Cards/Cards';
import bgImg from '../../assets/images/img5.jpg';

export default function Services() {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      id='services'
      className={styles.services}
    >
      <div className={styles.container}>
        <h1>OUR SERVICES</h1>
        <Cards />
      </div>
    </section>
  );
}
