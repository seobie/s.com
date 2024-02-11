import type { ReactNode } from 'react'

import { LeftSection, RightSection } from './components'

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="flex min-h-[100dvh] w-full items-stretch justify-center">
      <LeftSection />
      <main className="flex-grow items-start">
        <div className="flex h-full min-h-full w-[1050px] flex-shrink flex-grow items-stretch justify-between">
          {children}
          <RightSection />
        </div>
      </main>
    </div>
  )
}
