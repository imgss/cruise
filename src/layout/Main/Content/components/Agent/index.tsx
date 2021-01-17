import React, { useState } from 'react';
import { css, cx } from '@emotion/css';
import Tag from 'components/Tag';
import Button from 'components/Button';
import Popover from 'components/Popover';
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
  data: AgentData,
  onChange(data: AgentData): Promise<AgentData>
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
      >div:first-child{
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
  popover: css`
    width: 540px;
    color: #aaa;
    input{
      margin-bottom: 20px;
      margin-top: 10px;
      width: 500px;
      padding: 8px 16px;
      border: 1px solid #ccc;
    }
  `,
};

export default function Agent(props: AgentProps) {
  const {
    data,
    onChange,
  } = props;
  const [input, setInput] = useState('');

  const deleteResource = (v: string) => {
    const idx = data.resources.findIndex((resource) => resource === v);
    if (idx !== -1) {
      const newResource = [...data.resources.slice(0, idx), ...data.resources.slice(idx + 1)];
      onChange({
        ...data,
        resources: newResource,
      });
    }
  };
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
            <Popover
              content={(setVisible) => {
                const addResource = () => {
                  const resources = input.trim().split(',');
                  if (resources.length) {
                    const newResource = [...data.resources, ...resources];
                    onChange({
                      ...data,
                      resources: newResource,
                    }).then(() => {
                      setVisible(false);
                      setInput('');
                    });
                  }
                };
                return (
                  <div className={styles.popover}>
                    <div>Separate multiple resource name with commas</div>
                    <div>
                      <input type="text" value={input} onInput={(e) => setInput((e.target as HTMLInputElement).value)} />
                    </div>
                    <Button style={{ marginRight: '10px' }} onClick={addResource}>Add Resources</Button>
                    <Button type="dark" onClick={() => setVisible(false)}>Cancel</Button>
                  </div>
                );
              }}
            >
              <Button>
                <i className="icon-plus" style={{ fontSize: '18px' }} />
              </Button>
            </Popover>
            <div style={{ display: 'flex', overflowX: 'scroll', maxWidth: '600px' }}>
              {
                data.resources && data.resources.map((resource) => (
                  <Tag
                    key={resource}
                    onDelete={() => deleteResource(resource)}
                  >
                    {resource}
                  </Tag>
                ))
              }
            </div>
          </div>
          <Button icon="deny">Deny</Button>
        </div>
      </div>
    </div>
  );
}
