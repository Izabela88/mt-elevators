import React from 'react';

import styles from './Home.module.css';
import hero from '../../assets/images/hero.jpg';

export default function HomePage() {
  return (
    <section className={styles.home} id='home'>
      <div className={styles.image}>
        <img src={hero} alt='Hero' />
      </div>

      <div className={styles.heading}>
        <div className={styles.heading1}>
          <h1>welcome to</h1> <br />
        </div>
        <div className={styles.heading2}>
          <h2>
            <span>MT</span> Elevators Ltd
          </h2>
          <h3>
            plan, installation, modenization, service and repair of elevators
          </h3>
        </div>
      </div>

      <div className={styles.text}>
        <p>Take Yourself To A Higher Level</p>

        <div className={styles.btn}>
          <a href='/'>More</a>
        </div>
      </div>
    </section>
  );
}
