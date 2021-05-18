import React from 'react';

import styles from './Home.module.css';
import hero from '../../assets/images/hero.jpg';
import LazyHero from 'react-lazy-hero';

export default function HomePage() {
  return (
    <section className={styles.home} id='home'>
      <LazyHero
        className={styles.image}
        imageSrc={hero}
        parallaxOffset={100}
        opacity={0.4}
        color='#000'
        minHeight='100vh'
        transitionDuration={800}
        transitionTimingFunction='ease-in-out'
      >
        <div className={styles.heading}>
          <div className={styles.heading1}>
            <h1>welcome to</h1> <br />
          </div>
          <div className={styles.heading2}>
            <h2>
              <span>MT</span>Elevators
            </h2>

            <h3>
              Plan <br /> Installation <br /> Modenization <br /> Service <br />{' '}
              Repair of Elevators
            </h3>
          </div>
          <div className={styles.text}>
            <p>We will take you to a higher level</p>
            <div className={`${styles.btn} ${styles.btnanm}`}>
              <a href='/'>More</a>
            </div>
          </div>
        </div>
      </LazyHero>
    </section>
  );
}
