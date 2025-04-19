"use client"

import * as React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { useMutation } from "@apollo/client"
import { LOGIN_USER } from "@/api/graphql/login"
import { Eye, EyeOff } from "lucide-react"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [loginUser] = useMutation(LOGIN_USER)
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur", // ✅ validate khi blur
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const { data } = await loginUser({
        variables: {
          username: values.email,
          password: values.password,
        },
      })

      localStorage.setItem("token", data.login.authToken)
      localStorage.setItem("user", JSON.stringify(data.login.user))
      toast({
        title: "Login Successful!",
        description: `Welcome, ${data.login.user.name}. Redirecting to your profile...`,
      })
      router.push("/account/profile")
    } catch (err: any) {
      toast({
        title: "Incorrect Email or Password",
        description: err.message || "Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="name@example.com"
                  {...field}
                  className={`text-gray-700 ${
                    form.formState.errors.email ? "border-red-500" : ""
                  }`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...field}
                    className={`pr-10 text-gray-700 ${
                      form.formState.errors.password ? "border-red-500" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-lemon-600 hover:bg-lemon-700"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </Form>
  )
}
