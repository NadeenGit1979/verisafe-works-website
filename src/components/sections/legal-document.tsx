import { Container } from '@/components/ui/container'
import { cn } from '@/lib/utils'
import type { LegalBlock, LegalDocument } from '@/types/content'

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case 'paragraph':
      return <p className="leading-relaxed text-muted-foreground">{block.text}</p>
    case 'subheading':
      return (
        <h3 className="pt-2 font-heading text-lg font-semibold text-foreground">{block.text}</h3>
      )
    case 'list': {
      const ListTag = block.ordered ? 'ol' : 'ul'
      return (
        <ListTag
          className={cn(
            'space-y-2 pl-6 text-muted-foreground marker:text-primary',
            block.ordered ? 'list-decimal marker:font-medium' : 'list-disc',
          )}
        >
          {block.items.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ListTag>
      )
    }
    case 'table':
      return (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            {block.headers && (
              <thead className="bg-secondary">
                <tr>
                  {block.headers.map((header) => (
                    <th key={header} className="px-4 py-3 font-semibold text-foreground">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-border">
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cell}
                      className={
                        cellIndex === 0
                          ? 'px-4 py-3 align-top font-medium text-foreground'
                          : 'px-4 py-3 align-top text-muted-foreground'
                      }
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'note':
      // A notice band, not a card: a hairline amber rule broken by a heavier
      // lead-in tab, the way a printed statute marks a passage. Square edges and
      // no left bar — that device belongs to the section headings below.
      return (
        <aside className="relative border-t border-accent-amber/45 bg-accent-amber/[0.08] p-5 leading-relaxed text-foreground">
          <span aria-hidden className="absolute -top-px left-0 h-1 w-16 bg-accent-amber" />
          {block.text}
        </aside>
      )
  }
}

/** Renders a full legal document: dateline plus numbered, linkable sections. */
export function LegalDocumentBody({ document }: { document: LegalDocument }) {
  return (
    <Container size="sm" className="py-14 sm:py-16">
      <p className="text-sm text-muted-foreground">
        Effective date: {document.effectiveDate} · Last updated: {document.lastUpdated} · Version{' '}
        {document.version}
      </p>
      <div className="mt-10 space-y-12">
        {document.sections.map((section) => (
          // Clears the sticky header (h-20) plus a little breathing room.
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="border-l-4 border-primary pl-4 font-heading text-2xl font-bold tracking-tight text-foreground">
              {section.title}
            </h2>
            <div className="mt-4 space-y-4">
              {section.blocks.map((block, blockIndex) => (
                <Block key={blockIndex} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  )
}
