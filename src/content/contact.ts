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

export const roles = [
  'Independent Tradesperson',
  'Trades Firm',
  'Maintenance Provider',
  'Resident',
  'Other',
]
