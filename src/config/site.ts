/**
 * Single source of truth for brand identity and company details.
 * Nothing outside this file may hardcode the brand name or contact details.
 */
export const siteConfig = {
  name: 'VeriSafe Works',
  tagline: 'Trust Through Transparency',
  title: 'VeriSafe Works — Trust Through Transparency for Every Job',
  description:
    'VeriSafe Works keeps a complete, shared record of every job — documents, photos and audio conversations — for tradespeople, maintenance providers and the residents they work for.',
  contact: {
    email: 'info@verisafe.works',
    phone: '01460 595339',
    office: 'United Kingdom',
  },
  /** Registered legal entity details, used by the legal documents. */
  legal: {
    companyName: 'Verisafe Software Limited',
    registeredAddress: '75 Blackdown View, Ilminster, TA19 0BD',
    companyNumber: '16649843',
    icoNumber: 'ZC028351',
    email: 'info@verisafe.works',
  },
  /**
   * The product is in its test phase — nothing is for sale yet. Every
   * call-to-action recruits early testers instead of selling, and paid tiers
   * are presented as coming soon. Flip these when the sell phase starts.
   */
  cta: {
    primary: 'Get early access',
    secondary: 'Become a tester',
    /** Test-phase sign-up form (Google Form) every early-access CTA opens. */
    href: 'https://forms.gle/oBtLxnfLJZXQHVxj8',
  },
} as const
