'use client'

import { useState } from 'react'

import { TabButton } from './TabButton'

export const Tab = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  return (
    <div className="sticky top-0 z-10 border-[1px] border-l-0 border-r-0 border-solid border-[rgb(47,51,54)] bg-[rgba(0,0,0,0.65)] backdrop-blur-md">
      <div className="flex w-full items-center">
        <TabButton
          label="For you"
          isActive={activeTabIndex === 0}
          onClick={() => setActiveTabIndex(0)}
        />
        <TabButton
          label="Following"
          isActive={activeTabIndex === 1}
          onClick={() => setActiveTabIndex(1)}
        />
      </div>
      <div></div>
    </div>
  )
}
