import { Container } from '@/components/ui/Container'
import { siteConfig, socialLinks } from '@/data/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Built with Next.js and TypeScript.</p>
        <nav aria-label="Social links">
          {socialLinks.map(({ href, label }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{label}</a>
          ))}
        </nav>
      </Container>
    </footer>
  )
}
