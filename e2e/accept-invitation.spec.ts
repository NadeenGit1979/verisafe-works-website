import { expect, test } from '@playwright/test'

// /accept-invitation is the landing page for backend invite links
// (`${APP_INVITE_BASE_URL}/accept-invitation?token=…`). Until OS-level app
// links verify, every tap lands here in a browser, so this page — and the
// .well-known files that upgrade taps to open the app directly — are what make
// invitations work at all.

test('/accept-invitation forwards the token to the app deep link', async ({ page }) => {
  const consoleErrors: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })
  page.on('pageerror', (error) => consoleErrors.push(error.message))

  await page.goto('/accept-invitation?token=test-token-123')
  await expect(
    page.getByRole('heading', { level: 1, name: "You've been invited to a job" }),
  ).toBeVisible()

  // The token must survive the round trip into the custom-scheme link the
  // "open in app" button targets — a dropped/mangled token means the app
  // opens but the invitation can't be accepted. (The Button primitive renders
  // anchors with role="button", hence the button locator on an href check.)
  await expect(page.getByRole('button', { name: 'Open in the app' })).toHaveAttribute(
    'href',
    'verisafeworks://accept-invitation?token=test-token-123',
  )

  await page.screenshot({ path: 'e2e/screenshots/accept-invitation.png', fullPage: true })
  expect(consoleErrors).toEqual([])
})

test('a tokenless visit explains the link is incomplete instead of dead-ending', async ({
  page,
}) => {
  await page.goto('/accept-invitation')
  await expect(
    page.getByRole('heading', { level: 1, name: "You've been invited to a job" }),
  ).toBeVisible()

  // No token → no app button (it could never accept anything), and a plain
  // explanation of what to do next.
  await expect(page.getByRole('button', { name: 'Open in the app' })).toHaveCount(0)
  await expect(page.getByText('This invitation link looks incomplete')).toBeVisible()
})

test('the .well-known app-link files are exported and served', async ({ request }) => {
  // Apple fetches this exact extensionless path; if the static export drops
  // dot-directories or the host 404s it, Universal Links silently never work.
  const aasa = await request.get('/.well-known/apple-app-site-association')
  expect(aasa.status()).toBe(200)
  const aasaJson = JSON.parse(await aasa.text())
  const detail = aasaJson.applinks.details[0]
  expect(detail.appIDs[0]).toContain('com.verisafe.works')
  expect(detail.components[0]['/']).toBe('/accept-invitation*')

  const assetlinks = await request.get('/.well-known/assetlinks.json')
  expect(assetlinks.status()).toBe(200)
  const [statement] = await assetlinks.json()
  expect(statement.relation).toContain('delegate_permission/common.handle_all_urls')
  expect(statement.target.package_name).toBe('com.verisafe.works')
  expect(statement.target.sha256_cert_fingerprints.length).toBeGreaterThan(0)
})
