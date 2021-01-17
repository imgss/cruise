import React from 'react';
import { css } from '@emotion/css';

interface TagProps {
  children?: string,
  onDelete?: () => void
}

const noop = () => {};

export default function Tag(props: TagProps) {
  const {
    children,
    onDelete = noop,
  } = props;

  return (
    <span
      className={css`
        background: #efefef;
        margin: 0 6px;
        padding: 0px 6px;
        line-height: 30px;
        vertical-align: middle;
        i{
          margin-left: 4px;
          cursor: pointer;
        }
      `}
      onClick={() => onDelete()}
    >
      {children}
      <i className="icon-trash" />
    </span>
  );
}
