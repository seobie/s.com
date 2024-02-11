import React from 'react'
import ReactDOM from 'react-dom'

import type { AlertProps } from './types'

export const AlertComponent = ({ content, onClose }: AlertProps) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex h-[200px] w-[300px] flex-col items-center justify-center rounded-lg border-[1px] border-solid border-gray-600 bg-gray-800 p-4 shadow-lg">
        <div>{content}</div>
        <button className="mt-auto" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.body
  )
}
