"use client"

import { useState } from "react"
import { Plus, Calendar, Clock, User, Tag, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

export function NewTaskDialog() {
  const [open, setOpen] = useState(false)

  const handleSave = () => {
    // Simulation de sauvegarde
    setOpen(false)
    window.alert("Tâche créée avec succès!")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle tâche
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Créer une nouvelle tâche</DialogTitle>
          <DialogDescription>Remplissez les informations pour créer une nouvelle tâche à suivre.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="task-title">Titre de la tâche</Label>
            <Input id="task-title" placeholder="Titre de la tâche" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="due-date">Date d'échéance</Label>
              <div className="relative">
                <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="due-date" type="date" className="pl-8" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="due-time">Heure</Label>
              <div className="relative">
                <Clock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="due-time" type="time" className="pl-8" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="assignee">Assigné à</Label>
              <div className="relative">
                <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Select>
                  <SelectTrigger id="assignee" className="pl-8">
                    <SelectValue placeholder="Sélectionner un utilisateur" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sophie-martin">Sophie Martin</SelectItem>
                    <SelectItem value="thomas-dubois">Thomas Dubois</SelectItem>
                    <SelectItem value="julie-leroy">Julie Leroy</SelectItem>
                    <SelectItem value="nicolas-petit">Nicolas Petit</SelectItem>
                    <SelectItem value="emma-blanc">Emma Blanc</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="priority">Priorité</Label>
              <div className="relative">
                <Tag className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Select defaultValue="normale">
                  <SelectTrigger id="priority" className="pl-8">
                    <SelectValue placeholder="Sélectionner une priorité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="haute">Haute</SelectItem>
                    <SelectItem value="moyenne">Moyenne</SelectItem>
                    <SelectItem value="normale">Normale</SelectItem>
                    <SelectItem value="basse">Basse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="related">Lié à</Label>
            <Select>
              <SelectTrigger id="related">
                <SelectValue placeholder="Sélectionner un élément associé (optionnel)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="contact-jean">Contact: Jean Dupont</SelectItem>
                <SelectItem value="contact-marie">Contact: Marie Lefebvre</SelectItem>
                <SelectItem value="deal-expansion">Affaire: Projet d'expansion</SelectItem>
                <SelectItem value="deal-licence">Affaire: Renouvellement licence</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Détails de la tâche à accomplir..." rows={3} />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Annuler
          </Button>
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Enregistrer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

