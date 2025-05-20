import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

import { useGetMetricsQuery } from '../../app/services/ManeAdmin';

const COLORS = ['#ef4444', '#ffffff'];

const ManeAdminMetric = () => {
  const startDate = '2025-05-13';
  const endDate = '2025-05-20';

  const { data, isLoading, isError } = useGetMetricsQuery({ startDate, endDate });

  console.log(data);
  

  if (isLoading) return <p className="text-gray-300">Жүктөлүүдө...</p>;
  if (isError) return <p className="text-red-400">Ката кетти!</p>;
  if (!data) return <p>Дата табылган жок!</p>;

  const {
    newUsersCount = 0,
    returningUsersCount = 0,
    pageViews = 0,
    visits = 0,
    userTypePercentages = {}
  } = data;

  const pieData = [
    { name: 'Жаңы посетителдер', value: newUsersCount },
    { name: 'Кайра киргендер', value: returningUsersCount },
  ];

  return (
    <div className="bg-[#1e1e1e] text-white p-6 rounded-xl flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Метрика сайта</h2>
        <span className="text-sm text-gray-400">{startDate} - {endDate}</span>
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#2a2a2a] p-4 rounded-xl">
          <h3 className="text-lg text-gray-300">Посещение</h3>
          <p className="text-3xl font-bold">{visits}</p>
        </div>
        <div className="bg-[#2a2a2a] p-4 rounded-xl">
          <h3 className="text-lg text-gray-300">Просмотры страниц</h3>
          <p className="text-3xl font-bold">{pageViews}</p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-[#2a2a2a] p-6 rounded-xl">
        <h3 className="text-xl mb-4">Тип посетителей</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-2 text-sm text-gray-400 text-center">
          {userTypePercentages.NEW} жаңы • {userTypePercentages.RETURNING} кайтып келген
        </div>
      </div>
    </div>
  );
};

export default ManeAdminMetric;
