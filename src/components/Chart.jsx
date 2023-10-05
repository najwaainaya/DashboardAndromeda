import React from 'react';
import { Bar } from 'react-chartjs-2';


const Chart = ({ data }) => {
  return (
    <div className="chart">
      <Bar data={data} />
    </div>
  );
};

export default Chart;
