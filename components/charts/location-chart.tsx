"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

export default function LocationChart() {
  const total = 352
  const data = [
    { name: "Urban", value: 215, percentage: (215 / total) * 100 },
    { name: "Rural", value: 137, percentage: (137 / total) * 100 },
  ]

  return (
    <ChartContainer
      config={{
        urban: {
          label: "Urban",
          color: "hsl(31, 90%, 54%)",
        },
        rural: {
          label: "Rural",
          color: "hsl(136, 100%, 20%)",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
            nameKey="name"
            label={({ name, percentage }) => `${name}: ${percentage.toFixed(1)}%`}
            labelLine={true}
          >
            <Cell key="urban" fill="var(--color-urban)" />
            <Cell key="rural" fill="var(--color-rural)" />
          </Pie>
          <Tooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
