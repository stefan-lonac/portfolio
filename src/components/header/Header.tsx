import ThemeToggle from '../themeToggle/ThemeToggle'
import './Header.css'
import { NAVIGATION_DATA } from './navigation.const'

function Header() {
  return (
    <header className="header-container w-full fixed transition-all dark:bg-gray-800 shadow-lg flex items-center justify-between flex-row">
      <a className="text-gray-800 dark:text-stone-50" href="#">
        Logo
      </a>
      <nav>
        <ul className="flex gap-10">
          {NAVIGATION_DATA.map((data, index) => {
            const IconComponent = data.icon

            return (
              <li key={index} className="group">
                <a
                  href={data.url}
                  className="flex gap-2 items-center text-gray-800 transition-colors group-hover:text-cyan-500 dark:text-stone-50"
                >
                  <IconComponent />
                  {data.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  )
}

export default Header
