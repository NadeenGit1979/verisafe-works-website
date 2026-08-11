import { expect, test } from '@playwright/test'

/**
 * The Housing Associations page is the only page that makes statutory claims —
 * it quotes Awaab's Law response timescales at compliance leads who will know
 * them by heart. Getting one wrong is worse than not stating them, so the exact
 * wording is pinned here against the GOV.UK guidance rather than left to a
 * content review that may not happen again.
 *
 * Source: "Awaab's Law: Guidance for social landlords — Timeframes for repairs
 * in the social rented sector", GOV.UK.
 */

const HA = '/housing-associations'

test('the Awaab\'s Law section states every statutory timescale correctly', async ({ page }) => {
  await page.goto(HA)

  const section = page.getByRole('heading', { name: 'Phase 2 lands 30 November 2026' })
  await expect(section).toBeVisible()

  // Emergency hazards run on calendar hours; everything else on working days.
  await expect(page.getByText('Investigate and make safe within 24 hours of becoming aware')).toBeVisible()
  await expect(page.getByText('Investigate within 10 working days of becoming aware')).toBeVisible()
  await expect(
    page.getByText(
      'Findings and proposed action shared within 3 working days of the investigation concluding',
    ),
  ).toBeVisible()
  await expect(
    page.getByText('Complete within 5 working days of the investigation concluding'),
  ).toBeVisible()

  // The 12-week figure is a backstop on *starting* preventative work, not the
  // deadline itself — the duty is to take steps within 5 working days. Stating
  // only "commence within 12 weeks" understates the obligation.
  await expect(
    page.getByText(
      'Steps taken within 5 working days of the investigation concluding, so work begins as soon as reasonably practicable and within 12 weeks',
    ),
  ).toBeVisible()
})

test('the page dates both phases correctly', async ({ page }) => {
  await page.goto(HA)

  await expect(page.getByText('Phase 1 (emergency hazards and damp & mould) has applied since 27 October 2025', { exact: false })).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Phase 2 lands 30 November 2026' }),
  ).toBeVisible()
})

/**
 * Note on roles: `Button render={<Link/>}` renders a real anchor with an href,
 * but Base UI stamps `role="button"` on it, so it is exposed as a button rather
 * than a link. That is the repo-wide convention (main already does it in
 * CtaSection), so these tests query by button role and assert the href
 * separately rather than pretending the link role is there.
 */

test('hero call-to-action routes into Contact and How it works', async ({ page }) => {
  await page.goto(HA)

  const pilot = page.getByRole('button', { name: 'Book a pilot conversation' }).first()
  await expect(pilot).toHaveAttribute('href', '/contact')
  await pilot.click()
  await expect(
    page.getByRole('heading', { level: 1, name: "Let's talk transparency" }),
  ).toBeVisible()

  await page.goto(HA)
  await page.getByRole('button', { name: 'See how it works' }).click()
  await expect(
    page.getByRole('heading', { level: 1, name: 'How VeriSafe Works works' }),
  ).toBeVisible()
})

test('the closing CTA sends institutional visitors to Contact, not the tester form', async ({
  page,
}) => {
  await page.goto(HA)

  // The default CtaSection opens the individual early-tester Google Form. An
  // institutional audience must never be dropped into that funnel. Scoped to
  // <main> because the site header carries its own early-access link on every
  // page — that one is site-wide chrome, not this page's call to action.
  const main = page.locator('main')
  await expect(main.locator('a[href*="forms.gle"]')).toHaveCount(0)
  await expect(main.getByRole('button', { name: 'Get early access' })).toHaveCount(0)

  await main.getByRole('button', { name: 'See pricing' }).click()
  await expect(
    page.getByRole('heading', { level: 1, name: 'Transparent pricing, naturally' }),
  ).toBeVisible()
})

test('the Housing Associations pricing tier links to Contact instead of being disabled', async ({
  page,
}) => {
  await page.goto('/pricing')

  const cta = page.getByRole('button', { name: 'Talk to us about a pilot' })
  await expect(cta).toBeVisible()
  await expect(cta).toHaveAttribute('href', '/contact')
  await cta.click()
  await expect(
    page.getByRole('heading', { level: 1, name: "Let's talk transparency" }),
  ).toBeVisible()
})

test('the self-serve pricing tiers stay disabled during the test phase', async ({ page }) => {
  await page.goto('/pricing')

  const disabled = page.getByRole('button', { name: 'Coming soon' })
  await expect(disabled.first()).toBeDisabled()
})

test('the contact form offers Housing Association and no longer Maintenance Provider', async ({
  page,
}) => {
  await page.goto('/contact')
  const role = page.getByLabel('I am a…')

  await role.selectOption('Housing Association')
  await expect(role).toHaveValue('Housing Association')
  await expect(role.getByRole('option', { name: 'Maintenance Provider' })).toHaveCount(0)
})

test('no page still claims "Tamper-Proof"', async ({ page }) => {
  // "Tamper-Proof" overstates what a shared record can guarantee;
  // "tamper-evident" is the defensible form used in the legal docs.
  for (const path of [HA, '/', '/how-it-works'] as const) {
    await page.goto(path)
    const body = await page.locator('body').innerText()
    expect(body, `${path} still says Tamper-Proof`).not.toMatch(/tamper-proof/i)
  }
})

/**
 * The "fingerprinted" claim is knowingly ahead of the build, kept on 2026-08-10
 * because HA onboarding is 3–4 months out. This test does not block it — it
 * fails on 1 December 2026 so the decision resurfaces before the first security
 * questionnaire rather than being discovered by a buyer.
 *
 * To make it pass: hash each entry on write, chain each hash to the previous
 * one, and revoke UPDATE/DELETE on the table — then delete this test. Moving
 * the date instead is a decision to keep shipping a claim we cannot evidence.
 */
test('the "fingerprinted" claim has been made true, or is not yet overdue', async ({ page }) => {
  const DEADLINE = new Date('2026-12-01')

  await page.goto(HA)
  const claimsFingerprinting = /fingerprint/i.test(await page.locator('body').innerText())

  expect(
    !claimsFingerprinting || Date.now() < DEADLINE.getTime(),
    'The site claims entries are fingerprinted and the grace period has expired. ' +
      'Either ship per-entry hashing (see content/housing-associations.ts) or remove the claim.',
  ).toBe(true)
})

test('no page claims ISO 27001, which we have decided against for now', async ({ page }) => {
  // CLIENT-SUMMARY.md records ISO 27001 as "No — not currently needed", and
  // COMPLIANCE-CE-ISO27001.md §6 says not to claim alignment. A public claim
  // here would contradict our own answer to the questionnaire that follows.
  for (const path of [HA, '/', '/how-it-works', '/pricing'] as const) {
    await page.goto(path)
    const body = await page.locator('body').innerText()
    expect(body, `${path} mentions ISO 27001`).not.toMatch(/iso\s*27001/i)
  }
})

test('testimonials are gone from the homepage', async ({ page }) => {
  await page.goto('/')
  const body = await page.locator('body').innerText()

  expect(body).not.toContain('the conversation stops being about blame')
  expect(body).not.toMatch(/Maintenance Lead, regional housing association/i)
})
