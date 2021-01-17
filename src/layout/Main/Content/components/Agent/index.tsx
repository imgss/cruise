import React from 'react';
import { css, cx } from '@emotion/css';
import Tag from 'components/Tag';
import Button from 'components/Button';

import centosImg from 'assets/os icons/cent_os.png';
import debinImg from 'assets/os icons/debin.png';
import suseImg from 'assets/os icons/suse.png';
import ubuntuImg from 'assets/os icons/ubuntu.png';
import windowsImg from 'assets/os icons/windows.png';

type OS = 'centos' | 'debian' | 'suse' | 'ubuntu' | 'windows';
type Status = 'idle' | 'building';

const osIconMap = {
  centos: centosImg,
  debian: debinImg,
  suse: suseImg,
  ubuntu: ubuntuImg,
  windows: windowsImg,
};

export interface AgentData {
  name: string,
  os: OS,
  status: Status,
  type: string,
  ip: string,
  location: string,
  resources: string[],
  id: number
}

interface AgentProps {
  data: AgentData
}

const styles = {
  content: css`
    background: #fff;
    padding: 16px;
    margin-bottom: 16px;
    display: flex;
    vertical-align: middle;
    >div{
      flex: 1;
      margin-left: 16px;
    }
    .name{
      color: #00b4cf;
      font-weight: bold;
    }
    .status{
      margin: 0 10px;
      color: #fff;
      padding: 0 3px;
    }
  `,
  idle: css`
    background: rgb(242, 158, 70);
  `,
  building: css`
    background: rgb(141, 185, 79);
  `,
  opreation: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .btns{
      display: flex;
      div:first-child{
        flex: 1 1 auto;
        display: flex;
        align-items: center;
      }
    }
  `,
  state: css`
    display: flex;
    gap: 30px;
    i {
      color: #ccc;
      font-size: 18px;
      margin-right: 6px;
      transform: translateY(3px);
      position: relative;
      top: 2px;
    }
  `,
};

export default function Agent(props: AgentProps) {
  const {
    data,
  } = props;

  return (
    <div
      className={styles.content}
    >
      <img src={osIconMap[data.os]} alt="os" />
      <div className={styles.opreation}>
        <div className={styles.state}>
          <span className="name">
            <i className="icon-desktop" />
            {data.name}
          </span>
          <span className={cx('status', styles[data.status])}>
            {data.status}
          </span>
          <span>
            <i className="icon-info" />
            {data.ip}
          </span>
          <span>
            <i className="icon-folder" />
            {data.location}
          </span>
        </div>

        <div className="btns">
          <div>
            <Button>
              <i className="icon-plus" style={{ fontSize: '18px' }} />
            </Button>
            {
              data.resources.map((resource) => <Tag>{resource}</Tag>)
            }
          </div>
          <Button icon="deny">Deny</Button>
        </div>
      </div>
    </div>
  );
}
