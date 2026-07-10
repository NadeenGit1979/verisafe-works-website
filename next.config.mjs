/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pure marketing site with no server-side features; export static HTML so
  // it can be hosted on a static host (Render Static Site).
  output: 'export',
  // Surfaces missing effect cleanups in development by double-invoking effects.
  reactStrictMode: true,
  // Type-checks every <Link href> against the real route tree.
  typedRoutes: true,
  images: {
    // Static marketing images are pre-sized; skip the optimizer so the site
    // can be self-hosted without sharp. Revisit if remote images are added.
    unoptimized: true,
  },
}

export default nextConfig
