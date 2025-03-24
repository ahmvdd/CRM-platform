"use client"

import { useTheme } from "@/components/theme-provider"
import { Area, AreaChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: 12000,
    target: 15000,
    lastYear: 10000,
  },
  {
    name: "Fév",
    total: 18000,
    target: 17000,
    lastYear: 14000,
  },
  {
    name: "Mar",
    total: 16000,
    target: 18000,
    lastYear: 12000,
  },
  {
    name: "Avr",
    total: 22000,
    target: 20000,
    lastYear: 15000,
  },
  {
    name: "Mai",
    total: 28000,
    target: 22000,
    lastYear: 18000,
  },
  {
    name: "Juin",
    total: 25000,
    target: 24000,
    lastYear: 20000,
  },
  {
    name: "Juil",
    total: 32000,
    target: 28000,
    lastYear: 22000,
  },
  {
    name: "Août",
    total: 30000,
    target: 30000,
    lastYear: 24000,
  },
  {
    name: "Sep",
    total: 35000,
    target: 32000,
    lastYear: 26000,
  },
  {
    name: "Oct",
    total: 42000,
    target: 36000,
    lastYear: 30000,
  },
  {
    name: "Nov",
    total: 38000,
    target: 38000,
    lastYear: 32000,
  },
  {
    name: "Déc",
    total: 48000,
    target: 40000,
    lastYear: 36000,
  },
]

export function SalesChart() {
  const { theme } = useTheme()

  // Déterminer les couleurs en fonction du thème
  const getColors = () => {
    if (theme === "dark") {
      return {
        total: "hsl(var(--primary))",
        target: "hsl(var(--muted-foreground))",
        lastYear: "hsl(var(--accent))",
        grid: "hsl(var(--border))",
        text: "hsl(var(--foreground))",
      }
    } else if (theme === "medium") {
      return {
        total: "hsl(var(--primary))",
        target: "hsl(var(--muted-foreground))",
        lastYear: "hsl(var(--accent))",
        grid: "hsl(var(--border))",
        text: "hsl(var(--foreground))",
      }
    } else {
      return {
        total: "hsl(var(--primary))",
        target: "hsl(var(--muted-foreground))",
        lastYear: "hsl(var(--accent))",
        grid: "hsl(var(--border))",
        text: "hsl(var(--foreground))",
      }
    }
  }

  const colors = getColors()

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <defs>
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors.total} stopOpacity={0.8} />
              <stop offset="95%" stopColor={colors.total} stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
          <XAxis
            dataKey="name"
            stroke={colors.text}
            fontSize={12}
            tickLine={false}
            axisLine={{ stroke: colors.grid }}
          />
          <YAxis
            stroke={colors.text}
            fontSize={12}
            tickLine={false}
            axisLine={{ stroke: colors.grid }}
            tickFormatter={(value) => `${value / 1000}k`}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">{payload[0].name}</span>
                        <span className="font-bold text-primary">{formatCurrency(payload[0].value as number)}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Objectif</span>
                        <span className="font-bold">{formatCurrency(payload[1].value as number)}</span>
                      </div>
                      <div className="flex flex-col col-span-2">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">Année précédente</span>
                        <span className="font-bold">{formatCurrency(payload[2].value as number)}</span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Area
            type="monotone"
            dataKey="total"
            stroke={colors.total}
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorTotal)"
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke={colors.target}
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
          <Line type="monotone" dataKey="lastYear" stroke={colors.lastYear} strokeWidth={2} dot={false} />
          <Legend
            content={() => (
              <div className="flex justify-center mt-2 space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mr-2" />
                  <span className="text-sm">Ventes actuelles</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground mr-2" />
                  <span className="text-sm">Objectif</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-accent mr-2" />
                  <span className="text-sm">Année précédente</span>
                </div>
              </div>
            )}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

