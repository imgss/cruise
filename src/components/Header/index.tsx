import React from 'react';
import logo from 'assets/logo/logo.svg';
import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
    </header>
  );
}
