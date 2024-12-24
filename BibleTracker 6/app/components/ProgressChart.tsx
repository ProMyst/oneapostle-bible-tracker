'use client'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

interface ProgressChartProps {
  progress: number;
  title: string;
}

export default function ProgressChart({ progress, title }: ProgressChartProps) {
  const data = [
    { name: 'Read', value: progress },
    { name: 'Unread', value: 100 - progress },
  ];

  const COLORS = ['#3D52A0', '#EDE8F5'];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold text-[#3D52A0] mb-4">{title}</h2>
      <div className="w-48 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-lg font-medium text-[#3D52A0]">{progress.toFixed(1)}% Complete</p>
    </div>
  )
}

