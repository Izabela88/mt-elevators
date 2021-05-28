import React from 'react';
import logo1 from '../../assets/images/Logo.png';
import styles from './Logo.module.css';
import { Link } from 'react-scroll';

const logo = (props) => (
  <div className={styles.logo}>
    <Link smooth='easeInOutCubic' duration={2000} to={props.id}>
      <img src={logo1} alt='Logo' />
    </Link>
  </div>
);

export default logo;
