"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

export default function SectorChart() {
  const total = 352
  const data = [
    { sector: "Hospitality & Tourism", count: 111, percentage: (111 / total) * 100 },
    { sector: "ICT", count: 43, percentage: (43 / total) * 100 },
    { sector: "Engineering", count: 23, percentage: (23 / total) * 100 },
    { sector: "Electrical", count: 23, percentage: (23 / total) * 100 },
    { sector: "Agriculture", count: 20, percentage: (20 / total) * 100 },
  ]

  return (
    <ChartContainer
      config={{
        percentage: {
          label: "Percentage",
          color: "hsl(0, 100%, 47%)",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" tickFormatter={(value) => `${value}%`} domain={[0, 100]} />
          <YAxis
            type="category"
            dataKey="sector"
            width={120}
            tickFormatter={(value) => (value.length > 15 ? `${value.slice(0, 15)}...` : value)}
          />
          <Tooltip content={<ChartTooltipContent />} formatter={(value:number) => [`${value.toFixed(1)}%`, "Percentage"]} />
          <Bar
            dataKey="percentage"
            fill="var(--color-percentage)"
            radius={[0, 4, 4, 0]}
            label={{
              position: "right",
              formatter: (value:number) => `${value.toFixed(1)}%`,
              fontSize: 12,
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
