import { defineConfig, devices } from '@playwright/test'

const PORT = 3100
const BASE_URL = `http://localhost:${PORT}`

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // A single static-server instance serves all tests; too many parallel
  // browsers starve it on local machines.
  workers: 2,
  reporter: [['list']],
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } },
    },
  ],
  // Tests run against the exported static build — the same artifact Render
  // serves in production.
  webServer: {
    command: `pnpm build && pnpm start -l ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
})
