import React, { ReactEventHandler, ReactNode } from 'react';
import { cx, css } from '@emotion/css';

interface ButtonProps {
  children: ReactNode,
  icon?: string,
  type?: string,
  style?: React.CSSProperties,
  onClick?: ReactEventHandler
}

export default function Button(props: ButtonProps) {
  const {
    children,
    icon,
    style,
    type = 'default',
    onClick,
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
        .icon {
          position: relative;
          top: 1px;
          margin-right: ${children ? '6px' : 0}
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
      style={style}
      onClick={onClick}
    >
      {
        icon && <i className={`icon icon-${icon}`} />
      }
      {children}
    </button>
  );
}
