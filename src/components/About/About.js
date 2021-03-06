import React from 'react';
import styles from './About.module.css';
import image from '../../assets/images/man.png';
import image1 from '../../assets/images/img6.jpg';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-scroll';

export default function AboutPage() {
  return (
    <section
      className={styles.about}
      style={{
        backgroundImage: `url(${image1})`,
      }}
      id='about'
    >
      <div className={styles.box}></div>
      <div className={styles.container}>
        <div className={styles.man__image}>
          <img src={image} alt='A Man' />
        </div>
        <div className={styles.about__text}>
          <h1>A few words about us</h1>
          <p>
            We were founded in 2020. <br /> Our company is distinguished by a
            wide range of services, from design to installation. <br />
            <span>
              {' '}
              We are a member of the NICEIC approved contractor and the
              SafeContractor.
            </span>{' '}
            <br /> Our company is made up of people full of passion and
            willingness to face new challenges. <br /> Fell free to check our
            services!
          </p>
        </div>
        <Link to='services' smooth='easeInOutCubic' duration={1500}>
          <div className={styles.down__icon}>
            <DownOutlined />
          </div>
        </Link>
      </div>
    </section>
  );
}
