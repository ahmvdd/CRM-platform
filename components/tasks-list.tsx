"use client"

import { useState } from "react"
import { MoreHorizontal, Calendar, Clock, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const tasks = [
  {
    id: "1",
    title: "Appeler Jean Dupont",
    dueDate: "Aujourd'hui",
    dueTime: "14:00",
    priority: "Haute",
    status: "En cours",
    assignee: "Sophie Martin",
    completed: false,
  },
  {
    id: "2",
    title: "Envoyer proposition à Marketing Pro",
    dueDate: "Aujourd'hui",
    dueTime: "17:00",
    priority: "Haute",
    status: "En cours",
    assignee: "Thomas Dubois",
    completed: false,
  },
  {
    id: "3",
    title: "Préparer présentation Finance Corp",
    dueDate: "Demain",
    dueTime: "10:00",
    priority: "Moyenne",
    status: "À faire",
    assignee: "Julie Leroy",
    completed: false,
  },
  {
    id: "4",
    title: "Réunion équipe ventes",
    dueDate: "15/04/2025",
    dueTime: "09:00",
    priority: "Normale",
    status: "À faire",
    assignee: "Nicolas Petit",
    completed: false,
  },
  {
    id: "5",
    title: "Suivre paiement Retail Group",
    dueDate: "16/04/2025",
    dueTime: "11:00",
    priority: "Moyenne",
    status: "À faire",
    assignee: "Emma Blanc",
    completed: false,
  },
  {
    id: "6",
    title: "Mettre à jour base de données clients",
    dueDate: "12/04/2025",
    dueTime: "16:00",
    priority: "Basse",
    status: "Terminée",
    assignee: "Sophie Martin",
    completed: true,
  },
  {
    id: "7",
    title: "Envoyer facture à Design Studio",
    dueDate: "10/04/2025",
    dueTime: "15:30",
    priority: "Haute",
    status: "Terminée",
    assignee: "Thomas Dubois",
    completed: true,
  },
]

interface TasksListProps {
  limit?: number
  filter?: "today" | "upcoming" | "completed"
}

export default function TasksList({ limit, filter }: TasksListProps) {
  const [completedTasks, setCompletedTasks] = useState<string[]>(
    tasks.filter((task) => task.completed).map((task) => task.id),
  )

  const toggleTaskCompletion = (id: string) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter((taskId) => taskId !== id))
    } else {
      setCompletedTasks([...completedTasks, id])
    }
  }

  let filteredTasks = tasks

  if (filter === "today") {
    filteredTasks = tasks.filter((task) => task.dueDate === "Aujourd'hui")
  } else if (filter === "upcoming") {
    filteredTasks = tasks.filter((task) => task.dueDate !== "Aujourd'hui" && !task.completed)
  } else if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed || completedTasks.includes(task.id))
  }

  const displayTasks = limit ? filteredTasks.slice(0, limit) : filteredTasks

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12"></TableHead>
          <TableHead>Tâche</TableHead>
          <TableHead className="hidden md:table-cell">Échéance</TableHead>
          <TableHead className="hidden lg:table-cell">Priorité</TableHead>
          <TableHead className="hidden lg:table-cell">Assigné à</TableHead>
          <TableHead className="w-12"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {displayTasks.map((task) => (
          <TableRow key={task.id} className={completedTasks.includes(task.id) ? "opacity-60" : ""}>
            <TableCell>
              <Checkbox
                checked={completedTasks.includes(task.id)}
                onCheckedChange={() => toggleTaskCompletion(task.id)}
                aria-label={`Marquer ${task.title} comme ${completedTasks.includes(task.id) ? "non terminée" : "terminée"}`}
              />
            </TableCell>
            <TableCell>
              <div className={completedTasks.includes(task.id) ? "line-through" : ""}>
                <div className="font-medium">{task.title}</div>
                <div className="text-sm text-muted-foreground md:hidden">
                  {task.dueDate} à {task.dueTime}
                </div>
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{task.dueDate}</span>
                <Clock className="ml-4 mr-2 h-4 w-4 text-muted-foreground" />
                <span>{task.dueTime}</span>
              </div>
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <Badge
                variant={
                  task.priority === "Haute" ? "destructive" : task.priority === "Moyenne" ? "default" : "outline"
                }
              >
                {task.priority}
              </Badge>
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              <div className="flex items-center">
                <Avatar className="h-6 w-6 mr-2">
                  <AvatarImage
                    src={`/placeholder.svg?height=24&width=24&text=${task.assignee.charAt(0)}`}
                    alt={task.assignee}
                  />
                  <AvatarFallback>{task.assignee.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{task.assignee}</span>
              </div>
            </TableCell>
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
                    <User className="mr-2 h-4 w-4" />
                    Réassigner
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

TasksList.defaultProps = {
  limit: undefined,
  filter: undefined,
}

