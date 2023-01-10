import React from 'react';
import CardGrid from '../Cards/CardGrid';
import Title from '../Title/Title';
import './Dashboard.css';

function Dashboard() {
  return (
    <main className="dashboard">
      <Title title="Notas fiscais" subTitle="Visualize as notas fiscais que você tem" />
      <CardGrid />
    </main>
  );
}

export default Dashboard;
