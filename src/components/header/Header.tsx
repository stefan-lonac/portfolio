import { useEffect, useRef, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import ThemeToggle from '../themeToggle/ThemeToggle'
import './Header.css'
import MobileNav from './mobile-navigation/MobileNav'
import { NAVIGATION_DATA } from './navigation.const'
import Logo from '../../assets/img/logo.png'

function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [mobileNav, setMobileNav] = useState<boolean>(false)

  const showHideNav = () => {
    setMobileNav((prev) => {
      console.log(prev)
      return !prev
    })
  }

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight)
    }

    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.clientHeight)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      ref={headerRef}
      className="header-container z-50 w-full fixed transition-all bg-stone-50 dark:bg-gray-800 shadow-lg flex items-center justify-between flex-row"
    >
      <a className="text-gray-800 dark:text-stone-50" href="#">
        <img className="logo" src={Logo} alt="Logo" />
      </a>
      <nav className="hidden md:block">
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
      <button onClick={showHideNav} className="md:hidden z-20">
        {!mobileNav ? (
          <RxHamburgerMenu
            className="text-gray-800 dark:text-stone-50"
            size={28}
          />
        ) : (
          <IoCloseOutline
            className="text-gray-800 dark:text-stone-50"
            size={28}
          />
        )}
      </button>
      <div className="hidden md:block">
        <ThemeToggle classNames={'rounded'} />
      </div>
      <div
        className={`absolute left-0 shadow-lg transition-all p-5 bg-stone-50 w-full dark:bg-gray-800 ${
          mobileNav
            ? 'opacity-1 h-auto pointer-events-auto'
            : 'opacity-0 h-0 pointer-events-none	'
        }`}
        style={{ top: `${headerHeight}px` }}
      >
        <MobileNav closeNav={() => showHideNav()} />
      </div>
    </header>
  )
}

export default Header
