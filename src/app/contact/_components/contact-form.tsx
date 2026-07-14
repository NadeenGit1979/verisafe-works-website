'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { siteConfig } from '@/config/site'
import { form as formCopy, otherRole, roles } from '@/content/contact'
import { env } from '@/lib/env'

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'throttled'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
/**
 * Minimum gap between successful sends. Bots bypass client JS entirely
 * (Web3Forms' IP rate limit and the honeypot handle those); this only stops a
 * hasty visitor from double-sending and burning the monthly quota.
 */
const SEND_COOLDOWN_MS = 30_000

const OPTIONAL_ANSWER_MAX = 200
const MESSAGE_MAX = 5000

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [role, setRole] = useState('')
  const [optionalAnswer, setOptionalAnswer] = useState('')
  const [message, setMessage] = useState('')
  const lastSentAt = useRef(0)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Guards the race where a second click lands before the disabled state
    // from setStatus('submitting') has rendered.
    if (status === 'submitting') return
    if (Date.now() - lastSentAt.current < SEND_COOLDOWN_MS) {
      setStatus('throttled')
      return
    }
    // Fail fast if the build is missing the key — don't post user data into a
    // request that is guaranteed to be rejected.
    if (!env.web3formsKey) {
      setStatus('error')
      return
    }

    // currentTarget is nulled once the handler yields — capture it first.
    const formElement = event.currentTarget
    const data = new FormData(formElement)
    const field = (name: string) => String(data.get(name) ?? '').trim()
    const name = field('name')

    setStatus('submitting')
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: env.web3formsKey,
          subject: `${siteConfig.name} enquiry from ${name}`,
          from_name: siteConfig.name,
          name,
          email: field('email'),
          role: field('role'),
          // Blank or unmounted field becomes undefined, which JSON.stringify
          // drops — the email never shows an empty row.
          optional_answer: field('optional_answer') || undefined,
          message: field('message'),
          // Forwarded so Web3Forms can discard bot submissions server-side.
          botcheck: data.get('botcheck'),
        }),
        signal: AbortSignal.timeout(15_000),
      })
      const result: { success: boolean } = await response.json()
      if (!response.ok || !result.success) throw new Error('Submission rejected')
      formElement.reset()
      setRole('')
      setOptionalAnswer('')
      setMessage('')
      // Cooldown starts only on success so a failed send can be retried
      // immediately.
      lastSentAt.current = Date.now()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot: humans never see it; bots that tick it are dropped by Web3Forms. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" type="text" required maxLength={100} className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required maxLength={254} className="mt-1.5" />
        </div>
      </div>

      <div>
        <Label htmlFor="role">I am a&hellip;</Label>
        <Select
          id="role"
          name="role"
          required
          value={role}
          onChange={(event) => {
            setRole(event.target.value)
            // The field is controlled, so unmounting alone no longer clears
            // it — drop the stale answer when the role moves off "Other".
            if (event.target.value !== otherRole) setOptionalAnswer('')
          }}
          className="mt-1.5"
        >
          <option value="" disabled>
            Select your role
          </option>
          {roles.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </div>

      {role === otherRole && (
        <div>
          <div className="flex items-baseline justify-between">
            <Label htmlFor="optional-answer">{formCopy.otherDetail.label}</Label>
            <span id="optional-answer-count" className="text-xs tabular-nums text-muted-foreground">
              {optionalAnswer.length}/{OPTIONAL_ANSWER_MAX}
            </span>
          </div>
          <Input
            id="optional-answer"
            name="optional_answer"
            type="text"
            maxLength={OPTIONAL_ANSWER_MAX}
            value={optionalAnswer}
            onChange={(event) => setOptionalAnswer(event.target.value)}
            aria-describedby="optional-answer-count"
            placeholder={formCopy.otherDetail.placeholder}
            className="mt-1.5"
          />
        </div>
      )}

      <div>
        <div className="flex items-baseline justify-between">
          <Label htmlFor="message">Message</Label>
          <span id="message-count" className="text-xs tabular-nums text-muted-foreground">
            {message.length}/{MESSAGE_MAX}
          </span>
        </div>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={MESSAGE_MAX}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          aria-describedby="message-count"
          className="mt-1.5"
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={status === 'submitting'}>
        {status === 'submitting' ? formCopy.submitting : formCopy.submit}
      </Button>

      <div role="status" aria-live="polite">
        {status === 'success' && (
          <p className="text-center text-sm font-medium text-primary">{formCopy.success}</p>
        )}
        {status === 'error' && (
          <p className="text-center text-sm font-medium text-destructive">{formCopy.error}</p>
        )}
        {status === 'throttled' && (
          <p className="text-center text-sm font-medium text-muted-foreground">
            {formCopy.throttled}
          </p>
        )}
      </div>

      <p className="text-center text-xs text-muted-foreground">{formCopy.footnote}</p>
    </form>
  )
}
