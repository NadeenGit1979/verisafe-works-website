import { expect, test } from '@playwright/test'

const pages = [
  { path: '/', slug: 'home', heading: 'One shared record of every job' },
  {
    path: '/housing-associations',
    slug: 'housing-associations',
    heading: 'Evidence every repair, automatically',
  },
  { path: '/trades', slug: 'trades', heading: 'Proof of every job, built in' },
  {
    path: '/residents',
    slug: 'residents',
    heading: "Your home's record, held by you too",
  },
  { path: '/how-it-works', slug: 'how-it-works', heading: 'How VeriSafe Works works' },
  { path: '/who-its-for', slug: 'who-its-for', heading: 'Built for everyone on the job' },
  { path: '/pricing', slug: 'pricing', heading: 'Transparent pricing, naturally' },
  { path: '/download', slug: 'download', heading: 'Get the VeriSafe Works app' },
  { path: '/contact', slug: 'contact', heading: "Let's talk transparency" },
  { path: '/privacy', slug: 'privacy', heading: 'Privacy Policy' },
  { path: '/terms', slug: 'terms', heading: 'Terms & Conditions' },
] as const

for (const { path, slug, heading } of pages) {
  test(`${path} renders without errors and captures a screenshot`, async ({ page }) => {
    const consoleErrors: string[] = []
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text())
    })
    page.on('pageerror', (error) => consoleErrors.push(error.message))
    page.on('response', (response) => {
      if (response.status() >= 400) consoleErrors.push(`${response.status()} ${response.url()}`)
    })

    await page.goto(path)
    await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible()

    await page.screenshot({ path: `e2e/screenshots/${slug}.png`, fullPage: true })
    expect(consoleErrors).toEqual([])
  })
}

test('header navigation reaches every page', async ({ page }) => {
  const links = [
    { label: 'Housing Associations', heading: 'Evidence every repair, automatically' },
    { label: 'Trades', heading: 'Proof of every job, built in' },
    { label: 'Residents', heading: "Your home's record, held by you too" },
    { label: 'How it works', heading: 'How VeriSafe Works works' },
    { label: 'Pricing', heading: 'Transparent pricing, naturally' },
    { label: 'Contact', heading: "Let's talk transparency" },
  ]

  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Main' })

  for (const { label, heading } of links) {
    await nav.getByRole('link', { name: label, exact: true }).click()
    await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible()
  }
})

test('mobile menu opens, navigates and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')

  await page.getByRole('button', { name: 'Open menu' }).click()
  const mobileNav = page.getByRole('navigation', { name: 'Mobile' })
  await expect(mobileNav).toBeVisible()

  await mobileNav.getByRole('link', { name: 'Pricing' }).click()
  await expect(
    page.getByRole('heading', { level: 1, name: 'Transparent pricing, naturally' }),
  ).toBeVisible()
  await expect(mobileNav).toBeHidden()
})

test('theme toggle flips the theme and persists it across reloads', async ({ page }) => {
  await page.goto('/')
  const html = page.locator('html')
  // Playwright emulates a light OS preference, so the boot script lands on light.
  await expect(html).toHaveClass(/\blight\b/)

  await page.getByRole('button', { name: 'Toggle theme' }).click()
  await expect(html).toHaveClass(/\bdark\b/)

  await page.reload()
  await expect(html).toHaveClass(/\bdark\b/)

  await page.getByRole('button', { name: 'Toggle theme' }).click()
  await expect(html).toHaveClass(/\blight\b/)
})

test('contact form is present with all fields', async ({ page }) => {
  await page.goto('/contact')

  await expect(page.getByLabel('Full name')).toBeVisible()
  await expect(page.getByLabel('Email')).toBeVisible()
  await expect(page.getByLabel('I am a…')).toBeVisible()
  await expect(page.getByLabel('Message')).toBeVisible()
  await expect(page.getByText('0/5000')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Send message' })).toBeVisible()
})

test('optional answer field appears only for the Other role and clears on reselect', async ({
  page,
}) => {
  await page.goto('/contact')
  const roleSelect = page.getByLabel('I am a…')

  await expect(page.getByLabel('Optional Answer')).toHaveCount(0)

  await roleSelect.selectOption('Other')
  const optionalAnswer = page.getByLabel('Optional Answer')
  await expect(optionalAnswer).toBeVisible()
  await expect(page.getByText('0/200')).toBeVisible()
  await optionalAnswer.fill('Housing association')
  await expect(page.getByText('19/200')).toBeVisible()

  await roleSelect.selectOption('Resident')
  await expect(page.getByLabel('Optional Answer')).toHaveCount(0)

  await roleSelect.selectOption('Other')
  await expect(page.getByLabel('Optional Answer')).toHaveValue('')
})
