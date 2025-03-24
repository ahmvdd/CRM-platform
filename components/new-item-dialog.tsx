"use client"

import { useState } from "react"
import { Plus, FileText, Users, DollarSign, Calendar } from "lucide-react"

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NewItemDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouveau
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Créer un nouvel élément</DialogTitle>
          <DialogDescription>Choisissez le type d'élément que vous souhaitez créer.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="contact" className="mt-4">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="contact">Contact</TabsTrigger>
            <TabsTrigger value="deal">Affaire</TabsTrigger>
            <TabsTrigger value="task">Tâche</TabsTrigger>
            <TabsTrigger value="note">Note</TabsTrigger>
          </TabsList>
          <TabsContent value="contact" className="mt-4 space-y-4">
            <div className="flex justify-center py-8">
              <div className="text-center">
                <Users className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Nouveau contact</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Ajoutez un nouveau client ou prospect à votre base de données.
                </p>
                <Button
                  onClick={() => {
                    setOpen(false)
                    // Ouvrir la boîte de dialogue de contact après un court délai
                    setTimeout(() => {
                      document.getElementById("new-contact-trigger")?.click()
                    }, 100)
                  }}
                >
                  Créer un contact
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="deal" className="mt-4 space-y-4">
            <div className="flex justify-center py-8">
              <div className="text-center">
                <DollarSign className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Nouvelle affaire</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Créez une nouvelle opportunité commerciale à suivre.
                </p>
                <Button
                  onClick={() => {
                    setOpen(false)
                    // Ouvrir la boîte de dialogue d'affaire après un court délai
                    setTimeout(() => {
                      document.getElementById("new-deal-trigger")?.click()
                    }, 100)
                  }}
                >
                  Créer une affaire
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="task" className="mt-4 space-y-4">
            <div className="flex justify-center py-8">
              <div className="text-center">
                <Calendar className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Nouvelle tâche</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Planifiez une nouvelle tâche ou activité à réaliser.
                </p>
                <Button
                  onClick={() => {
                    setOpen(false)
                    // Ouvrir la boîte de dialogue de tâche après un court délai
                    setTimeout(() => {
                      document.getElementById("new-task-trigger")?.click()
                    }, 100)
                  }}
                >
                  Créer une tâche
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="note" className="mt-4 space-y-4">
            <div className="flex justify-center py-8">
              <div className="text-center">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Nouvelle note</h3>
                <p className="text-sm text-muted-foreground mb-4">Ajoutez une note ou un mémo à votre CRM.</p>
                <Button
                  onClick={() => {
                    setOpen(false)
                    window.alert("Fonctionnalité de création de note à venir!")
                  }}
                >
                  Créer une note
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Annuler
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

