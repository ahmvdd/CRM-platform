"use client"

import { useTheme } from "@/components/theme-provider"
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Prospection → Qualification",
    value: 75,
    color: "hsl(var(--primary))",
  },
  {
    name: "Qualification → Proposition",
    value: 60,
    color: "hsl(var(--primary) / 0.8)",
  },
  {
    name: "Proposition → Négociation",
    value: 45,
    color: "hsl(var(--primary) / 0.6)",
  },
  {
    name: "Négociation → Clôture",
    value: 80,
    color: "hsl(var(--primary) / 0.4)",
  },
]

export function ConversionChart() {
  const { theme } = useTheme()

  // Déterminer les couleurs en fonction du thème
  const getColors = () => {
    if (theme === "dark") {
      return {
        grid: "hsl(var(--border))",
        text: "hsl(var(--foreground))",
      }
    } else if (theme === "medium") {
      return {
        grid: "hsl(var(--border))",
        text: "hsl(var(--foreground))",
      }
    } else {
      return {
        grid: "hsl(var(--border))",
        text: "hsl(var(--foreground))",
      }
    }
  }

  const colors = getColors()

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 30,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} horizontal={true} vertical={false} />
          <XAxis
            type="number"
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            stroke={colors.text}
            fontSize={12}
            tickLine={false}
            axisLine={{ stroke: colors.grid }}
          />
          <YAxis
            dataKey="name"
            type="category"
            width={150}
            stroke={colors.text}
            fontSize={12}
            tickLine={false}
            axisLine={{ stroke: colors.grid }}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Taux de conversion</span>
                      <span className="font-bold text-primary">
                        {payload[0].name}: {payload[0].value}%
                      </span>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

