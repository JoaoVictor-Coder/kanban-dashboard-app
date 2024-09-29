// /pages/index.tsx
import React from 'react';
import KanbanBoard from '../components/KanbanBoard';

const Home = () => {
  return (
    <div>
      <h1>Plataforma de Tarefas</h1>
      <KanbanBoard />
    </div>
  );
};

export default Home;
