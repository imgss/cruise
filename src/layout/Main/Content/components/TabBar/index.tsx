import React from 'react';
import { css } from '@emotion/css';

const styles = {
  tabBar: css`
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    .tab{
      display: flex;
      .tabItem{
        text-align: center;
        width: 80px;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        border-right: 1px solid #eee;
        &.active{
          border-bottom: 2px solid #00b4cf;
          color: #00b4cf;
        }
      }
    }
    .icons i{
      margin-right: 20px;
      font-size: 18px;
      &.active{
        color: #00b4cf;
      }
    }
  `,
  search: css`
    background: #eee;
    padding: 6px;
    margin-left: 20px;
    width: 200px;
    i {
      color: #aaa;
      margin-right: 10px;
    }
    input{
      border: none;
      background: transparent;
      &:focus{
        outline: none;
      }
    }
  `,
};

export default function TabBar() {
  return (
    <div className={styles.tabBar}>
      <div className="tab">
        <div className="tabItem active">All</div>
        <div className="tabItem">Physical</div>
        <div className="tabItem">Virtual</div>
      </div>
      <div style={{ flex: 1 }}>
        <div className={styles.search}>
          <i className="icon-search" />
          <input type="text" />
        </div>
      </div>

      <div className="icons">
        <i className="icon-th-card" />
        <i className="icon-th-list active" />
      </div>
    </div>
  );
}
