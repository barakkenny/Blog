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

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least characters')
})

type LoginFormValues = z.infer<typeof loginSchema> 

function LoginForm() {
  const [isloading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  })

  return (
    <form>
      
    </form>
  )
}

export default LoginForm
