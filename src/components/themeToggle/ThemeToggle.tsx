import { useEffect, useState } from 'react'

interface ThemeClasses {
  classNames?: string
}

// TODO: Fix bag on responsive click button
function ThemeToggle({ classNames }: ThemeClasses) {
  const themeName = {
    dark: 'dark',
    light: 'light',
  }
  const [theme, setTheme] = useState(
    localStorage.getItem('Theme') || themeName.light
  )

  useEffect(() => {
    if (theme === themeName.dark) {
      document.documentElement.classList.add(themeName.dark)
    } else {
      document.documentElement.classList.remove(themeName.dark)
    }

    localStorage.setItem('Theme', theme)
  }, [theme, themeName.dark, themeName.light])

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themeName.dark ? themeName.light : themeName.dark
    )
  }

  return (
    <button
      className={
        classNames +
        ' p-2 bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-300 text-black dark:text-white'
      }
      onClick={toggleTheme}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle
