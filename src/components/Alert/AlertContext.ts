'use client'

import type { ReactNode } from 'react'
import { createContext } from 'react'

interface AlertContextValue {
  addAlert: (content: ReactNode) => void
}

export const AlertContext = createContext<AlertContextValue | undefined>(
  undefined
)
