'use client'

import { z } from 'zod'
import {useForm} from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least characters')
})

type LoginFormValues = z.infer<typeof loginSchema> 

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  })

  return (
    <Form {...form}>
      <form className='space-y-4'>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input {...field} type="email" placeholder="Enter your email" />
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
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input {...field} type="password" placeholder="Enter your email" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
        <Button type="submit" className="w-full mt-5" disabled={isLoading}>
                   {isLoading ? "Signing in..." :"Sign In"}
        </Button>
        </form>
    </Form>
  )
}

export default LoginForm
