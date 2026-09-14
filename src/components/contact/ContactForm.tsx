import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { contactSchema, type ContactFormValues } from '@/lib/contactSchema'
import { FORMSPREE_ID, SITE } from '@/lib/constants'
import { postJSON } from '@/lib/http'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const FIELD_CLASSES =
  'w-full rounded-lg border bg-ink-900 light:bg-white border-ink-700 light:border-ink-200 px-4 py-2.5 text-ink-100 light:text-ink-900 placeholder:text-ink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const isConfigured = Boolean(FORMSPREE_ID)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(values: ContactFormValues) {
    if (!isConfigured) return

    setStatus('submitting')
    try {
      const response = await postJSON(`https://formspree.io/f/${FORMSPREE_ID}`, values)
      if (!response.ok) throw new Error('Form submission failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      {!isConfigured && (
        <p className="border-signal-500/30 bg-signal-500/5 text-signal-400 mb-6 rounded-lg border px-4 py-3 text-sm">
          This form isn't wired up yet — email me directly at{' '}
          <a href={`mailto:${SITE.email}`} className="underline">
            {SITE.email}
          </a>
          .
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        <div>
          <label htmlFor="name" className="text-ink-200 light:text-ink-700 mb-1.5 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={FIELD_CLASSES}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-sm text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-ink-200 light:text-ink-700 mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={FIELD_CLASSES}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="text-ink-200 light:text-ink-700 mb-1.5 block text-sm font-medium">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className={FIELD_CLASSES}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            {...register('subject')}
          />
          {errors.subject && (
            <p id="subject-error" className="mt-1.5 text-sm text-red-400">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="text-ink-200 light:text-ink-700 mb-1.5 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className={FIELD_CLASSES}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            {...register('message')}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-sm text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isConfigured}
          className="bg-accent-600 hover:bg-accent-500 focus-visible:ring-accent-500 w-full rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </button>

        <div aria-live="polite" className="min-h-[1.5rem] text-sm">
          {status === 'success' && (
            <p className="text-accent-400">Thanks — your message has been sent. I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400">
              Something went wrong sending that. Please try again or email me directly at {SITE.email}.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
