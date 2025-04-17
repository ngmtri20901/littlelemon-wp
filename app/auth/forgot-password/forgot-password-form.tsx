"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      toast({
        title: "Reset link sent!",
        description: "Check your email for the password reset link.",
      })
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-medium">Check your email</h3>
          <p className="text-sm text-muted-foreground">
            We've sent you a password reset link. Please check your email.
          </p>
        </div>
        <Button variant="outline" className="w-full" onClick={() => setIsSubmitted(false)}>
          Back to reset password
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-lemon-600 hover:bg-lemon-700" disabled={isLoading}>
          {isLoading ? "Sending reset link..." : "Send reset link"}
        </Button>
      </form>
    </Form>
  )
}
