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
  /**
   * Test-phase app builds. Android is served from our own Supabase storage so
   * the link never expires (the old Wormhole share died after hours, silently
   * breaking every invite email already sent). The object path is stable —
   * each release overwrites `verisafe-works-latest.apk` in the public
   * `app-builds` bucket — so only `androidVersion` changes here, and it
   * doubles as the CDN cache-buster appended to the download URL.
   * iOS stays on TestFlight until the App Store listing is live.
   */
  appDownloads: {
    android:
      'https://twyyinrbanmejxupgqra.supabase.co/storage/v1/object/public/app-builds/verisafe-works-latest.apk',
    /**
     * Bump on every APK upload: shown on /download and busts the CDN cache.
     * Mirror the app's `versionName` (android/app/build.gradle) so a tester
     * reporting "I'm on 1.0" names something we can actually look up.
     */
    androidVersion: '1.0',
    ios: 'https://testflight.apple.com/join/An8SD64S',
  },
} as const

/**
 * The Android download link as it should be used in markup: the stable object
 * path plus the release version as a query string. Supabase ignores the extra
 * param but its CDN keys on the full URL, so a freshly uploaded APK is served
 * immediately instead of the previous build sitting in an edge cache.
 * Always link to this — never to `appDownloads.android` directly.
 */
export const androidApkUrl =
  `${siteConfig.appDownloads.android}?v=${siteConfig.appDownloads.androidVersion}` as const
