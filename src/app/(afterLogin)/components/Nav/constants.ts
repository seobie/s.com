import type { IconName } from '@/types'

export const NAV_LINKS: Array<{
  href: string
  activeIconName: IconName
  defaultIconName: IconName
  label: string
}> = [
  {
    activeIconName: 'home',
    defaultIconName: 'home-stroke',
    href: '/home',
    label: 'Home',
  },
  {
    activeIconName: 'magnifier-stroke-thick',
    defaultIconName: 'magnifier-stroke',
    href: '/explore',
    label: 'explore',
  },
  {
    activeIconName: 'message-fill',
    defaultIconName: 'message-stroke',
    href: '/messages',
    label: 'messages',
  },
  {
    activeIconName: 'profile-fill',
    defaultIconName: 'profile-stroke',
    href: '/ddd',
    label: 'profile',
  },
]
