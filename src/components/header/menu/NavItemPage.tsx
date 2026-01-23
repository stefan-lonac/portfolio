import { NavigationItem } from '../navigation.const'

function NavItemPage({
  data,
  closeNav,
  index,
}: {
  data: NavigationItem
  closeNav?: () => void
  index: number
}) {
  const IconComponent = data.icon
  return (
    <>
      <li key={index} className="group">
        <a
          onClick={closeNav}
          href={data.url}
          className="relative flex gap-2 items-center w-max text-gray-800 transition-colors group-hover:text-cyan-500 dark:text-stone-50 "
        >
          <IconComponent />
          {data.title}
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-cyan-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
        </a>
      </li>
    </>
  )
}

export default NavItemPage
