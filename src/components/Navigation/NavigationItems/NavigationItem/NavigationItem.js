import React from 'react';
import styles from './NavigationItem.module.css';
import { Link } from 'react-scroll';

export default function NavigationItem(props) {
  return (
    <li className={styles.navigation__item}>
      <Link
        activeClass={styles.active}
        to={props.id}
        spy={true}
        smooth='easeInOutCubic'
        duration={1500}
      >
        {props.children}
      </Link>
    </li>
  );
}
