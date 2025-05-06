'use client'

import React from 'react'
import {
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'

interface DataItem {
  value: number;
  label: string;
}

interface DataVisualizationProps {
  data: DataItem[];
  type?: 'radar'; // Only supporting radar type now
  title?: string;
}

const DataVisualization = ({ data, title }: DataVisualizationProps) => {
  
  // For pie chart, prepare the data
  const pieData = data.map(item => ({
    name: item.label,
    value: item.value
  }));
  
  return (
    <div className="w-full">
      {title && (
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-medium">{title}</h4>
        </div>
      )}
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis 
              dataKey="label" 
              tick={{ fill: '#4b5563', fontSize: 12 }}
              style={{ 
                fontSize: '12px',
                fontWeight: 500
              }}
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 100]} 
              tick={{ fill: '#6b7280' }}
              tickFormatter={(value) => `${value}%`}
              stroke="#d1d5db"
            />
            <Radar
              name="Percentage"
              dataKey="value"
              stroke="#F38E22"
              fill="#F38E22"
              fillOpacity={0.6}
              animationDuration={1200}
              animationEasing="ease-in-out"
            />
            <RechartsTooltip 
              formatter={(value) => [`${value}%`, 'Percentage']}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '4px',
                padding: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            />
            <Legend 
              iconType="circle"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ paddingTop: '20px' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DataVisualization
