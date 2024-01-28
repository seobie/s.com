import { FollowRecommend, SearchForm, TrendSection } from '..'

export const RightSection = () => {
  return (
    <section className="mr-[70px] flex w-[350px] flex-col">
      <div className="sticky bottom-0 top-0 min-h-[1200px]">
        <div className="pb-[64px] pt-[12px]">
          <div className="flex flex-col gap-4">
            <div className="fixed top-0 z-10 flex w-[350px] items-center bg-black py-[6px]">
              <SearchForm />
            </div>
            <div className="h-[53px]" />
            <TrendSection />
            <FollowRecommend />
          </div>
        </div>
      </div>
    </section>
  )
}
