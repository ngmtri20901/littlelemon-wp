import type { Metadata } from "next"
import { ProfileForm } from "./profile-form"

export const metadata: Metadata = {
  title: "Profile | Little Lemon",
  description: "Manage your Little Lemon profile",
}

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">Manage your personal information.</p>
      </div>
      <ProfileForm />
    </div>
  )
}
