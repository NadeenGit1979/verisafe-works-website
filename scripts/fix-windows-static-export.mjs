// Works around a Windows-only Next.js static-export bug (present in 16.2.x):
// the exporter builds RSC segment filenames from `path.relative()` output and
// only converts forward slashes to dots, so on Windows the leftover
// backslashes create nested directories. The client router requests the flat
// form (`/contact/__next.contact.__PAGE__.txt`), which then 404s.
//
// This flattens any directory under `out/` whose name starts with `__next.`
// back into the dot-joined filenames the client expects. On Linux/macOS the
// exporter writes the flat files directly, so this is a no-op there (and on
// Render). Delete this script once the upstream bug is fixed:
// next/dist/export/index.js `collectSegmentPathsImpl` vs.
// next/dist/shared/lib/segment-cache/segment-value-encoding.js.
import { promises as fs } from 'node:fs'
import path from 'node:path'

const outDir = path.join(process.cwd(), 'out')

async function flatten(parent, dir, prefix) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await flatten(parent, full, `${prefix}.${entry.name}`)
    } else {
      await fs.rename(full, path.join(parent, `${prefix}.${entry.name}`))
    }
  }
  await fs.rmdir(dir)
}

async function walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue
    const full = path.join(dir, entry.name)
    if (entry.name.startsWith('__next.')) {
      await flatten(dir, full, entry.name)
    } else {
      await walk(full)
    }
  }
}

await walk(outDir)
