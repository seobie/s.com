import Link from 'next/link'

import { RightCard } from '..'

export const TrendSection = () => {
  const TREND_LIST = [
    { from: 'Trending in South Korea', id: 1, title: '커버곡 금지' },
    { from: 'Trending in South Korea', id: 2, title: '커버곡 금지' },
    { from: 'Trending in South Korea', id: 3, title: '커버곡 금지' },
    { from: 'Trending in South Korea', id: 4, title: '커버곡 금지' },
    { from: 'Trending in South Korea', id: 5, title: '커버곡 금지' },
    { from: 'Trending in South Korea', id: 6, title: '커버곡 금지' },
    { from: 'Trending in South Korea', id: 7, title: '커버곡 금지' },
    { from: 'Trending in South Korea', id: 8, title: '커버곡 금지' },
    { from: 'Trending in South Korea', id: 9, title: '커버곡 금지' },
  ]
  return (
    <div>
      <RightCard title="Trends for you">
        <ul>
          {TREND_LIST.map(({ from, id, title }) => (
            <li key={id} className="px-4 py-3">
              <Link className="flex flex-col " href={`/search?q=${title}`}>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[rgb(113,118,123)]">
                    {from}
                  </span>
                  <span>...</span>
                </div>
                <span className="text-[15px] font-bold text-[rgb(231,233,234)]">
                  {title}
                </span>
                <span className="text-[13px] text-[rgb(113,118,123)]">
                  1,234 posts
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </RightCard>
    </div>
  )
}
