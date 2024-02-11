'use client'

import type { ReactNode } from 'react'
import { createContext } from 'react'

interface ConfirmContextValue {
  addConfirm: (
    content: ReactNode,
    onConfirm: () => void,
    onCancel: () => void
  ) => void
}

export const ConfirmContext = createContext<ConfirmContextValue | undefined>(
  undefined
)
