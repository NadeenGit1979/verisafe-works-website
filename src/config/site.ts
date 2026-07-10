/**
 * Single source of truth for brand identity and company details.
 * Nothing outside this file may hardcode the brand name or contact details.
 */
export const siteConfig = {
  name: 'VeriSafe Works',
  tagline: 'Trust Through Transparency',
  title: 'VeriSafe Works — Trust Through Transparency for Every Job',
  description:
    'VeriSafe Works keeps a complete, shared record of every job — documents, photos and audio conversations — for tradespeople, housing association maintenance teams and the residents they work for.',
  contact: {
    email: 'hello@verisafe.works',
    phone: '+44 (0)20 7946 0000',
    office: 'London, United Kingdom',
  },
  /** Registered legal entity details, used by the legal documents. */
  legal: {
    companyName: 'Verisafe Software Limited',
    registeredAddress: '75 Blackdown View, Ilminster, TA19 0BD',
    companyNumber: '16649843',
    icoNumber: 'ZC028351',
    email: 'legal@verisafe.works',
  },
  /**
   * The product is in its test phase — nothing is for sale yet. Every
   * call-to-action recruits early testers instead of selling, and paid tiers
   * are presented as coming soon. Flip these when the sell phase starts.
   */
  cta: {
    primary: 'Get early access',
    secondary: 'Become a tester',
  },
} as const
