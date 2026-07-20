import { siteConfig } from '@/config/site'

// Landing copy for backend invitation links
// (`${APP_INVITE_BASE_URL}/accept-invitation?token=…`). The page is an
// external entry point only — nothing on the site links to it, so it stays out
// of ROUTES/nav and is marked noindex by its metadata.

export const hero = {
  title: "You've been invited to a job",
  lede: `Someone wants to share their ${siteConfig.name} job record with you — accept the invitation in the app to see documents, photos and updates as the job happens.`,
}

export const openApp = {
  cta: 'Open in the app',
  hint: `The invitation opens in the ${siteConfig.name} app. If nothing happens, the app isn't installed on this device yet.`,
  /** Invitation tokens expire server-side; the page can't check, so we warn. */
  expiryNote:
    'Invitation links expire for security. If the app says yours has expired, ask the sender for a fresh one.',
}

export const noApp = {
  title: "Don't have the app yet?",
  description: `${siteConfig.name} is in its test phase — ask for early access and we'll get you set up before the invitation expires.`,
}

export const invalidLink = {
  title: 'This invitation link looks incomplete',
  description:
    'The link is missing its invitation token, so the app would have nothing to accept. Ask the person who invited you to re-send the invitation, then open the newest link on this device.',
}
