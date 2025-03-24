"use client"

import { useState } from "react"
import { MoreHorizontal, Mail, Phone, Star } from "lucide-react"

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

const contacts = [
  {
    id: "1",
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    phone: "+33 6 12 34 56 78",
    company: "Tech Solutions",
    status: "Client",
    favorite: true,
  },
  {
    id: "2",
    name: "Marie Lefebvre",
    email: "marie.lefebvre@example.com",
    phone: "+33 6 23 45 67 89",
    company: "Marketing Pro",
    status: "Prospect",
    favorite: false,
  },
  {
    id: "3",
    name: "Pierre Martin",
    email: "pierre.martin@example.com",
    phone: "+33 6 34 56 78 90",
    company: "Finance Corp",
    status: "Client",
    favorite: true,
  },
  {
    id: "4",
    name: "Sophie Bernard",
    email: "sophie.bernard@example.com",
    phone: "+33 6 45 67 89 01",
    company: "Design Studio",
    status: "Lead",
    favorite: false,
  },
  {
    id: "5",
    name: "Thomas Petit",
    email: "thomas.petit@example.com",
    phone: "+33 6 56 78 90 12",
    company: "Retail Group",
    status: "Prospect",
    favorite: false,
  },
  {
    id: "6",
    name: "Julie Moreau",
    email: "julie.moreau@example.com",
    phone: "+33 6 67 89 01 23",
    company: "Health Services",
    status: "Client",
    favorite: true,
  },
  {
    id: "7",
    name: "Nicolas Leroy",
    email: "nicolas.leroy@example.com",
    phone: "+33 6 78 90 12 34",
    company: "Education Inc",
    status: "Lead",
    favorite: false,
  },
]

export default function ContactsList() {
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])
  const [favoriteContacts, setFavoriteContacts] = useState<string[]>(
    contacts.filter((contact) => contact.favorite).map((contact) => contact.id),
  )

  const toggleSelectAll = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([])
    } else {
      setSelectedContacts(contacts.map((contact) => contact.id))
    }
  }

  const toggleSelect = (id: string) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter((contactId) => contactId !== id))
    } else {
      setSelectedContacts([...selectedContacts, id])
    }
  }

  const toggleFavorite = (id: string) => {
    if (favoriteContacts.includes(id)) {
      setFavoriteContacts(favoriteContacts.filter((contactId) => contactId !== id))
    } else {
      setFavoriteContacts([...favoriteContacts, id])
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">
            <Checkbox
              checked={selectedContacts.length === contacts.length && contacts.length > 0}
              onCheckedChange={toggleSelectAll}
              aria-label="Select all"
            />
          </TableHead>
          <TableHead>Nom</TableHead>
          <TableHead className="hidden md:table-cell">Email</TableHead>
          <TableHead className="hidden md:table-cell">Téléphone</TableHead>
          <TableHead className="hidden lg:table-cell">Entreprise</TableHead>
          <TableHead className="hidden lg:table-cell">Statut</TableHead>
          <TableHead className="w-12"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>
              <Checkbox
                checked={selectedContacts.includes(contact.id)}
                onCheckedChange={() => toggleSelect(contact.id)}
                aria-label={`Select ${contact.name}`}
              />
            </TableCell>
            <TableCell className="font-medium">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage
                    src={`/placeholder.svg?height=32&width=32&text=${contact.name.charAt(0)}`}
                    alt={contact.name}
                  />
                  <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{contact.name}</div>
                  <div className="text-sm text-muted-foreground md:hidden">{contact.email}</div>
                </div>
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">{contact.email}</TableCell>
            <TableCell className="hidden md:table-cell">{contact.phone}</TableCell>
            <TableCell className="hidden lg:table-cell">{contact.company}</TableCell>
            <TableCell className="hidden lg:table-cell">
              <Badge
                variant={
                  contact.status === "Client" ? "default" : contact.status === "Prospect" ? "secondary" : "outline"
                }
              >
                {contact.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleFavorite(contact.id)}
                  className={favoriteContacts.includes(contact.id) ? "text-yellow-500" : "text-muted-foreground"}
                >
                  <Star className="h-4 w-4" />
                  <span className="sr-only">Favori</span>
                </Button>
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
                      <Mail className="mr-2 h-4 w-4" />
                      Envoyer un email
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Phone className="mr-2 h-4 w-4" />
                      Appeler
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Modifier</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Supprimer</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

