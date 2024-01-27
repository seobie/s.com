import type { IconName } from '@/types'

export type BaseIconProps = {
  className?: string
  color?: string
  name: IconName
}

export type SizedIconProps = BaseIconProps & {
  size: string | number
  width?: never
  height?: never
}

export type WidthHeightIconProps = BaseIconProps & {
  width: string | number
  height: string | number
  size?: never
}

export type DynamicIconProps = SizedIconProps | WidthHeightIconProps
