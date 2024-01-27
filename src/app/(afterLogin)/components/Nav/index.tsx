import { DynamicIcon } from '@/components'

import { NAV_LINKS } from './constants'
import { NavLink } from './NavLink'

export const Nav = () => {
  return (
    <nav className="flex flex-col gap-2">
      {NAV_LINKS.map(({ activeIconName, defaultIconName, href, label }) => {
        return (
          <NavLink
            key={href}
            href={href}
            activeIcon={
              <DynamicIcon
                size={24}
                color="rgb(231,233,234)"
                name={activeIconName}
              />
            }
            defaultIcon={
              <DynamicIcon
                size={24}
                color="rgb(231,233,234)"
                name={defaultIconName}
              />
            }
            label={label}
          />
        )
      })}
    </nav>
  )
}
