import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

export default function NavigationItems() {
  return (
    <ul className={styles.navigation__items}>
      <NavigationItem id='home'>Home</NavigationItem>
      <NavigationItem id='about'>About</NavigationItem>
      <NavigationItem id='services'>Services</NavigationItem>
      <NavigationItem id='contact'>Contact</NavigationItem>
    </ul>
  );
}
