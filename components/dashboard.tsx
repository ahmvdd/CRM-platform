"use client"

import { useState, useEffect } from "react"
import {
  BarChart3,
  Users,
  Calendar,
  MessageSquare,
  DollarSign,
  Settings,
  PieChart,
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  Menu,
  X,
  FileText,
  LayoutDashboard,
  ChevronDown,
  Zap,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Sheet, SheetContent } from "@/components/ui/sheet"

import ContactsList from "@/components/contacts-list"
import DealsTable from "@/components/deals-table"
import TasksList from "@/components/tasks-list"
import StatsCards from "@/components/stats-cards"
import ActivityFeed from "@/components/activity-feed"
import { ThemeToggle } from "@/components/theme-toggle"
import { UserProfileDialog } from "@/components/user-profile-dialog"
import { PrintReportDialog } from "@/components/print-report-dialog"
import { NewItemDialog } from "@/components/new-item-dialog"
import { NewContactDialog } from "@/components/new-contact-dialog"
import { NewDealDialog } from "@/components/new-deal-dialog"
import { NewTaskDialog } from "@/components/new-task-dialog"
import { SalesChart } from "@/components/sales-chart"
import { ConversionChart } from "@/components/conversion-chart"
import { GlobalSearch } from "@/components/global-search"
import { NotificationsPopover } from "@/components/notifications-popover"
import { QuickActions } from "@/components/quick-actions"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showWelcomeCard, setShowWelcomeCard] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K to open search
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-64 border-r bg-card shadow-sm transition-all duration-300 ease-in-out">
        <div className="p-6 flex items-center">
          <div className="bg-primary/10 p-2 rounded-md mr-3">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-primary">CRM Pro</h2>
        </div>

        <div className="px-4 mb-4">
          <QuickActions />
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-2">
            Principal
          </div>
          <Button
            variant={activeTab === "overview" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("overview")}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Tableau de bord
          </Button>
          <Button
            variant={activeTab === "contacts" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("contacts")}
          >
            <Users className="mr-2 h-4 w-4" />
            Contacts
          </Button>
          <Button
            variant={activeTab === "deals" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("deals")}
          >
            <DollarSign className="mr-2 h-4 w-4" />
            Affaires
          </Button>
          <Button
            variant={activeTab === "tasks" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("tasks")}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Tâches
          </Button>

          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mt-6 mb-2">
            Analyse
          </div>
          <Button
            variant={activeTab === "analytics" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("analytics")}
          >
            <PieChart className="mr-2 h-4 w-4" />
            Analytique
          </Button>
          <Button
            variant={activeTab === "reports" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("reports")}
          >
            <FileText className="mr-2 h-4 w-4" />
            Rapports
          </Button>

          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mt-6 mb-2">
            Communication
          </div>
          <Button
            variant={activeTab === "messages" ? "default" : "ghost"}
            className="w-full justify-start group relative"
            onClick={() => setActiveTab("messages")}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
            <Badge className="ml-auto bg-primary text-primary-foreground">3</Badge>
          </Button>

          <Separator className="my-4" />

          <Button
            variant={activeTab === "settings" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="mr-2 h-4 w-4" />
            Paramètres
          </Button>
        </nav>

        <div className="p-4 mt-auto border-t">
          <div className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
              <AvatarFallback>UT</AvatarFallback>
            </Avatar>
            <div className="ml-3 flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Utilisateur</p>
              <p className="text-xs text-muted-foreground truncate">admin@crm.com</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Paramètres</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Déconnexion</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="left" className="p-0 w-[300px]">
          <div className="p-6 flex items-center">
            <div className="bg-primary/10 p-2 rounded-md mr-3">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary">CRM Pro</h2>
          </div>

          <ScrollArea className="h-[calc(100vh-80px)]">
            <div className="px-4 mb-4">
              <QuickActions />
            </div>

            <nav className="flex-1 px-4 space-y-1">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-2">
                Principal
              </div>
              <Button
                variant={activeTab === "overview" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setActiveTab("overview")
                  setIsMobileMenuOpen(false)
                }}
              >
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Tableau de bord
              </Button>
              <Button
                variant={activeTab === "contacts" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setActiveTab("contacts")
                  setIsMobileMenuOpen(false)
                }}
              >
                <Users className="mr-2 h-4 w-4" />
                Contacts
              </Button>
              <Button
                variant={activeTab === "deals" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setActiveTab("deals")
                  setIsMobileMenuOpen(false)
                }}
              >
                <DollarSign className="mr-2 h-4 w-4" />
                Affaires
              </Button>
              <Button
                variant={activeTab === "tasks" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setActiveTab("tasks")
                  setIsMobileMenuOpen(false)
                }}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Tâches
              </Button>

              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mt-6 mb-2">
                Analyse
              </div>
              <Button
                variant={activeTab === "analytics" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setActiveTab("analytics")
                  setIsMobileMenuOpen(false)
                }}
              >
                <PieChart className="mr-2 h-4 w-4" />
                Analytique
              </Button>
              <Button
                variant={activeTab === "reports" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setActiveTab("reports")
                  setIsMobileMenuOpen(false)
                }}
              >
                <FileText className="mr-2 h-4 w-4" />
                Rapports
              </Button>

              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mt-6 mb-2">
                Communication
              </div>
              <Button
                variant={activeTab === "messages" ? "default" : "ghost"}
                className="w-full justify-start group relative"
                onClick={() => {
                  setActiveTab("messages")
                  setIsMobileMenuOpen(false)
                }}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Messages
                <Badge className="ml-auto bg-primary text-primary-foreground">3</Badge>
              </Button>

              <Separator className="my-4" />

              <Button
                variant={activeTab === "settings" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  setActiveTab("settings")
                  setIsMobileMenuOpen(false)
                }}
              >
                <Settings className="mr-2 h-4 w-4" />
                Paramètres
              </Button>
            </nav>

            <div className="p-4 mt-8 border-t">
              <div className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
                  <AvatarFallback>UT</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <p className="text-sm font-medium">Utilisateur</p>
                  <p className="text-xs text-muted-foreground">admin@crm.com</p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="lg:hidden mr-2" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
            <div className="lg:hidden">
              <h2 className="text-lg font-bold">CRM Pro</h2>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex items-center"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-4 w-4 mr-2" />
              Rechercher...
              <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Rechercher</span>
            </Button>

            <NotificationsPopover />

            <ThemeToggle />

            <UserProfileDialog />
          </div>
        </header>

        {/* Global search dialog */}
        <GlobalSearch open={isSearchOpen} onOpenChange={setIsSearchOpen} />

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {isLoading ? (
            <div className="h-full flex flex-col items-center justify-center">
              <div className="animate-spin">
                <Loader2 className="h-8 w-8 text-primary" />
              </div>
              <p className="mt-4 text-muted-foreground">Chargement de vos données...</p>
            </div>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <div className="flex justify-between items-center">
                <TabsList className="grid grid-cols-5 md:w-fit">
                  <TabsTrigger value="overview">Tableau de bord</TabsTrigger>
                  <TabsTrigger value="contacts">Contacts</TabsTrigger>
                  <TabsTrigger value="deals">Affaires</TabsTrigger>
                  <TabsTrigger value="tasks">Tâches</TabsTrigger>
                  <TabsTrigger value="analytics">Analytique</TabsTrigger>
                </TabsList>

                <div className="hidden md:block">
                  <NewItemDialog />
                </div>
              </div>

              <TabsContent value="overview" className="space-y-6">
                {showWelcomeCard && (
                  <Card className="bg-gradient-to-r from-primary/20 to-primary/5 border-primary/20">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-2xl">Bienvenue sur votre CRM Pro</CardTitle>
                          <CardDescription className="text-base mt-2">
                            Votre tableau de bord personnalisé pour gérer vos relations clients efficacement.
                          </CardDescription>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => setShowWelcomeCard(false)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="flex items-start space-x-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <Users className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Gérez vos contacts</h3>
                            <p className="text-sm text-muted-foreground">
                              Ajoutez et organisez vos clients et prospects.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <DollarSign className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Suivez vos affaires</h3>
                            <p className="text-sm text-muted-foreground">
                              Visualisez votre pipeline de ventes en temps réel.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="bg-primary/10 p-2 rounded-full">
                            <BarChart3 className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Analysez vos performances</h3>
                            <p className="text-sm text-muted-foreground">
                              Obtenez des insights précieux sur votre activité.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full sm:w-auto" onClick={() => window.alert("Visite guidée à venir!")}>
                        <Zap className="mr-2 h-4 w-4" />
                        Démarrer la visite guidée
                      </Button>
                    </CardFooter>
                  </Card>
                )}

                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Tableau de bord</h2>
                  <div className="flex items-center space-x-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Calendar className="mr-2 h-4 w-4" />
                          Ce mois
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Aujourd'hui</DropdownMenuItem>
                        <DropdownMenuItem>Cette semaine</DropdownMenuItem>
                        <DropdownMenuItem>Ce mois</DropdownMenuItem>
                        <DropdownMenuItem>Ce trimestre</DropdownMenuItem>
                        <DropdownMenuItem>Cette année</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="block md:hidden">
                      <NewItemDialog />
                    </div>
                  </div>
                </div>

                <StatsCards />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div>
                        <CardTitle>Performance des ventes</CardTitle>
                        <CardDescription>Aperçu des ventes du mois en cours</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Options</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Télécharger le rapport</DropdownMenuItem>
                          <DropdownMenuItem>Partager</DropdownMenuItem>
                          <DropdownMenuItem>Imprimer</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardHeader>
                    <CardContent className="px-2">
                      <SalesChart />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Activité récente</CardTitle>
                      <CardDescription>Dernières actions dans le système</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ActivityFeed />
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="ghost"
                        className="w-full"
                        onClick={() => window.alert("Voir toutes les activités")}
                      >
                        Voir toutes les activités
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Tâches à venir</CardTitle>
                        <CardDescription>Tâches prévues pour aujourd'hui</CardDescription>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => setActiveTab("tasks")}>
                        Voir tout
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <TasksList limit={3} />
                    </CardContent>
                    <CardFooter>
                      <NewTaskDialog />
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Affaires en cours</CardTitle>
                        <CardDescription>Affaires avec la plus haute priorité</CardDescription>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => setActiveTab("deals")}>
                        Voir tout
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <DealsTable limit={3} />
                    </CardContent>
                    <CardFooter>
                      <NewDealDialog />
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="contacts" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Contacts</h2>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline">
                      <Filter className="mr-2 h-4 w-4" />
                      Filtrer
                    </Button>
                    <PrintReportDialog />
                    <NewContactDialog />
                    <button id="new-contact-trigger" className="hidden" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:space-x-2 space-y-2 md:space-y-0">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Rechercher des contacts..." className="pl-8" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        Trier par <span className="ml-1">▼</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Nom (A-Z)</DropdownMenuItem>
                      <DropdownMenuItem>Nom (Z-A)</DropdownMenuItem>
                      <DropdownMenuItem>Entreprise</DropdownMenuItem>
                      <DropdownMenuItem>Récemment ajouté</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        Affichage <span className="ml-1">▼</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Liste</DropdownMenuItem>
                      <DropdownMenuItem>Cartes</DropdownMenuItem>
                      <DropdownMenuItem>Tableau</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <ContactsList />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="deals" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Affaires</h2>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline">
                      <Filter className="mr-2 h-4 w-4" />
                      Filtrer
                    </Button>
                    <PrintReportDialog />
                    <NewDealDialog />
                    <button id="new-deal-trigger" className="hidden" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-4">
                  <Card className="bg-card hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">Prospection</CardTitle>
                        <Badge variant="outline" className="ml-2">
                          4
                        </Badge>
                      </div>
                      <CardDescription>24 500 €</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ScrollArea className="h-[400px] px-4 py-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="mb-4 p-3 border rounded-lg bg-background hover:bg-accent/50 cursor-pointer transition-colors"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium">Projet Client {i}</h4>
                              <Badge variant="outline">8 500 €</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">Entreprise {i}</p>
                            <div className="flex justify-between text-xs">
                              <span>Mise à jour: Aujourd'hui</span>
                              <span>30%</span>
                            </div>
                            <Progress value={30} className="h-1 mt-1" />
                          </div>
                        ))}
                      </ScrollArea>
                    </CardContent>
                    <CardFooter className="p-3">
                      <Button variant="ghost" size="sm" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Ajouter une affaire
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">Qualification</CardTitle>
                        <Badge variant="outline" className="ml-2">
                          3
                        </Badge>
                      </div>
                      <CardDescription>36 000 €</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ScrollArea className="h-[400px] px-4 py-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="mb-4 p-3 border rounded-lg bg-background hover:bg-accent/50 cursor-pointer transition-colors"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium">Solution Tech {i}</h4>
                              <Badge variant="outline">12 000 €</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">Tech Corp {i}</p>
                            <div className="flex justify-between text-xs">
                              <span>Mise à jour: Hier</span>
                              <span>50%</span>
                            </div>
                            <Progress value={50} className="h-1 mt-1" />
                          </div>
                        ))}
                      </ScrollArea>
                    </CardContent>
                    <CardFooter className="p-3">
                      <Button variant="ghost" size="sm" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Ajouter une affaire
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">Proposition</CardTitle>
                        <Badge variant="outline" className="ml-2">
                          2
                        </Badge>
                      </div>
                      <CardDescription>45 000 €</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ScrollArea className="h-[400px] px-4 py-2">
                        {[1, 2].map((i) => (
                          <div
                            key={i}
                            className="mb-4 p-3 border rounded-lg bg-background hover:bg-accent/50 cursor-pointer transition-colors"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium">Projet Enterprise {i}</h4>
                              <Badge variant="outline">22 500 €</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">Grande Entreprise {i}</p>
                            <div className="flex justify-between text-xs">
                              <span>Mise à jour: 2j</span>
                              <span>75%</span>
                            </div>
                            <Progress value={75} className="h-1 mt-1" />
                          </div>
                        ))}
                      </ScrollArea>
                    </CardContent>
                    <CardFooter className="p-3">
                      <Button variant="ghost" size="sm" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Ajouter une affaire
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-card hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">Négociation</CardTitle>
                        <Badge variant="outline" className="ml-2">
                          1
                        </Badge>
                      </div>
                      <CardDescription>30 000 €</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ScrollArea className="h-[400px] px-4 py-2">
                        <div className="mb-4 p-3 border rounded-lg bg-background hover:bg-accent/50 cursor-pointer transition-colors">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium">Contrat Majeur</h4>
                            <Badge variant="outline">30 000 €</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">Mega Corp</p>
                          <div className="flex justify-between text-xs">
                            <span>Mise à jour: 3j</span>
                            <span>90%</span>
                          </div>
                          <Progress value={90} className="h-1 mt-1" />
                        </div>
                      </ScrollArea>
                    </CardContent>
                    <CardFooter className="p-3">
                      <Button variant="ghost" size="sm" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Ajouter une affaire
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="tasks" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Tâches</h2>
                  <NewTaskDialog />
                  <button id="new-task-trigger" className="hidden" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:space-x-2 space-y-2 md:space-y-0">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Rechercher des tâches..." className="pl-8" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline">
                        Filtrer par <span className="ml-1">▼</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Toutes les tâches</DropdownMenuItem>
                      <DropdownMenuItem>Mes tâches</DropdownMenuItem>
                      <DropdownMenuItem>Haute priorité</DropdownMenuItem>
                      <DropdownMenuItem>Échéance aujourd'hui</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">Toutes</TabsTrigger>
                    <TabsTrigger value="today">Aujourd'hui</TabsTrigger>
                    <TabsTrigger value="upcoming">À venir</TabsTrigger>
                    <TabsTrigger value="completed">Terminées</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all">
                    <Card>
                      <CardContent className="p-0">
                        <TasksList />
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="today">
                    <Card>
                      <CardContent className="p-0">
                        <TasksList filter="today" />
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="upcoming">
                    <Card>
                      <CardContent className="p-0">
                        <TasksList filter="upcoming" />
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="completed">
                    <Card>
                      <CardContent className="p-0">
                        <TasksList filter="completed" />
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Analytique</h2>
                  <div className="flex items-center space-x-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          Période: Ce mois <span className="ml-1">▼</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Aujourd'hui</DropdownMenuItem>
                        <DropdownMenuItem>Cette semaine</DropdownMenuItem>
                        <DropdownMenuItem>Ce mois</DropdownMenuItem>
                        <DropdownMenuItem>Ce trimestre</DropdownMenuItem>
                        <DropdownMenuItem>Cette année</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="outline">Exporter</Button>
                    <PrintReportDialog />
                  </div>
                </div>

                <StatsCards />

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance des ventes</CardTitle>
                      <CardDescription>Comparaison avec la période précédente</CardDescription>
                    </CardHeader>
                    <CardContent className="px-2">
                      <SalesChart />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Conversion par étape</CardTitle>
                      <CardDescription>Taux de conversion entre les étapes de vente</CardDescription>
                    </CardHeader>
                    <CardContent className="px-2">
                      <ConversionChart />
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Performance par vendeur</CardTitle>
                    <CardDescription>Classement des vendeurs par chiffre d'affaires</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: "Sophie Martin", amount: "125 000 €", deals: 12, progress: 92 },
                        { name: "Thomas Dubois", amount: "98 500 €", deals: 10, progress: 78 },
                        { name: "Julie Leroy", amount: "86 200 €", deals: 8, progress: 65 },
                        { name: "Nicolas Petit", amount: "72 800 €", deals: 7, progress: 54 },
                        { name: "Emma Blanc", amount: "65 400 €", deals: 6, progress: 48 },
                      ].map((seller, i) => (
                        <div key={i} className="flex items-center">
                          <Avatar className="h-9 w-9 mr-3">
                            <AvatarImage
                              src={`/placeholder.svg?height=36&width=36&text=${seller.name.charAt(0)}`}
                              alt={seller.name}
                            />
                            <AvatarFallback>{seller.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between mb-1">
                              <p className="text-sm font-medium truncate">{seller.name}</p>
                              <p className="text-sm font-medium">{seller.amount}</p>
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground mb-1">
                              <span>{seller.deals} affaires</span>
                              <span>{seller.progress}%</span>
                            </div>
                            <Progress value={seller.progress} className="h-1" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </main>
      </div>
    </div>
  )
}

// Composants manquants pour éviter les erreurs
const User = Users
const LogOut = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
)

const Loader2 = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
)

