import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import { useGetVisitsQuery } from '../../app/services/ManeAdmin';

function ManeAdminChart() {
  const startDate = '2024-06-21';
  const endDate = '2024-06-25';

  const { data, isLoading, isError } = useGetVisitsQuery({ startDate, endDate });

  
  if (isLoading) return <p>Жүктөлүүдө...</p>;
  if (isError) return <p>Ката кетти!</p>;
  if (!Array.isArray(data)) return <p>Дата жараксыз!</p>;

  return (
    <div className="mane-admin-chart" style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#444" strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="visits"
            stroke="#2196f3"
            strokeWidth={2}
            dot={{ fill: '#fff', stroke: '#2196f3', strokeWidth: 2, r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ManeAdminChart;
