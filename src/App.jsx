import React from 'react';
import './App.css';
import Card from './components/Card';
import Chart from './components/Chart';

const App = () => {
  const cardData = [
    { title: 'Total Pinjaman', content: 'Rp 1.000.000.000' },
    { title: 'Total Simpanan', content: 'Rp 500.000.000' },
    { title: 'Jumlah Anggota', content: '500' },
  ];

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
    datasets: [
      {
        label: 'Total Pinjaman per Bulan',
        data: [10000000, 20000000, 15000000, 25000000, 30000000, 28000000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="app">
      <h1>Koperasi Simpan Pinjam Dashboard</h1>
      <div className="cards">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
      <Chart data={chartData} />
    </div>
  );
};

export default App;
