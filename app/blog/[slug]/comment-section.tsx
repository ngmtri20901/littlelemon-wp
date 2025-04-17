"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { getCommentsByPostId, type BlogComment } from "@/lib/blog-data"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { formatDate } from "@/lib/utils"

const commentSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  comment: z.string().min(5, { message: "Comment must be at least 5 characters" }),
})

type CommentFormValues = z.infer<typeof commentSchema>

interface CommentSectionProps {
  postId: string
}

export function CommentSection({ postId }: CommentSectionProps) {
  const initialComments = getCommentsByPostId(postId)
  const [comments, setComments] = useState<BlogComment[]>(initialComments)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<CommentFormValues>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  })

  function onSubmit(values: CommentFormValues) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const newComment: BlogComment = {
        id: `temp-${Date.now()}`,
        postId,
        author: values.name,
        authorEmail: values.email,
        content: values.comment,
        createdAt: new Date().toISOString(),
      }

      setComments([...comments, newComment])
      form.reset()
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>

      {comments.length > 0 ? (
        <div className="space-y-6 mb-10">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-lemon-200 text-lemon-800 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                  {comment.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-medium">{comment.author}</p>
                  <p className="text-sm text-gray-500">{formatDate(comment.createdAt)}</p>
                </div>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mb-8">No comments yet. Be the first to share your thoughts!</p>
      )}

      <div className="bg-white p-6 border rounded-lg">
        <h4 className="text-xl font-bold mb-4">Leave a Comment</h4>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Share your thoughts..." className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="bg-lemon-600 hover:bg-lemon-700" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Post Comment"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
