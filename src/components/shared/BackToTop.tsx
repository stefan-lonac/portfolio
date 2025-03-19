import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleVisible = () => {
      setVisible(document.documentElement.scrollTop > 300)
    }

    window.addEventListener('scroll', handleVisible)
    return () => window.removeEventListener('scroll', handleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className={`${
        visible ? 'opacity-100 ' : 'opacity-0 translate-y-4 pointer-events-none'
      } fixed bottom-10 left-10 dark:border border-stone-500 dark:bg-slate-700 dark:hover:bg-cyan-800 w-15 h-15 rounded-md transition-all`}
    >
      <button
        onClick={scrollToTop}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-300 text-black dark:text-white"
      >
        <FaArrowUp />
      </button>
    </div>
  )
}

export default BackToTop
