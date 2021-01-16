import React from 'react';
import { css } from '@emotion/css';
import SideBar, { Menu } from 'components/SideBar';
import Content from './Content';

const menus: Menu[] = [{
  icon: 'dashboard',
  text: 'DASHBOARD',
  selected: false,
}, {
  icon: 'sitemap',
  text: 'AGENT',
  selected: true,
}, {
  icon: 'boat',
  text: 'MY CRUISE',
  selected: false,
}, {
  icon: 'life-bouy',
  text: 'HELP',
  selected: false,
}];

export default function Main() {
  return (
    <main className={css`
      background-color: rgb(243,243,243);
      flex: 1;
      overflow-y: scroll;
      max-width: 1280px;
      width: 1200px;
      display: flex;
      margin: 0 auto;
    `}
    >
      <SideBar menus={menus} />
      <Content />
    </main>
  );
}
