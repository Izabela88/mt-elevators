import React from 'react';
import styles from './Contact.module.css';
import Form from './Form/Form';
import img from '../../assets/images/imgbw.jpg';
import email from '../../assets/icons/email.svg';
import phone from '../../assets/icons/phone.svg';
import address from '../../assets/icons/location.svg';
import { UpSquareOutlined } from '@ant-design/icons';
import { Link } from 'react-scroll';

export default function Contact() {
  return (
    <section
      id='contact'
      className={styles.contact}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={styles.box}></div>
      <div className={styles.container}>
        <div className={styles.headings}>
          <h1>Questions?</h1>
          <h2>Stay in touch!</h2>
        </div>
        <div className={styles.contact__box}>
          <div className={styles.form__box}>
            <Form />
          </div>

          <div className={styles.form__icons}>
            <div className={styles.icon}>
              <img src={email} alt='' />
            </div>
            <p> mtelevators.com</p>
            <div className={styles.icon}>
              <img src={phone} alt='' />
            </div>
            <p>07922107053</p>
            <div className={styles.icon}>
              <img src={address} alt='' />
            </div>
            <p>
              Office 222 <br /> 26 Cheering Lane <br /> E20 1BD London
            </p>
          </div>
        </div>
        <div className={styles.text}>
          Icons from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
        <Link to='home' smooth='easeInOutCubic' duration={2500}>
          <div className={styles.top__btn}>
            <UpSquareOutlined />
          </div>
        </Link>
      </div>
    </section>
  );
}
