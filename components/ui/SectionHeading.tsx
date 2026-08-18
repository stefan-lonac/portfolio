import type { IconType } from 'react-icons'

interface SectionHeadingProps {
  readonly id: string
  readonly eyebrow: string
  readonly title: string
  readonly description?: string
  readonly icon: IconType
  readonly align?: 'left' | 'center'
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  icon: Icon,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <span className="eyebrow"><Icon aria-hidden="true" />{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  )
}
