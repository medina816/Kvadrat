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
  const startDate = '2025-05-12';
  const endDate = '2025-05-22';

  const { data, isLoading, isError } = useGetMetricsQuery({ startDate, endDate });

  console.log(data);

  const totalCount = [
  { date: "2025-05-20", visits: 20 },
  { date: "2025-05-22", visits: 20 },
  { date: "2025-05-23", visits: 21 },
  { date: "2025-05-24", visits: 18 },
  { date: "2025-05-25", visits: 30 },
];
  

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
       <div className="bg-[#2a2a2a] p-6 rounded-xl">
      <h3 className="text-xl mb-4"></h3>
      <ResponsiveContainer width="100%" height={118}>
        <LineChart data={totalCount}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis
            dataKey="date"
            stroke="#ccc"
            tick={{ fontSize: 12 }}
            tickFormatter={(date) => date.slice(5)} // "06-21"
          />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="visits"
            stroke="#3b82f6"
            dot={{ r: 3, stroke: '#fff', strokeWidth: 1 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

      {/* Статистика */}
      <div className=" flex gap-[18px]">
        <div className="bg-[#2a2a2a] w-[172px] h-[87px] p-4 rounded-xl">
          <h3 className="text-clip text-gray-200">Посещение</h3>
          <p className="text-3xl font-bold">{visits}</p>
        </div>
        <div className="bg-[#2a2a2a] w-[174px] h-[86px] p-1 rounded-xl">
          <h3 className="text-clip text-gray-200">Просмотры страниц</h3>
          <p className="text-3xl font-mono">{pageViews}</p>
        </div>
      </div>

      

      {/* Pie Chart */}
      <div className="bg-[#2a2a2a] w-[593px] h-[441px] p-6 rounded-xl">
        <h3 className="text-xl mb-10">Тип посетителей</h3>
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
