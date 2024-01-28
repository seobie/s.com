import { DynamicIcon } from '@/components'

export const Logout = () => {
  return (
    <div className="transition=[background] my-3 w-full cursor-pointer rounded-full bg-transparent p-3 duration-200 hover:bg-[rgba(231,233,234,0.1)]">
      <div className="flex">
        <DynamicIcon
          name="logo"
          size="45px"
          className="cursor-pointer fill-black dark:fill-red-50"
        />
        <div className="mx-3 flex flex-col">
          <div className="text-[15px]">Yeongseob Lee</div>
          <div className="text-[15px] text-[rgb(113,118,123)]">@seob_dev</div>
        </div>
      </div>
    </div>
  )
}
