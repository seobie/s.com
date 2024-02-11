import dynamic from 'next/dynamic'

import type { DynamicIconProps } from './types'

export const DynamicIcon = (props: DynamicIconProps) => {
  const { className, color, name } = props
  const size = 'size' in props ? props.size : undefined
  const width = size || ('width' in props ? props.width : 24)
  const height = size || ('height' in props ? props.height : 24)

  const Icon = dynamic(() => import(`../../../public/icons/${name}.svg`))

  return (
    <div style={{ fill: color, height, width }} className={className}>
      <Icon />
    </div>
  )
}
