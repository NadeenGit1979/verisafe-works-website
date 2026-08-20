import { Check, Minus } from 'lucide-react'

import { SectionHeading } from '@/components/sections/section-heading'
import { Container } from '@/components/ui/container'
import { roles, visibilityRows, visibilitySection } from '@/content/who-its-for'
import type { Visibility } from '@/types/content'

/**
 * A tick alone is meaningless to a screen reader, so every cell carries its
 * state as text. `note` replaces that text when a cell is qualified.
 */
function Cell({ shown, note }: Visibility) {
  const Icon = shown ? Check : Minus

  return (
    <div className="flex flex-col items-center gap-1">
      <Icon
        className={shown ? 'h-5 w-5 text-primary' : 'h-5 w-5 text-muted-foreground/50'}
        aria-hidden="true"
      />
      {note ? (
        <span className="text-xs leading-snug text-muted-foreground">{note}</span>
      ) : (
        <span className="sr-only">{shown ? 'Shown' : 'Not shown'}</span>
      )}
    </div>
  )
}

export function VisibilityMatrix() {
  return (
    <section className="bg-secondary/40">
      <Container size="lg" className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={visibilitySection.eyebrow}
          title={visibilitySection.title}
          lede={visibilitySection.lede}
        />

        {/*
          Narrow screens scroll the table itself — never the page. `relative` is
          load-bearing: the cells' `sr-only` spans are absolutely positioned, and
          without a positioned ancestor they resolve against the page and drag the
          document's scroll width out past the viewport.
        */}
        <div className="relative mx-auto mt-12 max-w-3xl overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[34rem] text-left text-sm">
            <thead className="bg-secondary">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold text-foreground sm:px-6">
                  In the record
                </th>
                {roles.map((role) => (
                  <th
                    key={role}
                    scope="col"
                    className="px-4 py-3 text-center font-semibold text-foreground"
                  >
                    {role}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {visibilityRows.map((row) => (
                <tr key={row.label}>
                  <th
                    scope="row"
                    className="px-4 py-4 text-left align-middle font-medium text-foreground sm:px-6"
                  >
                    {row.label}
                  </th>
                  {row.cells.map((cell, index) => (
                    <td key={roles[index]} className="px-4 py-4 align-middle">
                      <Cell {...cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}
