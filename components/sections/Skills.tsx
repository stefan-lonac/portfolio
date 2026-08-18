import { HiOutlineCodeBracketSquare } from 'react-icons/hi2'
import { SKILLS_LIST } from '@/data/skills'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Skills() {
  return (
    <section className="section section--tinted" id="skills" aria-labelledby="skills-heading">
      <Container>
        <Reveal>
          <SectionHeading
            id="skills-heading"
            eyebrow="Capabilities"
            title="A practical, full-stack toolkit."
            description="The technologies I use to take products from an initial idea to a stable production experience."
            icon={HiOutlineCodeBracketSquare}
          />
        </Reveal>
        <div className="skills-grid">
          {SKILLS_LIST.map((group, index) => {
            const GroupIcon = group.icon
            return (
              <Reveal className="skill-group" key={group.category} delay={(index % 3) * 70}>
                <h3>{GroupIcon ? <GroupIcon aria-hidden="true" /> : null}{group.category}</h3>
                <ul>
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon
                    return <li key={skill.title}>{SkillIcon ? <SkillIcon aria-hidden="true" /> : null}<span>{skill.title}</span></li>
                  })}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
