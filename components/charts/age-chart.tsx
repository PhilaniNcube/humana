"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

export default function AgeChart() {
  const data = [
    { age: "15-19", count: 42, percentage: (42 / 352) * 100 },
    { age: "20-25", count: 197, percentage: (197 / 352) * 100 },
    { age: "26-35", count: 112, percentage: (112 / 352) * 100 },
    { age: "35+", count: 1, percentage: (1 / 352) * 100 },
  ]

  return (
    <ChartContainer
      config={{
        percentage: {
          label: "Percentage",
          color: "hsl(31, 90%, 54%)",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="age" />
          <YAxis tickFormatter={(value) => `${value}%`} domain={[0, 100]} />
          <Tooltip content={<ChartTooltipContent />} formatter={(value:number) => [`${value.toFixed(1)}%`, "Percentage"]} />
          <Bar
            dataKey="percentage"
            fill="var(--color-percentage)"
            radius={[4, 4, 0, 0]}
            label={{
              position: "top",
              formatter: (value: number) => `${value.toFixed(1)}%`,
              fontSize: 12,
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
