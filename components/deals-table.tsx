"use client"

import { MoreHorizontal, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const deals = [
  {
    id: "1",
    name: "Projet d'expansion",
    company: "Tech Solutions",
    contact: "Jean Dupont",
    amount: "45 000 €",
    stage: "Proposition",
    probability: 75,
    closeDate: "15/06/2025",
  },
  {
    id: "2",
    name: "Renouvellement licence",
    company: "Marketing Pro",
    contact: "Marie Lefebvre",
    amount: "12 500 €",
    stage: "Négociation",
    probability: 90,
    closeDate: "30/04/2025",
  },
  {
    id: "3",
    name: "Implémentation CRM",
    company: "Finance Corp",
    contact: "Pierre Martin",
    amount: "28 000 €",
    stage: "Qualification",
    probability: 50,
    closeDate: "10/07/2025",
  },
  {
    id: "4",
    name: "Refonte site web",
    company: "Design Studio",
    contact: "Sophie Bernard",
    amount: "18 500 €",
    stage: "Prospection",
    probability: 30,
    closeDate: "22/08/2025",
  },
  {
    id: "5",
    name: "Solution e-commerce",
    company: "Retail Group",
    contact: "Thomas Petit",
    amount: "35 000 €",
    stage: "Proposition",
    probability: 65,
    closeDate: "05/05/2025",
  },
]

interface DealsTableProps {
  limit?: number
}

export default function DealsTable({ limit }: DealsTableProps) {
  const displayDeals = limit ? deals.slice(0, limit) : deals

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Affaire</TableHead>
          <TableHead className="hidden md:table-cell">Montant</TableHead>
          <TableHead className="hidden lg:table-cell">Étape</TableHead>
          <TableHead className="hidden lg:table-cell">Probabilité</TableHead>
          <TableHead className="hidden md:table-cell">Date de clôture</TableHead>
          <TableHead className="w-12"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {displayDeals.map((deal) => (
          <TableRow key={deal.id}>
            <TableCell>
              <div>
                <div className="font-medium">{deal.name}</div>
                <div className="text-sm text-muted-foreground">{deal.company}</div>
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">{deal.amount}</TableCell>
            <TableCell className="hidden lg:table-cell">
              <Badge
                variant={
                  deal.stage === "Négociation"
                    ? "default"
                    : deal.stage === "Proposition"
                      ? "secondary"
                      : deal.stage === "Qualification"
                        ? "outline"
                        : "destructive"
                }
              >
                {deal.stage}
              </Badge>
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <div className="flex items-center gap-2">
                <Progress value={deal.probability} className="h-2 w-16" />
                <span className="text-sm">{deal.probability}%</span>
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">{deal.closeDate}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    Voir les détails
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Modifier</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Supprimer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

DealsTable.defaultProps = {
  limit: undefined,
}

