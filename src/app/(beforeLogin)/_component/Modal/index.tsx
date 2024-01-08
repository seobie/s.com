import type { ReactNode } from 'react'

type Props = { children: ReactNode; header?: ReactNode }

export const Modal = ({ children, header }: Props) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-[100vw] items-center justify-center bg-[rgba(0,0,0,0.4)] dark:bg-[rgba(91,112,131,0.4)]">
      <div className="flex h-[650px] w-[600px] flex-col rounded-2xl bg-white dark:bg-black">
        <div className="flex h-[53px] max-w-[600px] items-center px-4">
          {header}
        </div>
        {children}
      </div>
    </div>
  )
}
