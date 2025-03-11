import { NAVIGATION_DATA } from '../navigation.const'

function MobileNav({ closeNav }: { closeNav: () => void }) {
  return (
    <ul className="flex flex-col gap-6">
      {NAVIGATION_DATA.map((data, index) => {
        const IconComponent = data.icon

        return (
          <li key={index} className="group">
            <a
              onClick={closeNav}
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
  )
}

export default MobileNav
