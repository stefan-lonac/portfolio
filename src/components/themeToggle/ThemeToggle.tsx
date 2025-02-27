import { useEffect, useState } from 'react'

function ThemeToggle() {
  const themeName = {
    dark: 'dark',
    light: 'light',
  }
  const [theme, setTheme] = useState(
    localStorage.getItem('Theme') || themeName.light
  )

  useEffect(() => {
    theme === themeName.dark
      ? document.documentElement.classList.add(themeName.dark)
      : document.documentElement.classList.remove(themeName.dark)

    localStorage.setItem('Theme', theme)
  }, [theme, themeName.dark, themeName.light])

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themeName.dark ? themeName.light : themeName.dark
    )
  }

  return (
    <button
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle
