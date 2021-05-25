import React from 'react';
import styles from './Choice.module.css';
import img from '../../assets/images/img7.jpg';

export default function Choice() {
  return (
    <section
      className={styles.choice}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* <div className={styles.box1}></div> */}
      <div className={styles.box2}></div>
      <div className={styles.container}>
        <div className={styles.headings}>
          <h1>Why Choose Us?</h1>
          <h2> It's simple!</h2>
        </div>
      </div>
    </section>
  );
}
