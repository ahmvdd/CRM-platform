"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Briefcase, Calendar, Edit, X } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function UserProfileDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
          <AvatarFallback>UT</AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0">
        <div className="relative h-32 bg-primary">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4 text-white" />
            <span className="sr-only">Fermer</span>
          </DialogClose>
          <div className="absolute -bottom-16 left-6">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Avatar" />
              <AvatarFallback className="text-4xl">UT</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="pt-20 px-6 pb-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">Utilisateur Test</h2>
              <p className="text-muted-foreground">Directeur Commercial</p>
            </div>
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Modifier le profil
            </Button>
          </div>

          <Tabs defaultValue="info" className="mt-6">
            <TabsList>
              <TabsTrigger value="info">Informations</TabsTrigger>
              <TabsTrigger value="activity">Activité</TabsTrigger>
              <TabsTrigger value="settings">Paramètres</TabsTrigger>
            </TabsList>
            <TabsContent value="info" className="mt-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <p>admin@crm.com</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Téléphone</p>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <p>+33 6 12 34 56 78</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Adresse</p>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <p>123 Rue de Paris, 75001 Paris</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Entreprise</p>
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                    <p>CRM Solutions SAS</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-medium mb-2">À propos</h3>
                <p className="text-sm text-muted-foreground">
                  Directeur commercial avec plus de 10 ans d'expérience dans la gestion d'équipes de vente et le
                  développement de stratégies commerciales. Spécialisé dans le secteur des technologies et des solutions
                  B2B.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Compétences</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Gestion d'équipe</Badge>
                  <Badge variant="secondary">Négociation</Badge>
                  <Badge variant="secondary">CRM</Badge>
                  <Badge variant="secondary">Stratégie commerciale</Badge>
                  <Badge variant="secondary">Développement commercial</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Membre depuis</h3>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p className="text-sm">Janvier 2022</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="activity" className="mt-4 space-y-4">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex gap-4 pb-4 border-b">
                    <div className="min-w-fit pt-1">
                      <Badge variant="outline" className="text-xs">
                        {["Il y a 2h", "Hier", "Il y a 2j", "Il y a 3j", "La semaine dernière"][i - 1]}
                      </Badge>
                    </div>
                    <div>
                      <p className="font-medium">
                        {
                          [
                            "A créé une nouvelle affaire",
                            "A ajouté un nouveau contact",
                            "A terminé une tâche importante",
                            "A mis à jour le statut d'une affaire",
                            "A participé à une réunion d'équipe",
                          ][i - 1]
                        }
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {
                          [
                            "Projet d'expansion avec Tech Solutions",
                            "Jean Dupont - Directeur Marketing",
                            "Préparation de la présentation client",
                            "Affaire 'Renouvellement licence' passée en phase de négociation",
                            "Réunion hebdomadaire de l'équipe commerciale",
                          ][i - 1]
                        }
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-4 space-y-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Préférences de notification</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Notifications par email</span>
                      <Badge>Activé</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>Notifications dans l'application</span>
                      <Badge>Activé</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>Alertes de tâches</span>
                      <Badge>Activé</Badge>
                    </li>
                    <li className="flex justify-between">
                      <span>Rappels de réunion</span>
                      <Badge>Activé</Badge>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-2">Sécurité</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      Changer le mot de passe
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      Activer l'authentification à deux facteurs
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      Gérer les appareils connectés
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}

