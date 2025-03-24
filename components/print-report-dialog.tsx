"use client"

import { useState } from "react"
import { Printer } from "lucide-react"

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
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export function PrintReportDialog() {
  const [open, setOpen] = useState(false)

  const handlePrint = () => {
    // Simulation d'impression
    setOpen(false)
    window.alert("Rapport en cours d'impression...")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Printer className="mr-2 h-4 w-4" />
          Imprimer rapport
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Imprimer un rapport</DialogTitle>
          <DialogDescription>Configurez les options du rapport avant l'impression ou l'exportation.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="report-type">Type de rapport</Label>
            <Select defaultValue="sales">
              <SelectTrigger id="report-type">
                <SelectValue placeholder="Sélectionner un type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">Rapport de ventes</SelectItem>
                <SelectItem value="contacts">Liste des contacts</SelectItem>
                <SelectItem value="deals">Pipeline des affaires</SelectItem>
                <SelectItem value="activities">Activités récentes</SelectItem>
                <SelectItem value="performance">Performance de l'équipe</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="date-range">Période</Label>
            <Select defaultValue="month">
              <SelectTrigger id="date-range">
                <SelectValue placeholder="Sélectionner une période" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Aujourd'hui</SelectItem>
                <SelectItem value="week">Cette semaine</SelectItem>
                <SelectItem value="month">Ce mois</SelectItem>
                <SelectItem value="quarter">Ce trimestre</SelectItem>
                <SelectItem value="year">Cette année</SelectItem>
                <SelectItem value="custom">Personnalisée</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div className="grid gap-2">
            <Label>Options d'affichage</Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="show-charts" defaultChecked />
                <label htmlFor="show-charts" className="text-sm">
                  Inclure les graphiques
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="show-summary" defaultChecked />
                <label htmlFor="show-summary" className="text-sm">
                  Inclure le résumé
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="show-details" defaultChecked />
                <label htmlFor="show-details" className="text-sm">
                  Inclure les détails
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="show-header" defaultChecked />
                <label htmlFor="show-header" className="text-sm">
                  Inclure l'en-tête
                </label>
              </div>
            </div>
          </div>

          <Separator />

          <div className="grid gap-2">
            <Label>Format de sortie</Label>
            <RadioGroup defaultValue="pdf" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pdf" id="pdf" />
                <Label htmlFor="pdf" className="text-sm">
                  PDF
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="excel" id="excel" />
                <Label htmlFor="excel" className="text-sm">
                  Excel
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="print" id="print" />
                <Label htmlFor="print" className="text-sm">
                  Imprimer
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <DialogFooter className="flex space-x-2 sm:space-x-0">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Annuler
          </Button>
          <Button variant="default" onClick={handlePrint} className="ml-2">
            <Printer className="mr-2 h-4 w-4" />
            Générer le rapport
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

