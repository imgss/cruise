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
        position: relative;
        padding-top: 20px;
        box-sizing: border-box;
        width: 280px;
        height: 100%;
        color: #fff;
      `}
    >
      {
        menus.map((menu) => <MenuItem key={menu.text} {...menu} />)
      }
      <section
        className={css`
          color: #ccc;
          padding-left: 16px;
          width: 280px;
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          ul{
            padding-inline-start: 16px;
          }
          li{
            text-overflow: ellipsis;
            line-height: 1.8em;
            white-space: nowrap;
            oveflow: hidden;
          }
          .title{
            font-size: 20px;
          }
        `}
      >
        <div className="title">History</div>
        <ul>
          {
            Array.from({ length: 10 }).map((i) => <li>bjstdmngbdr10/Acceptance_test</li>)
          }
        </ul>
      </section>
    </aside>
  );
}
