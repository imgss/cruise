import React from 'react';
import { css, cx } from '@emotion/css';

export type Menu = {
  icon: string,
  text: string,
  selected: boolean,
}

interface SideBarProps {
  menus: Menu[]
}

function MenuItem(props: Menu) {
  const {
    icon,
    text,
    selected,
  } = props;
  return (
    <div
      className={
        cx(css`
          height: 45px;
          line-height: 45px;
          padding-left: 16px;
          cursor: pointer;
          &:hover{
            color: #00b4cf;
          }
          &.selected{
            color: #00b4cf;
            background: rgb(70, 84, 100);
          }
          i{
            margin-right: 10px;
            font-size: 16px;
          }
        `,
        { selected })
      }
    >
      <i className={`icon-${icon}`} />
      {text}
    </div>
  );
}

export default function SideBar(props: SideBarProps) {
  const { menus = [] } = props;
  return (
    <aside
      className={css`
        background-color: #2d4054;
        padding-top: 20px;
        box-sizing: border-box;
        width: 280px;
        height: 100%;
        color: #fff;
      `}
    >
      {
        menus.map((menu) => <MenuItem {...menu} />)
      }
    </aside>
  );
}
