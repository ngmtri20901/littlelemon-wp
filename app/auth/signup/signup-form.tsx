"use client"

import * as React from "react"
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
import { REGISTER_USER } from "@/api/graphql/register"
import { UPDATE_USER } from "@/api/graphql/updateUser"
import { Eye, EyeOff } from "lucide-react"

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export function SignupForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)
  const [registerUser] = useMutation(REGISTER_USER)
  const [updateUser]   = useMutation(UPDATE_USER)
  const [showPassword, setShowPassword] = React.useState(false)
  const [showConfirm, setShowConfirm] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      // 1) register
      const { data } = await registerUser({
        variables: {
          username: values.email,
          email: values.email,
          password: values.password,
        },
      })
      const newUserId = data.registerUser.user.id

      // 2) update the display name
      await updateUser({
        variables: {
          id:   newUserId,
          name: values.name,
        },
      })

      toast({
        title: "Signup Successful!",
        description: "Your account has been created. Please log in to continue.",
      })

      router.push("/auth/login")
    } catch (err: any) {
      toast({
        title: "Signup Failed",
        description: err.message || "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="John Doe"
                  {...field}
                  className={`text-gray-700 ${
                    form.formState.errors.name ? "border-red-500" : ""
                  }`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Confirm Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showConfirm ? "text" : "password"}
                    placeholder="••••••••"
                    {...field}
                    className={`pr-10 text-gray-700 ${
                      form.formState.errors.confirmPassword ? "border-red-500" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
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
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </Form>
  )
}
