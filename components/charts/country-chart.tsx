"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

export default function CountryChart() {
  const total = 352
  const data = [
    { country: "Nigeria", count: 114, percentage: (114 / total) * 100 },
    { country: "Algeria", count: 75, percentage: (75 / total) * 100 },
    { country: "Rwanda", count: 32, percentage: (32 / total) * 100 },
    { country: "Uganda", count: 29, percentage: (29 / total) * 100 },
    { country: "Kenya", count: 22, percentage: (22 / total) * 100 },
  ]

  return (
    <ChartContainer
      config={{
        percentage: {
          label: "Percentage",
          color: "hsl(186, 100%, 40%)",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" tickFormatter={(value) => `${value}%`} domain={[0, 100]} />
          <YAxis type="category" dataKey="country" width={80} />
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
