import React from 'react';
import { css } from '@emotion/css';

export default function Footer() {
  return (
    <footer className={css`
      text-align: center;
      background-color: #fff;
      height: 30px;
      line-height: 30px;
    `}
    >
      &copy; Copyright 2017 &nbsp;
      <strong>
        Thought
      </strong>
      Works
    </footer>
  );
}
