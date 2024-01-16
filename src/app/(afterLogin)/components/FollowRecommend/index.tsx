import { RecommendList } from './RecommendList'
import { RightCard } from '..'

export const FollowRecommend = () => {
  return (
    <div>
      <RightCard title="Who to follow">
        <RecommendList />
      </RightCard>
    </div>
  )
}
