"use client"

import * as React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ChartTooltipContentProps {
  children: React.ReactNode
}

const ChartTooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className={className} {...props} ref={ref}>
              {children}
            </div>
          </TooltipTrigger>
          <TooltipContent>{children}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

interface ChartTooltipProps {
  children: React.ReactNode
}

const ChartTooltip = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={className} {...props} ref={ref}>
        {children}
      </div>
    )
  },
)
ChartTooltip.displayName = "ChartTooltip"

interface ChartLegendItemProps {
  children: React.ReactNode
}

export const ChartLegendItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={className} {...props} ref={ref}>
        {children}
      </div>
    )
  },
)
ChartLegendItem.displayName = "ChartLegendItem"

interface ChartLegendProps {
  children: React.ReactNode
}

const ChartLegend = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={className} {...props} ref={ref}>
        {children}
      </div>
    )
  },
)
ChartLegend.displayName = "ChartLegend"

interface ChartContainerProps {
  children: React.ReactNode
}

const ChartContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={className} {...props} ref={ref}>
        {children}
      </div>
    )
  },
)
ChartContainer.displayName = "ChartContainer"

interface ChartProps {
  children: React.ReactNode
}

const Chart = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={className} {...props} ref={ref}>
        {children}
      </div>
    )
  },
)
Chart.displayName = "Chart"

