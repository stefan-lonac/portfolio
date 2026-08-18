import { About } from '@/components/sections/About'
import { Career } from '@/components/sections/Career'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { siteConfig } from '@/data/site'

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/stefan-loncaric.jpg`,
    jobTitle: siteConfig.role,
    email: `mailto:${siteConfig.email}`,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: ['React', 'Angular', 'TypeScript', 'JavaScript', 'PHP', 'WordPress', 'REST APIs', 'Google Cloud'],
  }

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Career />
      <Contact />
    </main>
  )
}
