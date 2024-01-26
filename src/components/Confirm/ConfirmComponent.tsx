import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ConfirmProps {
  content: ReactNode
  onConfirm: () => void
  onCancel: () => void
}

export const ConfirmComponent = ({
  content,
  onCancel,
  onConfirm,
}: ConfirmProps) => {
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex h-[200px] w-[300px] flex-col items-center justify-center rounded-lg border-[1px] border-solid border-gray-600 bg-gray-800 p-4 shadow-lg">
        <div>{content}</div>
        <div className="mt-auto flex w-full justify-around">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>,
    document.body
  )
}
