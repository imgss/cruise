import React from 'react';
import { css, keyframes } from '@emotion/css';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default function Cards() {
  return (
    <div className={css`
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      .card{
        background: #fff;
        width: 270px;
        height: 130px;
        box-sizing: border-box;
        position: relative;
        &.yellow{
          background: #ff9a2a;
        }
        .rotate{
          display: inline-block;
          animation: ${rotate} 20s infinite linear;
          animation-fill-mode: forwards;
        }
        &.green{
          background: #7fbc39;
        }
        &.status{
          color: #fff;
          font-size: 18px;
          text-align: center;
          i{
            font-size: 144px;
            opacity: 0.2;
            position: relative;
            top: -10px;
          }
          span:first-child{
            position: absolute;
            font-weight: bold;
            top: 10px;
            left: 10px;
          }
          span:last-child{
            position: absolute;
            font-size: 48px;
            bottom: 20px;
            right: 10px;
          }
        }
        &.table{
          display: flex;
          justify-content: space-between;
          padding: 0 16px;
          li{
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align: center;
            height: 100%;
            .count{
              font-size: 20px;
              font-weight: bold;
            }
          }
        }
      }
    `}
    >
      <div className="card yellow status">
        <span>Building</span>
        <i className="icon-cog rotate" />
        <span>3</span>
      </div>
      <div className="card green status">
        <span>Idle</span>
        <i className="icon-coffee" />
        <span>5</span>
      </div>
      <div className="card table">
        <li>
          <span>ALL</span>
          <span className="count">8</span>
        </li>
        <li>
          <span>PHYSICAL</span>
          <span className="count">4</span>
        </li>
        <li>
          <span>VIRTUAL</span>
          <span className="count">4</span>
        </li>
      </div>
    </div>
  );
}
