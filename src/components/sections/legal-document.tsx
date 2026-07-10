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
      return (
        <aside className="rounded-xl border-l-4 border-accent-amber bg-accent-amber/10 p-4 text-sm leading-relaxed text-foreground">
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
