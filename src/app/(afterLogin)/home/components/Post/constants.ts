import type { IconName } from '@/types/iconName'

export const COLOR_MAP: {
  [key in IconName]: { hoverFill: string; bg: string; hoverText: string }
} = {
  bookmark: {
    bg: 'group-hover:bg-[rgba(29,155,240,0.1)]',
    hoverFill: 'group-hover:fill-[#1D9BF0]',
    hoverText: 'group-hover:text-[#1D9BF0]',
  },
  comment: {
    bg: 'group-hover:bg-[rgba(29,155,240,0.1)]',
    hoverFill: 'group-hover:fill-[#1D9BF0]',
    hoverText: 'group-hover:text-[#1D9BF0]',
  },
  like: {
    bg: 'group-hover:bg-[rgba(255,0,0,0.1)]',
    hoverFill: 'group-hover:fill-[#F91880]',
    hoverText: 'group-hover:text-[#F91880]',
  },
  repost: {
    bg: 'group-hover:bg-[rgba(0,186,124,0.1)]',
    hoverFill: 'group-hover:fill-[#00BA7C]',
    hoverText: 'group-hover:text-[#00BA7C]',
  },
  share: {
    bg: 'group-hover:bg-[rgba(29,155,240,0.1)]',
    hoverFill: 'group-hover:fill-[#1D9BF0]',
    hoverText: 'group-hover:text-[#1D9BF0]',
  },
  view: {
    bg: 'group-hover:bg-[rgba(29,155,240,0.1)]',
    hoverFill: 'group-hover:fill-[#1D9BF0]',
    hoverText: 'group-hover:text-[#1D9BF0]',
  },
}
