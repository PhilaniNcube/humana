"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

export default function InvolvementChart() {
  const total = 352
  const data = [
    { name: "TVET Students", value: 156, percentage: (156 / total) * 100 },
    { name: "TVET Graduates", value: 82, percentage: (82 / total) * 100 },
    { name: "Interested in joining", value: 114, percentage: (114 / total) * 100 },
  ]

  return (
    <ChartContainer
      config={{
        students: {
          label: "TVET Students",
          color: "hsl(31, 90%, 54%)",
        },
        graduates: {
          label: "TVET Graduates",
          color: "hsl(186, 100%, 40%)",
        },
        interested: {
          label: "Interested in joining",
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
            label={({ name, percentage }) => `${percentage.toFixed(1)}%`}
            labelLine={true}
          >
            <Cell key="students" fill="var(--color-students)" />
            <Cell key="graduates" fill="var(--color-graduates)" />
            <Cell key="interested" fill="var(--color-interested)" />
          </Pie>
          <Tooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
