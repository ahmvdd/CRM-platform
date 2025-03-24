import { ArrowUpRight, Users, DollarSign, BarChart3, Clock } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Chiffre d'affaires</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">135 600 €</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 font-medium inline-flex items-center">
              +12.5% <ArrowUpRight className="h-3 w-3 ml-1" />
            </span>{" "}
            par rapport au mois dernier
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Nouveaux clients</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+24</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 font-medium inline-flex items-center">
              +8.2% <ArrowUpRight className="h-3 w-3 ml-1" />
            </span>{" "}
            par rapport au mois dernier
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Taux de conversion</CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24.5%</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 font-medium inline-flex items-center">
              +2.1% <ArrowUpRight className="h-3 w-3 ml-1" />
            </span>{" "}
            par rapport au mois dernier
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Cycle de vente</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">18 jours</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 font-medium inline-flex items-center">
              -2.5 jours <ArrowUpRight className="h-3 w-3 ml-1" />
            </span>{" "}
            par rapport au mois dernier
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

