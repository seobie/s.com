import { FollowRecommend, SearchForm, TrendSection } from '..'

export const RightSection = () => {
  return (
    <section className="flex min-w-[350px] flex-col gap-4 overflow-auto">
      <div className="sticky top-0 flex h-[53px] w-full items-center bg-black">
        <SearchForm />
      </div>
      <TrendSection />
      <FollowRecommend />
    </section>
  )
}
