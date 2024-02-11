'use client'
import type { ReactNode } from 'react'
import React, { useState } from 'react'

import { ConfirmComponent } from './ConfirmComponent'
import { ConfirmContext } from './ConfirmContext'

interface Confirm {
  content: ReactNode
  onConfirm: () => void
  onCancel: () => void
  id: number
}

export const ConfirmProvider = ({ children }: { children: ReactNode }) => {
  const [confirms, setConfirms] = useState<Confirm[]>([])

  const addConfirm = (
    content: ReactNode,
    onConfirm: () => void,
    onCancel: () => void
  ) => {
    setConfirms((confirms) => [
      ...confirms,
      { content, id: Date.now(), onCancel, onConfirm },
    ])
  }

  const removeConfirm = (id: number) => {
    setConfirms((confirms) => confirms.filter((confirm) => confirm.id !== id))
  }

  return (
    <ConfirmContext.Provider value={{ addConfirm }}>
      {children}
      {confirms.map((confirm) => (
        <ConfirmComponent
          key={confirm.id}
          content={confirm.content}
          onConfirm={() => {
            confirm.onConfirm()
            removeConfirm(confirm.id)
          }}
          onCancel={() => {
            confirm.onCancel()
            removeConfirm(confirm.id)
          }}
        />
      ))}
    </ConfirmContext.Provider>
  )
}
