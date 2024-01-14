import type { ReactNode } from 'react'

interface RightCardProps {
  title: string
  children: ReactNode
}

export const RightCard = ({ children, title }: RightCardProps) => {
  return (
    <aside className="border-1 flex flex-col rounded-2xl border-solid border-[rgb(22,24,28)] bg-[rgb(22,24,28)]">
      <h2 className="break-words px-4 py-3 text-[20px] font-[800] text-[rgb(231,233,234)]">
        {title}
      </h2>
      {children}
    </aside>
  )
}
