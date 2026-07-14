/**
 * Central, typed access to environment variables.
 *
 * Every variable the app reads must be declared here and documented in
 * .env.example — never read process.env inline elsewhere. Misconfiguration
 * then fails in one obvious place instead of leaking through the codebase.
 *
 * NEXT_PUBLIC_* variables are inlined at build time and safe for the client;
 * anything without that prefix must only be read on the server.
 */
export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  isProduction: process.env.NODE_ENV === 'production',
  /** True when building/running on Vercel; its analytics script only exists there. */
  isVercel: process.env.VERCEL === '1',
  /**
   * Web3Forms access key for the contact form. Public by design (Web3Forms
   * treats it as an identifier, not a secret) but inlined at build time, so it
   * must be set in the host's build environment, not just at runtime.
   */
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '',
} as const
