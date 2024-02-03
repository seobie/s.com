'use client'

import type { ButtonHTMLAttributes } from 'react'

import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

import { DynamicIcon } from '@/components'

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
        <DynamicIcon
          name="close"
          size={20}
          className="fill-black dark:fill-white"
        />
      </div>
    </button>
  )
}
