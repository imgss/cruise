import React, { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/css';
import TabBar from './components/TabBar';
import Cards from './components/Cards';
import Agent, { AgentData } from './components/Agent';

export default function Content() {
  const [agents, setAgents] = useState<AgentData[]>([]);
  useEffect(() => {
    fetch('http://localhost:3001/agents')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAgents(data);
      })
      .catch(() => {
        console.log('err');
      });
  }, []);

  const handleChange = useCallback((data: AgentData) => {
    const idx = agents.findIndex((agent) => agent.id === data.id);
    console.log(data.id, agents, idx);
    return fetch(`http://localhost:3001/agents/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => {
      setAgents([
        ...agents.slice(0, idx),
        data,
        ...agents.slice(idx + 1),
      ]);
      return data;
    });
  }, [setAgents, agents]);

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
            onChange={handleChange}
          />
        ))
      }
    </div>
  );
}
