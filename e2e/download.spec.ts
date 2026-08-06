import { expect, test } from '@playwright/test'

// /download is the single destination every invite email and SMS now points
// at, replacing the raw links that used to be pasted into each message. If a
// button here breaks, an invited customer or tradesperson has no way to install
// the app — and the email that sent them is already delivered and unfixable.

const APK_HOST = 'https://twyyinrbanmejxupgqra.supabase.co'

test('the Android button downloads our own APK, not an expiring third-party link', async ({
  page,
}) => {
  await page.goto('/download')

  // Button primitive renders anchors with role="button".
  const android = page.getByRole('button', { name: 'Download for Android' })
  const href = await android.getAttribute('href')

  // Must be the APK on our storage: the old Wormhole/file-share links expired
  // within hours, so every invite email sent before the expiry went dead.
  expect(href).toContain(`${APK_HOST}/storage/v1/object/public/app-builds/`)
  expect(href).toContain('.apk')
  expect(href).not.toContain('wormhole')

  // The version query string is what busts Supabase's CDN cache when a new
  // build is uploaded over the same object path. Without it, testers keep
  // getting the previous APK from an edge cache. The value tracks the app's
  // versionName, so assert it is present and non-empty rather than pinning a
  // format the Android build is free to change.
  expect(href).toMatch(/\?v=[^&\s]+$/)
})

test('the iPhone button still goes to TestFlight', async ({ page }) => {
  await page.goto('/download')

  await expect(page.getByRole('button', { name: 'Download via TestFlight' })).toHaveAttribute(
    'href',
    'https://testflight.apple.com/join/An8SD64S',
  )
})

test('both platforms are reachable by anchor so a message can link one directly', async ({
  page,
}) => {
  await page.goto('/download#android')
  await expect(page.locator('#android')).toBeVisible()

  await page.goto('/download#ios')
  await expect(page.locator('#ios')).toBeVisible()
})

test('the page explains the Android install prompts people would otherwise abandon at', async ({
  page,
}) => {
  await page.goto('/download')

  // Sideloading shows two scary prompts (Chrome's file-type warning, then
  // Android's install-permission dialog). Testers stop there unless the page
  // has already told them both are expected.
  await expect(page.getByText('Download anyway')).toBeVisible()
  await expect(page.getByText('permission to install from this source')).toBeVisible()
})

test('the accept-invitation page offers the same self-hosted APK', async ({ page }) => {
  // An app-less invitee lands here from the emailed accept link; its Android
  // button must not drift back to a link with an expiry.
  await page.goto('/accept-invitation?token=test-token-123')

  const href = await page
    .getByRole('button', { name: 'Download for Android' })
    .getAttribute('href')

  expect(href).toContain(`${APK_HOST}/storage/v1/object/public/app-builds/`)
  expect(href).not.toContain('wormhole')
})
