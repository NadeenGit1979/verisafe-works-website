import { expect, test } from '@playwright/test'

/**
 * Layout guarantees that the per-page specs can't catch, because they run at a
 * single viewport. The sticky header is the fragile part: its nav, wordmark and
 * CTA all sit on one row, so growing any of them can silently push the page
 * wider than the viewport. That regressed once already (16px nav type overflowed
 * 768px by 8px), so it is pinned here.
 */

const paths = [
  '/',
  '/how-it-works',
  '/who-its-for',
  '/pricing',
  '/download',
  '/contact',
  '/privacy',
  '/terms',
] as const

// 768px is the tight one — it is where the desktop nav first replaces the
// hamburger, so the full nav row has the least room it will ever have.
const widths = [390, 768, 1024, 1440] as const

for (const width of widths) {
  test(`no page scrolls horizontally at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })

    for (const path of paths) {
      await page.goto(path)
      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }))
      // 1px of slack for subpixel rounding; real overflows are far larger.
      expect(scrollWidth, `${path} overflows at ${width}px`).toBeLessThanOrEqual(clientWidth + 1)
    }
  })
}

test('the desktop nav and hamburger swap over at the md breakpoint', async ({ page }) => {
  const nav = page.getByRole('navigation', { name: 'Main' })
  const hamburger = page.getByRole('button', { name: 'Open menu' })

  await page.setViewportSize({ width: 768, height: 900 })
  await page.goto('/')
  await expect(nav).toBeVisible()
  await expect(hamburger).toBeHidden()

  await page.setViewportSize({ width: 767, height: 900 })
  await expect(nav).toBeHidden()
  await expect(hamburger).toBeVisible()
})

test('the mobile menu panel stays pinned to the header height', async ({ page }) => {
  // MobileNav's `top-*` is a hardcoded twin of the header's `h-*`; if one moves
  // without the other the panel floats or overlaps. It has drifted before.
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.getByRole('button', { name: 'Open menu' }).click()

  const header = (await page.locator('header').boundingBox())!
  const panel = (await page.locator('nav[aria-label="Mobile"]').locator('..').boundingBox())!

  expect(Math.abs(panel.y - (header.y + header.height))).toBeLessThanOrEqual(1)
})
