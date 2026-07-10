'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { siteConfig } from '@/config/site'
import { roles } from '@/content/contact'

export function ContactForm() {
  // TODO: replace with a backend (server action or API route). Until then,
  // submitting hands the message to the visitor's own mail app via mailto:,
  // so nothing is silently dropped and we never fake a success state.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `${siteConfig.name} enquiry from ${data.get('name')}`
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Role: ${data.get('role')}`,
      '',
      `${data.get('message')}`,
    ].join('\n')
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" type="text" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required className="mt-1.5" />
        </div>
      </div>

      <div>
        <Label htmlFor="role">I am a&hellip;</Label>
        <Select id="role" name="role" required defaultValue="" className="mt-1.5">
          <option value="" disabled>
            Select your role
          </option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required className="mt-1.5" />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send message
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Submitting opens your email app with the message ready to send. By submitting, you agree to
        our privacy policy. We&apos;ll never share your details.
      </p>
    </form>
  )
}
