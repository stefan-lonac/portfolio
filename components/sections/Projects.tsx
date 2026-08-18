import { GoProjectRoadmap } from 'react-icons/go'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectGallery } from './ProjectGallery'

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="Selected work"
            title="Products built for real-world use."
            description="A selection of applications, platforms and websites across healthcare, property management, e-commerce and professional services."
            icon={GoProjectRoadmap}
          />
        </Reveal>
        <ProjectGallery />
      </Container>
    </section>
  )
}
