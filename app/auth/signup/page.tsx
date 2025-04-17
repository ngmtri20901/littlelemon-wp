import Link from "next/link"
import type { Metadata } from "next"
import { Logo } from "@/components/logo"
import { SignupForm } from "./signup-form"

export const metadata: Metadata = {
  title: "Sign Up | Little Lemon",
  description: "Create a new Little Lemon account",
}

export default function SignupPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Logo />
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your information to create a Little Lemon account</p>
        </div>
        <SignupForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/login" className="hover:text-brand underline underline-offset-4">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
