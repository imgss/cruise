import React from 'react';
import logo from 'assets/logo/logo.svg';
import thumb from 'assets/logo/thumb.jpg';
import styles from './styles.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div />
      <div>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div>
        <img
          src={thumb}
          alt="thumb"
          className={styles.thumb}
        />
      </div>
    </header>
  );
}
