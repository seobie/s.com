'use client'

import type { ButtonHTMLAttributes } from 'react'

import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export const CloseButton = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const router = useRouter()

  return (
    <button
      type="button"
      className={twMerge('group', className)}
      onClick={router.back}
      {...props}>
      <div className="transition=[background] flex h-[34px] w-[34px] items-center justify-center rounded-full duration-200 group-hover:bg-[rgba(239,243,244,0.1)]">
        <svg
          width={20}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="fill-black dark:fill-white">
          <g>
            <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
          </g>
        </svg>
      </div>
    </button>
  )
}
