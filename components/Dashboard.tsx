import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Carregar o componente Chart dinamicamente, sem SSR
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Dashboard = () => {
  // Garantir que as séries de dados e as opções são definidas corretamente
  const pieOptions = {
    labels: ['Pendentes', 'Em Progresso', 'Concluídas'],  // Verificar se as labels estão corretas
    colors: ['#FF4560', '#00E396', '#775DD0'],
  };

  // Certifique-se de que os dados da série não estão vazios ou indefinidos
  const pieSeries = [2, 1, 3]; // Exemplo de dados - Verifique se isso está vindo corretamente de uma fonte

  const lineOptions = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['Semana 1', 'Semana 2', 'Semana 3'],  // Verifique se as categorias estão corretas
    },
  };

  const lineSeries = [
    {
      name: 'Concluídas',
      data: [10, 20, 30], // Verifique se o array de dados está correto
    },
  ];

  // Verifique se os dados estão definidos antes de renderizar o gráfico
  if (!pieSeries || !lineSeries || pieSeries.length === 0 || lineSeries.length === 0) {
    return <p>Erro: Dados do gráfico não estão disponíveis.</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Chart options={pieOptions} series={pieSeries} type="pie" width="400" />
        <Chart options={lineOptions} series={lineSeries} type="line" width="600" />
      </div>
    </div>
  );
};

export default Dashboard;
