import { Apple, Smartphone } from 'lucide-react'

import { siteConfig } from '@/config/site'

// Copy for /download — the single page every invite email, SMS and in-app
// "get the app" link now points at. It replaces the pair of raw store/file
// links that used to be pasted into emails, so the download source can change
// (Wormhole → our own storage → Play Store) without reissuing any email.

export const hero = {
  title: `Get the ${siteConfig.name} app`,
  lede: `Install the app to follow a job as it happens — documents, photos and updates on one shared record. Pick your device below.`,
}

export const androidCard = {
  icon: Smartphone,
  platform: 'Android',
  title: 'Download for Android',
  /** Filename the browser saves, so the tap reads as a deliberate download. */
  fileName: 'verisafe-works.apk',
  description:
    'Downloads the installer straight from us — no store account needed, and the link never expires.',
  cta: 'Download for Android',
  /** Rendered as "Version 1.0.0 · Android 8.0 or newer". */
  meta: (version: string) => `Version ${version} · Android 8.0 or newer`,
}

export const iosCard = {
  icon: Apple,
  platform: 'iPhone & iPad',
  title: 'Download for iPhone',
  description: `${siteConfig.name} is in its test phase on iOS, so it's distributed through Apple's TestFlight app.`,
  cta: 'Download via TestFlight',
  meta: 'Requires the free TestFlight app · iOS 15.1 or newer',
}

/**
 * Android sideload steps. The app isn't on Google Play yet, so Chrome warns
 * about the file type and Android asks for install permission — people abandon
 * the install at that prompt unless they've been told it's coming.
 */
export const androidSteps = {
  title: 'Installing on Android',
  steps: [
    'Tap Download for Android above — the APK saves to your Downloads.',
    'Chrome asks you to confirm the file type. Choose Download anyway.',
    'Open the downloaded file. Android asks permission to install from this source — allow it, then tap Install.',
    `Open ${siteConfig.name} and sign in with the phone number your invitation was sent to.`,
  ],
}

/** iOS sideload equivalent — TestFlight is an extra hop people forget. */
export const iosSteps = {
  title: 'Installing on iPhone',
  steps: [
    'Install Apple’s free TestFlight app from the App Store.',
    'Tap Download via TestFlight above and accept the invitation.',
    `Install ${siteConfig.name} from inside TestFlight.`,
    'Sign in with the phone number your invitation was sent to.',
  ],
}

export const help = {
  title: 'Stuck installing?',
  description: `Tell us the device you're on and we'll walk you through it — most installs take under two minutes.`,
  cta: 'Contact support',
}
