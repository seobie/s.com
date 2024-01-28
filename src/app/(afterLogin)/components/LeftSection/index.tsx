import Link from 'next/link'

import { DynamicIcon } from '@/components'

import { Logout, Nav } from '..'

export const LeftSection = () => {
  return (
    <header className="flex flex-grow flex-col items-end">
      <div className="ml-[60px] flex h-full w-[275px] flex-col">
        <div className="fixed top-0 h-full">
          <div className="flex h-full w-[275px] flex-col justify-between overflow-y-auto px-[8px]">
            <div className="flex flex-col">
              <Link href="/home" className="group inline w-fit select-none">
                <div className="transition=[background] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full duration-200 group-hover:bg-[rgba(239,243,244,0.1)]">
                  <div className="flex items-center justify-center">
                    <DynamicIcon
                      name="logo"
                      size="30px"
                      className="cursor-pointer fill-black dark:fill-red-50"
                    />
                  </div>
                </div>
              </Link>
              <div className="flex flex-col">
                <Nav />
                <Link
                  href="/compose/tweet"
                  className="my-4 flex h-[52px] w-full items-center justify-center rounded-full bg-[rgb(29,155,240)] text-[17px] font-bold leading-5">
                  Post
                </Link>
              </div>
            </div>
            <Logout />
          </div>
        </div>
      </div>
    </header>
  )
}
