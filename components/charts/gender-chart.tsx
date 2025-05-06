"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

export default function GenderChart() {
  const data = [
    { name: "Female", value: 204, percentage: (204 / 352) * 100 },
    { name: "Male", value: 147, percentage: (147 / 352) * 100 },
    { name: "Prefer not to say", value: 1, percentage: (1 / 352) * 100 },
  ]

  return (
    <ChartContainer
      config={{
        female: {
          label: "Female",
          color: "hsl(186, 100%, 40%)",
        },
        male: {
          label: "Male",
          color: "hsl(31, 90%, 54%)",
        },
        preferNotToSay: {
          label: "Prefer not to say",
          color: "hsl(0, 100%, 47%)",
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
            <Cell key="female" fill="var(--color-female)" />
            <Cell key="male" fill="var(--color-male)" />
            <Cell key="preferNotToSay" fill="var(--color-preferNotToSay)" />
          </Pie>
          <Tooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
