import Link from "next/link"
import { CitrusIcon as Lemon } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps = {}) {
  return (
    <Link href="/" className={cn("flex items-center space-x-2", className)}>
      <Lemon className="h-6 w-6 text-lemon-600" />
      <span className="font-bold text-xl text-lemon-600">Little Lemon</span>
    </Link>
  )
}
