import type { Metadata } from "next"
import { SecuritySettings } from "./security-settings"

export const metadata: Metadata = {
  title: "Security & Privacy | Little Lemon",
  description: "Manage your Little Lemon security and privacy settings",
}

export default function SecurityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Security & Privacy</h3>
        <p className="text-sm text-muted-foreground">Manage your account security and privacy settings.</p>
      </div>
      <SecuritySettings />
    </div>
  )
}
