import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import TabBar from './components/TabBar';
import Cards from './components/Cards';
import Agent, { AgentData } from './components/Agent';

export default function Content() {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/agents')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAgents(data);
      });
  }, []);

  return (
    <div
      className={css`
        flex: 1;
        padding: 16px;
        box-sizing: border-box;
        overflow-y: auto;
        height: 100%;
      `}
    >
      <Cards />
      <TabBar />
      {
        agents.map((agent: AgentData) => (
          <Agent
            key={agent.id}
            data={agent}
          />
        ))
      }
    </div>
  );
}
