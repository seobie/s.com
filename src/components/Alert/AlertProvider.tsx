'use client'

import type { ReactNode } from 'react'
import React, { useState } from 'react'

import { AlertComponent } from './AlertComponent'
import { AlertContext } from './AlertContext'

import type { Alert } from './types'

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alerts, setAlerts] = useState<Alert[]>([])

  const addAlert = (content: ReactNode) => {
    setAlerts((alerts) => [...alerts, { content, id: Date.now() }])
  }

  const removeAlert = (id: number) => {
    setAlerts((alerts) => alerts.filter((alert) => alert.id !== id))
  }

  return (
    <AlertContext.Provider value={{ addAlert }}>
      {children}
      {alerts.map((alert) => (
        <AlertComponent
          key={alert.id}
          content={alert.content}
          onClose={() => removeAlert(alert.id)}
        />
      ))}
    </AlertContext.Provider>
  )
}
