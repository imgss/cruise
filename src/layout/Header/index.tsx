import React, { useState } from 'react';
import { css } from '@emotion/css';
import logo from 'assets/logo/logo.svg';
import thumb from 'assets/logo/thumb.jpg';
import styles from './styles.module.css';

export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className={styles.header}>
      <div />
      <div>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className={css`
          img+i{
            display: inline-block;
            transition: transform .3s ease;
            font-size: 16px;
            margin-left: 6px;
          }
          &:hover img+i{
            transform: rotate(180deg);
          }
        `}
      >
        <img
          src={thumb}
          alt="thumb"
          className={styles.thumb}
        />
        <i className="icon-angle-down" />
        <div className={css`
              position: absolute;
              display: ${show ? 'block' : 'none'};
              line-height: 2;
              z-index: 20;
              top: 60px;
              left: -30px;
              box-shadow: 0 0 9px #aaa;
              width: 110px;
              background: #fff;
              >div{
                padding: 0 10px;
                &:hover{
                  background-color: #efefef;
                }
                i{
                  width: 20px;
                  display: inline-block;
                }
              }
            `}
        >
          <div>
            <i className="icon-id-card" />
            {' '}
            Profile
          </div>
          <div>
            <i className="icon-sign-in" />
            {' '}
            Sign out
          </div>
        </div>
      </div>
    </header>
  );
}
