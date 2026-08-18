'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'
import { navigation, withBasePath } from '@/data/site'
import { Container } from '@/components/ui/Container'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateHeader = (): void => setIsScrolled(window.scrollY > 16)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    const mainElement = document.getElementById('main-content')

    if (!mainElement) return

    mainElement.classList.toggle('mobile-menu-open', isOpen)

    return () => mainElement.classList.remove('mobile-menu-open')
  }, [isOpen])

  const closeMenu = (): void => setIsOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <Container className="header-inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Stefan Lončarić — home">
          <Image src={withBasePath('/images/logo.png')} width={42} height={42} alt="" priority />
          <span><strong>Stefan</strong><small>Web developer</small></span>
        </a>

        <nav id="mobile-navigation" className={`main-nav ${isOpen ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="button button--small" href="mailto:loncaric.stefan@gmail.com" onClick={closeMenu}>Let’s talk</a>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          >
            {isOpen ? <HiOutlineXMark aria-hidden="true" /> : <HiOutlineBars3 aria-hidden="true" />}
          </button>
        </div>
      </Container>
    </header>
  )
}
