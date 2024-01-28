import { faker } from '@faker-js/faker'
import Image from 'next/image'

export const RecommendList = () => {
  const RECOMMEND_LIST = [
    { id: 'tim_cook', name: 'Tim Cook' },
    { id: 'elonmusk', name: 'Elon Musk' },
    { id: 'BillGates', name: 'Bill Gates' },
  ] as const

  return (
    <ul>
      {RECOMMEND_LIST.map((item) => (
        <li
          key={item.id}
          className="flex flex-grow items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <div className="border-1 mr-3 h-[40px] w-[40px] overflow-hidden rounded-full border-solid border-gray-500">
              <Image
                src={faker.image.avatar()}
                alt={`${item.name}'s avatar`}
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col">
              <span className="whitespace-nowrap text-[15px] font-bold">
                {item.name}
              </span>
              <span className="text-[15px] text-[rgb(113,118,123)]">
                @{item.id}
              </span>
            </div>
          </div>
          <button className="transition=[background] min-h-[32px] min-w-[78px] rounded-full bg-[rgb(239,243,244)] px-4 text-[15px] font-bold text-[rgb(15,20,25)] duration-200 hover:bg-[rgb(215,219,220)]">
            Follow
          </button>
        </li>
      ))}
    </ul>
  )
}
