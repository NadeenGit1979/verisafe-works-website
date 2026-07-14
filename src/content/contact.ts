import { Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import type { Feature } from '@/types/content'

export const hero = {
  title: "Let's talk transparency",
  lede: `${siteConfig.name} is in its test phase. Ask for early access, become a tester or ask us anything — tell us a little about your work and we'll be in touch.`,
}

export const intro = {
  title: 'Contact us',
  lede: "Prefer to reach out directly? We'd love to hear from you.",
}

export const contactMethods: Feature[] = [
  { icon: Mail, title: 'Email', description: siteConfig.contact.email },
  { icon: Phone, title: 'Phone', description: siteConfig.contact.phone },
  { icon: MapPin, title: 'Office', description: siteConfig.contact.office },
]

/** The role choice that reveals the free-text "tell us more" field. */
export const otherRole = 'Other'

export const roles = [
  'Independent Tradesperson',
  'Trades Firm',
  'Maintenance Provider',
  'Resident',
  otherRole,
]

export const form = {
  submit: 'Send message',
  submitting: 'Sending…',
  success: "Thanks — your message has been sent. We'll get back to you as soon as we can.",
  error: `Sorry, your message couldn't be sent. Please try again, or email us directly at ${siteConfig.contact.email}.`,
  throttled:
    'Your message was sent a moment ago — please wait a little before sending another.',
  footnote:
    "By submitting, you agree to our privacy policy. We'll never share your details.",
  otherDetail: {
    label: 'Optional Answer',
    placeholder: 'Tell us a little about what you do',
  },
}
