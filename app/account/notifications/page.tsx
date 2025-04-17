import type { Metadata } from "next"
import { NotificationSettings } from "./notification-settings"

export const metadata: Metadata = {
  title: "Notification Settings | Little Lemon",
  description: "Manage your Little Lemon notification preferences",
}

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notification Settings</h3>
        <p className="text-sm text-muted-foreground">Manage how you receive notifications from Little Lemon.</p>
      </div>
      <NotificationSettings />
    </div>
  )
}
