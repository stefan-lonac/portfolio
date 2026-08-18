import Image from 'next/image'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiArrowDown, HiArrowUpRight, HiOutlineEnvelope } from 'react-icons/hi2'
import { Container } from '@/components/ui/Container'
import { siteConfig, withBasePath } from '@/data/site'

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />
      <Container className="hero-grid">
        <div className="hero-copy">
          <p className="availability"><span aria-hidden="true" /> Available for selected projects</p>
          <h1 id="hero-title">I build digital products that <em>work beautifully.</em></h1>
          <p className="hero-intro">
            I’m {siteConfig.name}, a full stack web developer turning complex ideas into fast,
            accessible and maintainable web experiences.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projects">Explore my work <HiArrowDown aria-hidden="true" /></a>
            <a className="button button--ghost" href={`mailto:${siteConfig.email}`}>Start a conversation <HiArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="hero-socials" aria-label="Professional profiles">
            <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email"><HiOutlineEnvelope /></a>
            <span>{siteConfig.location}</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait of Stefan Lončarić">
          <div className="portrait-frame">
            <Image
              src={withBasePath('/images/stefan-loncaric.jpg')}
              alt="Stefan Lončarić, Full Stack Web Developer"
              fill
              sizes="(max-width: 800px) 76vw, 430px"
              className="portrait"
              priority
            />
          </div>
          <div className="floating-card floating-card--experience"><strong>8+</strong><span>years of<br />experience</span></div>
          <div className="floating-card floating-card--stack"><span>Current focus</span><strong>React · TS · APIs</strong></div>
        </div>
      </Container>
    </section>
  )
}
