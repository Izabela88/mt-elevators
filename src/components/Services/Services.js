import React from 'react';
import styles from './Services.module.css';
import Cards from './Cards/Cards';
import bgImg from '../../assets/images/img6.png';

export default function Services() {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      id='services'
      className={styles.services}
    >
      <div className={styles.box}></div>
      <div className={styles.container}>
        <div className={styles.text__box}>
          <h1>OUR SERVICES</h1>
          <p>
            Take a look at our services. <br /> We make every effort to satisfy
            even the most demanding customers.
          </p>
        </div>
        <Cards />
      </div>
    </section>
  );
}
