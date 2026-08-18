import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineEnvelope } from 'react-icons/hi2'

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export function withBasePath(path: `/${string}`): string {
  return `${basePath}${path}`
}

export const siteConfig = {
  name: 'Stefan Lončarić',
  role: 'Full Stack Web Developer',
  description:
    'Full Stack Web Developer specializing in React, Angular, TypeScript, PHP, WordPress, APIs and scalable digital products.',
  email: 'loncaric.stefan@gmail.com',
  url: 'https://stefan-lonac.github.io/portfolio',
  location: 'Serbia · Available worldwide',
  github: 'https://github.com/stefan-lonac',
  linkedin: 'https://www.linkedin.com/in/stefan-loncaric/',
} as const

export interface NavigationItem {
  readonly label: string
  readonly href: `#${string}`
}

export const navigation: readonly NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Career', href: '#career' },
  { label: 'Contact', href: '#contact' },
]

export interface SocialLink {
  readonly label: string
  readonly href: string
  readonly icon: IconType
}

export const socialLinks: readonly SocialLink[] = [
  { label: 'GitHub', href: siteConfig.github, icon: FaGithub },
  { label: 'LinkedIn', href: siteConfig.linkedin, icon: FaLinkedinIn },
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: HiOutlineEnvelope },
]
