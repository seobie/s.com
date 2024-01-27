import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'
import Image from 'next/image'

import { BottomButton } from './BottomButton'

export const Post = () => {
  const POST = {
    avatar: faker.image.avatar(),
    comments: [],
    commentsCount: 0,
    createdAt: faker.date.past(),
    id: 'MacRumors',
    images: [],
    liked: false,
    likedAt: null,
    likedBy: null,
    likesCount: 0,
    name: 'MacRumors.com',
    reposted: false,
    repostedAt: null,
    repostedBy: null,
    repostsCount: 0,
    text: 'Apple Releases iOS 14.7.1 With Fix for Touch ID Bug on iPhone 12 Models',
    updatedAt: '2021-08-01T00:00:00.000Z',
    url: 'https://twitter.com/MacRumors/status/1421459195736758273',
    userId: 'MacRumors',
  }
  return (
    <article className="flex flex-col px-[16px]">
      <div className="flex w-full items-center">
        <span className="mr-[12px] flex basis-[40px] justify-end">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-[16px] w-[16px] fill-[rgb(113,118,123)]">
            <g>
              <path d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"></path>
            </g>
          </svg>
        </span>
        <span className="text-[rgb(113,118,123)]">{`${POST.name} reposted`}</span>
      </div>
      <div className="flex">
        <span className="mr-[12px] basis-[40px]">
          <Image
            src={POST.avatar}
            alt="avatar"
            width={40}
            height={40}
            objectFit="contain"
            objectPosition="center"
            className="rounded-full"
          />
        </span>
        <div className="flex w-full flex-col">
          <div className="mb-[2px]">
            <span className="text-[15px] font-bold text-[rgb(231,233,234)]">
              {POST.name}
            </span>
            <span>badge</span>
            <span className="ml-[4px] border-solid border-red-400 text-[15px] text-[rgb(113,118,123)] [&>:not(:first-child)]:before:px-[4px] [&>:not(:first-child)]:before:content-['·']">
              <span>{POST.userId}</span>
              <span>{dayjs(POST.createdAt).format('MMM D, YYYY')}</span>
            </span>
          </div>
          <div>{POST.text}</div>
          <div className="my-[12px] flex items-center justify-between">
            <BottomButton iconName="comment" count={20} />
            <BottomButton iconName="repost" count={174} />
            <BottomButton iconName="like" count={101} />
            <BottomButton iconName="view" count={3300000} />
            <span className="flex gap-[12px]">
              <BottomButton iconName="bookmark" />
              <BottomButton iconName="share" />
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}
