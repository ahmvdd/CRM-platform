"use client"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Users, DollarSign, Calendar, Settings, BarChart3, User } from "lucide-react"

interface GlobalSearchProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function GlobalSearch({ open, onOpenChange }: GlobalSearchProps) {
  // Simuler des résultats de recherche
  const contacts = [
    { id: "1", name: "Jean Dupont", email: "jean.dupont@example.com", company: "Tech Solutions" },
    { id: "2", name: "Marie Lefebvre", email: "marie.lefebvre@example.com", company: "Marketing Pro" },
    { id: "3", name: "Pierre Martin", email: "pierre.martin@example.com", company: "Finance Corp" },
  ]

  const deals = [
    { id: "1", name: "Projet d'expansion", company: "Tech Solutions", amount: "45 000 €" },
    { id: "2", name: "Renouvellement licence", company: "Marketing Pro", amount: "12 500 €" },
    { id: "3", name: "Implémentation CRM", company: "Finance Corp", amount: "28 000 €" },
  ]

  const tasks = [
    { id: "1", title: "Appeler Jean Dupont", dueDate: "Aujourd'hui", priority: "Haute" },
    { id: "2", title: "Envoyer proposition à Marketing Pro", dueDate: "Aujourd'hui", priority: "Haute" },
    { id: "3", title: "Préparer présentation Finance Corp", dueDate: "Demain", priority: "Moyenne" },
  ]

  const pages = [
    { id: "1", name: "Tableau de bord", icon: BarChart3 },
    { id: "2", name: "Contacts", icon: Users },
    { id: "3", name: "Affaires", icon: DollarSign },
    { id: "4", name: "Tâches", icon: Calendar },
    { id: "5", name: "Paramètres", icon: Settings },
  ]

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Rechercher dans le CRM..." />
      <CommandList>
        <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>

        <CommandGroup heading="Pages">
          {pages.map((page) => (
            <CommandItem
              key={page.id}
              onSelect={() => {
                onOpenChange(false)
                // Navigation vers la page
              }}
            >
              <page.icon className="mr-2 h-4 w-4" />
              <span>{page.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Contacts">
          {contacts.map((contact) => (
            <CommandItem
              key={contact.id}
              onSelect={() => {
                onOpenChange(false)
                // Navigation vers le contact
              }}
            >
              <User className="mr-2 h-4 w-4" />
              <div className="flex flex-col">
                <span>{contact.name}</span>
                <span className="text-xs text-muted-foreground">{contact.company}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Affaires">
          {deals.map((deal) => (
            <CommandItem
              key={deal.id}
              onSelect={() => {
                onOpenChange(false)
                // Navigation vers l'affaire
              }}
            >
              <DollarSign className="mr-2 h-4 w-4" />
              <div className="flex flex-col">
                <span>{deal.name}</span>
                <span className="text-xs text-muted-foreground">
                  {deal.company} - {deal.amount}
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Tâches">
          {tasks.map((task) => (
            <CommandItem
              key={task.id}
              onSelect={() => {
                onOpenChange(false)
                // Navigation vers la tâche
              }}
            >
              <Calendar className="mr-2 h-4 w-4" />
              <div className="flex flex-col">
                <span>{task.title}</span>
                <span className="text-xs text-muted-foreground">
                  {task.dueDate} - Priorité: {task.priority}
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

