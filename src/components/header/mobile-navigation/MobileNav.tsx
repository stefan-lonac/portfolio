import NavItemPage from '../menu/NavItemPage'
import { NAVIGATION_DATA } from '../navigation.const'

function MobileNav({ closeNav }: { closeNav: () => void }) {
  return (
    <ul className="flex flex-col gap-6">
      {NAVIGATION_DATA.map((data, index) => {
        return (
          <NavItemPage
            data={data}
            closeNav={closeNav}
            index={index}
            key={index}
          />
        )
      })}
    </ul>
  )
}

export default MobileNav
