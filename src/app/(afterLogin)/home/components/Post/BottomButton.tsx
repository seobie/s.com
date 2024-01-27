import { twMerge } from 'tailwind-merge'

import { DynamicIcon } from '@/components'

import { COLOR_MAP } from './constants'

import type { IconName } from '@/types'

type BottomButtonProps = {
  iconName: IconName
  count?: number
  onClick?: () => void
}

export const BottomButton = ({
  count,
  iconName,
  onClick,
}: BottomButtonProps) => {
  const color = COLOR_MAP[iconName]
  const countFormatter = Intl.NumberFormat('en', { notation: 'compact' })
  return (
    <button
      onClick={onClick}
      type="button"
      className="group flex cursor-pointer items-center gap-[4px] [&>*]:transition-all [&>*]:duration-200">
      <span className="relative [&>*]:transition-all [&>*]:duration-200">
        <div
          className={twMerge(
            'absolute inset-0 -m-[8px] rounded-full',
            color.bg
          )}
        />
        <DynamicIcon
          name={iconName}
          size="18.75px"
          className={twMerge('fill-[rgb(113,118,123)]', color.hoverFill)}
        />
      </span>
      {count !== undefined && (
        <span className={twMerge('text-[rgb(113,118,123)]', color.hoverText)}>
          {countFormatter.format(count)}
        </span>
      )}
    </button>
  )
}
