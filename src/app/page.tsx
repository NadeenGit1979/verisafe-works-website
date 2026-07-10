import { CtaSection } from '@/components/sections/cta-section'
import { cta } from '@/content/home'

import { HomeAudiences } from './_components/home-audiences'
import { HomeHero } from './_components/home-hero'
import { HomeRecordTypes } from './_components/home-record-types'
import { HomeStats } from './_components/home-stats'
import { HomeTestimonial } from './_components/home-testimonial'
import { HomeWorkflow } from './_components/home-workflow'

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeStats />
      <HomeRecordTypes />
      <HomeWorkflow />
      <HomeAudiences />
      <HomeTestimonial />
      <CtaSection {...cta} />
    </main>
  )
}
