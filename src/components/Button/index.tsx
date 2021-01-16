import React from 'react';
import { cx, css } from '@emotion/css';

interface ButtonProps {
  children: string,
  icon?: string,
  type?: string,
}

export default function Button(props: ButtonProps) {
  const {
    children,
    icon,
    type = 'default',
  } = props;

  return (
    <button
      className={cx(type, css`
        text-align: center;
        border: none;
        color: #fff;
        outline: none;
        padding: 5px 10px;
        cursor: pointer;
        i {
          margin-right: 6px;
          position: relative;
          top: 1px;
        }
        &.default{
          background: #00b4cf;
          &:hover{
            background: #01869a;
          }
        }
        &.dark{
          background: #2d4054;
          &:hover{
            background: #435466;
          }
        }
      `)}
      type="button"
    >
      {
        icon && <i className={`icon-${icon}`} />
      }
      {children}
    </button>
  );
}
