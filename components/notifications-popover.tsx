"use client"

import { useState } from "react"
import { Bell, Check, Clock, DollarSign, User, Calendar, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"

export function NotificationsPopover() {
  const [open, setOpen] = useState(false)
  const [notificationCount, setNotificationCount] = useState(3)

  const markAllAsRead = () => {
    setNotificationCount(0)
  }

  const notifications = [
    {
      id: "1",
      title: "Nouvelle affaire créée",
      description: "Jean Dupont a créé une nouvelle affaire: Projet d'expansion",
      time: "Il y a 10 minutes",
      read: false,
      type: "deal",
    },
    {
      id: "2",
      title: "Tâche à échéance",
      description: "Rappel: Appeler Marie Lefebvre aujourd'hui à 14h00",
      time: "Il y a 30 minutes",
      read: false,
      type: "task",
    },
    {
      id: "3",
      title: "Nouveau message",
      description: "Vous avez reçu un nouveau message de Pierre Martin",
      time: "Il y a 1 heure",
      read: false,
      type: "message",
    },
    {
      id: "4",
      title: "Affaire mise à jour",
      description: "L'affaire 'Renouvellement licence' est passée en phase de négociation",
      time: "Il y a 3 heures",
      read: true,
      type: "deal",
    },
    {
      id: "5",
      title: "Nouveau contact ajouté",
      description: "Sophie Bernard a été ajoutée à votre liste de contacts",
      time: "Il y a 5 heures",
      read: true,
      type: "contact",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "deal":
        return <DollarSign className="h-4 w-4 text-primary" />
      case "task":
        return <Calendar className="h-4 w-4 text-orange-500" />
      case "message":
        return <MessageSquare className="h-4 w-4 text-blue-500" />
      case "contact":
        return <User className="h-4 w-4 text-green-500" />
      default:
        return <Bell className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {notificationCount > 0 && (
            <Badge className="absolute -mt-8 -mr-8 h-5 w-5 p-0 flex items-center justify-center">
              {notificationCount}
            </Badge>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[380px] p-0" align="end">
        <div className="flex items-center justify-between p-4">
          <div className="font-medium">Notifications</div>
          <Button variant="ghost" size="sm" onClick={markAllAsRead}>
            <Check className="mr-2 h-4 w-4" />
            Tout marquer comme lu
          </Button>
        </div>
        <Tabs defaultValue="all">
          <div className="px-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">Toutes</TabsTrigger>
              <TabsTrigger value="unread">Non lues</TabsTrigger>
              <TabsTrigger value="read">Lues</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all" className="mt-0">
            <ScrollArea className="h-[300px]">
              <div className="flex flex-col">
                {notifications.map((notification) => (
                  <div key={notification.id} className="relative">
                    <div className={`p-4 hover:bg-accent cursor-pointer ${notification.read ? "" : "bg-accent/40"}`}>
                      <div className="flex items-start gap-3">
                        <div className="mt-1">{getIcon(notification.type)}</div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{notification.title}</p>
                            {!notification.read && <div className="h-2 w-2 rounded-full bg-primary"></div>}
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {notification.time}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 text-center">
              <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>
                Voir toutes les notifications
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="unread" className="mt-0">
            <ScrollArea className="h-[300px]">
              <div className="flex flex-col">
                {notifications
                  .filter((n) => !n.read)
                  .map((notification) => (
                    <div key={notification.id} className="relative">
                      <div className="p-4 hover:bg-accent cursor-pointer bg-accent/40">
                        <div className="flex items-start gap-3">
                          <div className="mt-1">{getIcon(notification.type)}</div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium">{notification.title}</p>
                              <div className="h-2 w-2 rounded-full bg-primary"></div>
                            </div>
                            <p className="text-sm text-muted-foreground">{notification.description}</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="mr-1 h-3 w-3" />
                              {notification.time}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Separator />
                    </div>
                  ))}
              </div>
            </ScrollArea>
            <div className="p-4 text-center">
              <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>
                Voir toutes les notifications
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="read" className="mt-0">
            <ScrollArea className="h-[300px]">
              <div className="flex flex-col">
                {notifications
                  .filter((n) => n.read)
                  .map((notification) => (
                    <div key={notification.id} className="relative">
                      <div className="p-4 hover:bg-accent cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div className="mt-1">{getIcon(notification.type)}</div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium">{notification.title}</p>
                            <p className="text-sm text-muted-foreground">{notification.description}</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="mr-1 h-3 w-3" />
                              {notification.time}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Separator />
                    </div>
                  ))}
              </div>
            </ScrollArea>
            <div className="p-4 text-center">
              <Button variant="outline" className="w-full" onClick={() => setOpen(false)}>
                Voir toutes les notifications
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </PopoverContent>
    </Popover>
  )
}

