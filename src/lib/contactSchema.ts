import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(80),
  email: z.string().trim().email('Please enter a valid email address'),
  subject: z.string().trim().min(3, 'Please add a short subject').max(120),
  message: z.string().trim().min(20, 'Please add a little more detail (20+ characters)').max(2000),
})

export type ContactFormValues = z.infer<typeof contactSchema>
