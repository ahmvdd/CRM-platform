import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: "1",
    user: "Sophie Martin",
    action: "a ajouté un nouveau contact",
    target: "Jean Dupont",
    time: "Il y a 10 minutes",
    type: "contact",
  },
  {
    id: "2",
    user: "Thomas Dubois",
    action: "a créé une nouvelle affaire",
    target: "Renouvellement licence",
    time: "Il y a 45 minutes",
    type: "deal",
  },
  {
    id: "3",
    user: "Julie Leroy",
    action: "a terminé une tâche",
    target: "Envoyer proposition à Marketing Pro",
    time: "Il y a 1 heure",
    type: "task",
  },
  {
    id: "4",
    user: "Nicolas Petit",
    action: "a mis à jour une affaire",
    target: "Projet d'expansion",
    time: "Il y a 3 heures",
    type: "deal",
  },
  {
    id: "5",
    user: "Emma Blanc",
    action: "a ajouté une note à",
    target: "Finance Corp",
    time: "Il y a 5 heures",
    type: "note",
  },
]

export default function ActivityFeed() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={`/placeholder.svg?height=36&width=36&text=${activity.user.charAt(0)}`}
              alt={activity.user}
            />
            <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="font-medium">{activity.user}</span> {activity.action}{" "}
              <span className="font-medium">{activity.target}</span>
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {activity.type === "contact"
                  ? "Contact"
                  : activity.type === "deal"
                    ? "Affaire"
                    : activity.type === "task"
                      ? "Tâche"
                      : "Note"}
              </Badge>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

