'use client'

import type { ReactNode } from 'react'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export interface NavLinkProps {
  activeIcon: ReactNode
  defaultIcon: ReactNode
  label: string
  href: string
}

export const NavLink = ({
  activeIcon,
  defaultIcon,
  href,
  label,
}: NavLinkProps) => {
  const segment = useSelectedLayoutSegment()
  const isActive = segment === href.slice(1)

  return (
    <Link href={href} className="group">
      <div className="transition=[background] flex w-fit items-center rounded-full p-3 duration-200 group-hover:bg-[rgba(239,243,244,0.1)]">
        {isActive ? activeIcon : defaultIcon}
        <span className="ml-4 mr-5">{label}</span>
      </div>
    </Link>
  )
}
