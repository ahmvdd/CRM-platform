"use client"

import { useState } from "react"
import { Plus, DollarSign, Building, User, Calendar, BarChart, Save } from "lucide-react"

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

export function NewDealDialog() {
  const [open, setOpen] = useState(false)

  const handleSave = () => {
    // Simulation de sauvegarde
    setOpen(false)
    window.alert("Affaire créée avec succès!")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouvelle affaire
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Créer une nouvelle affaire</DialogTitle>
          <DialogDescription>
            Remplissez les informations pour créer une nouvelle opportunité commerciale.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="deal-name">Nom de l'affaire</Label>
            <Input id="deal-name" placeholder="Nom du projet ou de l'opportunité" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="company">Entreprise</Label>
              <div className="relative">
                <Building className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Select>
                  <SelectTrigger id="company" className="pl-8">
                    <SelectValue placeholder="Sélectionner une entreprise" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech-solutions">Tech Solutions</SelectItem>
                    <SelectItem value="marketing-pro">Marketing Pro</SelectItem>
                    <SelectItem value="finance-corp">Finance Corp</SelectItem>
                    <SelectItem value="design-studio">Design Studio</SelectItem>
                    <SelectItem value="retail-group">Retail Group</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact">Contact principal</Label>
              <div className="relative">
                <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Select>
                  <SelectTrigger id="contact" className="pl-8">
                    <SelectValue placeholder="Sélectionner un contact" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jean-dupont">Jean Dupont</SelectItem>
                    <SelectItem value="marie-lefebvre">Marie Lefebvre</SelectItem>
                    <SelectItem value="pierre-martin">Pierre Martin</SelectItem>
                    <SelectItem value="sophie-bernard">Sophie Bernard</SelectItem>
                    <SelectItem value="thomas-petit">Thomas Petit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="amount">Montant</Label>
              <div className="relative">
                <DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="amount" placeholder="0.00" className="pl-8" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="close-date">Date de clôture prévue</Label>
              <div className="relative">
                <Calendar className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="close-date" type="date" className="pl-8" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="stage">Étape</Label>
              <Select defaultValue="qualification">
                <SelectTrigger id="stage">
                  <SelectValue placeholder="Sélectionner une étape" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="prospection">Prospection</SelectItem>
                  <SelectItem value="qualification">Qualification</SelectItem>
                  <SelectItem value="proposition">Proposition</SelectItem>
                  <SelectItem value="negociation">Négociation</SelectItem>
                  <SelectItem value="cloture">Clôture</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="probability">Probabilité (%)</Label>
              <div className="relative">
                <BarChart className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="probability" placeholder="50" className="pl-8" />
              </div>
            </div>
          </div>

          <Separator />

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Détails de l'opportunité..." rows={3} />
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

