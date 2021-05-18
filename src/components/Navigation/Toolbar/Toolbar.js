import React from 'react';
import styles from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

export default function Toolbar() {
  return (
    <header className={styles.toolbar}>
      <nav className={styles.desktop__only}>
        <NavigationItems />
      </nav>
    </header>
  );
}
