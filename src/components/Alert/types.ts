import type { ReactNode } from 'react'

export interface Alert {
  content: ReactNode
  id: number
}

export interface AlertProps {
  content: ReactNode
  onClose: () => void
}
