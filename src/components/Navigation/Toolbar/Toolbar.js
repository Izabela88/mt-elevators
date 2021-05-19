import React from 'react';
import styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

export default function Toolbar() {
  return (
    <header className={styles.toolbar}>
      <div className={styles.logo}>
        <Logo id='home' />
      </div>
      <nav className={styles.desktop__only}>
        <NavigationItems />
      </nav>
    </header>
  );
}
