import { HiArrowUpRight, HiOutlineEnvelope } from 'react-icons/hi2'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig, socialLinks } from '@/data/site'

export function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <Container>
        <Reveal className="contact-card">
          <div>
            <span className="eyebrow"><HiOutlineEnvelope aria-hidden="true" /> Contact</span>
            <h2 id="contact-heading">Have a product in mind?<br /><em>Let’s make it real.</em></h2>
            <p>I’m open to strong product teams, ambitious web projects and long-term collaborations.</p>
          </div>
          <div className="contact-actions">
            <a className="button button--light" href={`mailto:${siteConfig.email}`}>{siteConfig.email}<HiArrowUpRight aria-hidden="true" /></a>
            <div className="contact-socials">
              {socialLinks.slice(0, 2).map(({ href, label, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"><Icon aria-hidden="true" />{label}</a>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
