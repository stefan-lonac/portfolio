import { HiCheck, HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi2'
import { EDUCATION, PERSONAL_CAREER } from '@/data/career'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Career() {
  return (
    <section className="section section--tinted" id="career" aria-labelledby="career-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="career-heading"
            eyebrow="Experience"
            title="A career built by shipping."
            description="Hands-on experience across product teams, agencies and independent client work."
            icon={HiOutlineBriefcase}
          />
        </Reveal>
        <div className="timeline">
          {PERSONAL_CAREER.map((job, index) => (
            <Reveal className="timeline-item" key={`${job.company}-${job.date}`} delay={(index % 2) * 80}>
              <span className="timeline-dot" aria-hidden="true"><HiOutlineBriefcase /></span>
              <article className="career-card">
                <div className="career-topline">
                  <div><p>{job.company}</p><h3>{job.title}</h3></div>
                  <div className="career-meta"><span>{job.jobType}</span><time>{job.date}</time></div>
                </div>
                <ul>
                  {job.jobDescription.map((description) => (
                    <li key={description}><HiCheck aria-hidden="true" /><span>{description}</span></li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
          {EDUCATION.map((education) => (
            <Reveal className="timeline-item" key={education.title}>
              <span className="timeline-dot" aria-hidden="true"><HiOutlineAcademicCap /></span>
              <article className="career-card education-card">
                <div className="career-topline">
                  <div><p>Education</p><h3>{education.title}</h3></div>
                  <div className="career-meta"><span>{education.eduType}</span><time>{education.date}</time></div>
                </div>
                <p>{education.graduate}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
