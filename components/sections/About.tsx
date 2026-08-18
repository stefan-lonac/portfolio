import { GoPerson } from 'react-icons/go'
import { HiOutlineArrowDownTray } from 'react-icons/hi2'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { withBasePath } from '@/data/site'

const strengths = [
  ['Product thinking', 'I connect technical decisions with real business goals and user needs.'],
  ['Clean architecture', 'Reusable components, strict types and code that stays maintainable as products grow.'],
  ['End-to-end delivery', 'From interface and APIs to integrations, deployment and production support.'],
] as const

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="about-heading"
            eyebrow="About me"
            title="Engineering with curiosity and care."
            description="Experienced web developer with a strong background in web technologies and best design practices. I enjoy solving difficult problems, learning continuously and collaborating with people who care about the result."
            icon={GoPerson}
          />
        </Reveal>
        <div className="strength-grid">
          {strengths.map(([title, description], index) => (
            <Reveal key={title} delay={index * 90} className="strength-card">
              <span className="strength-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="center-action">
          <a className="button button--ghost" href={withBasePath('/documents/stefan-loncaric-cv.pdf')} target="_blank" rel="noreferrer">
            Download CV <HiOutlineArrowDownTray aria-hidden="true" />
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
