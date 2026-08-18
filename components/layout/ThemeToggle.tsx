'use client'

import { useEffect } from 'react'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2'

type Theme = 'light' | 'dark'

function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export function ThemeToggle() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    const preferredTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    const initialTheme: Theme = savedTheme === 'dark' || savedTheme === 'light'
      ? savedTheme
      : preferredTheme

    applyTheme(initialTheme)
  }, [])

  const toggleTheme = (): void => {
    const currentTheme: Theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
    const nextTheme: Theme = currentTheme === 'dark' ? 'light' : 'dark'
    applyTheme(nextTheme)
    localStorage.setItem('portfolio-theme', nextTheme)
  }

  return (
    <button className="icon-button theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle color theme" title="Toggle color theme">
      <HiOutlineSun className="theme-toggle__sun" aria-hidden="true" />
      <HiOutlineMoon className="theme-toggle__moon" aria-hidden="true" />
    </button>
  )
}
