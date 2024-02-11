import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import Image from 'next/image'

import { DynamicIcon } from '@/components'

import { BottomButton } from './BottomButton'

dayjs.extend(relativeTime)
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  relativeTime: {
    M: 'a month',
    MM: '%d months',
    d: 'a day',
    dd: '%dd',
    future: 'in %s',
    h: 'an hour',
    hh: '%dh',
    m: 'a minute',
    mm: '%dm',
    past: '%s ago',
    s: 'a few seconds',
    y: 'a year',
    yy: '%dy',
  },
})

type POST = {
  postId: number
  content: string
  userId: string
  createdAt: Date
  deletedAt?: Date
  User: {
    id: string
    nickname: string
    password: string
    image: string
    Posts?: string[]
    Followers?: Array<{
      id: string
    }>

    _count: {
      Followers: number
      Followings: number
    }
  }
  Images?: string[]
  Hearts?: Array<{
    userId: string
  }>
  Reposts?: Array<{
    userId: string
  }>
  Comments?: Array<{
    userId: string
  }>
  _count: {
    like: number
    comment: number
    repost: number
    view: number
  }
  Parent?: string
  Original?: string
}

export const Post = () => {
  const POST_SAMPLE: POST = {
    _count: {
      comment: faker.number.int({ max: 10000, min: 0 }),
      like: faker.number.int({ max: 10000, min: 0 }),
      repost: faker.number.int({ max: 10000, min: 0 }),
      view: faker.number.int({ max: 1000000, min: 0 }),
    },
    Comments: [{ userId: faker.internet.userName() }],
    Hearts: [
      {
        userId: faker.internet.userName(),
      },
    ],
    Images: [faker.image.url()],
    Original: faker.lorem.paragraph(),
    Parent: undefined,
    Reposts: undefined,
    User: {
      _count: {
        Followers: faker.number.int({ max: 1000, min: 0 }),
        Followings: faker.number.int({ max: 1000, min: 0 }),
      },
      Followers: undefined,
      Posts: [],
      id: faker.internet.userName(),
      image: faker.image.avatar(),
      nickname: faker.person.fullName(),
      password: '',
    },
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    deletedAt: undefined, // POST 객체에 해당하는 필드가 없으므로 null로 설정
    postId: faker.number.int({ max: 1000000, min: 0 }),
    userId: faker.internet.userName(),
  }
  return (
    <article className="flex flex-col px-[16px]">
      {POST_SAMPLE.Original && (
        <div className="flex w-full items-center">
          <span className="mr-[12px] flex basis-[40px] justify-end">
            <DynamicIcon name="repost" size="16px" color="rgb(113,118,123)" />
          </span>
          <span className="text-[rgb(113,118,123)]">{`${POST_SAMPLE.User.nickname} reposted`}</span>
        </div>
      )}
      <div className="flex">
        <span className="mr-[12px] basis-[40px]">
          <Image
            src={POST_SAMPLE.User.image}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full object-contain object-center"
          />
        </span>
        <div className="flex w-full flex-col">
          <div className="mb-[2px] flex items-center">
            <span className="text-[15px] font-bold text-[rgb(231,233,234)]">
              {POST_SAMPLE.User.nickname}
            </span>
            <DynamicIcon
              name="verified-icon"
              color="rgb(29,155,240)"
              size="18.75px"
              className="ml-[2px]"
            />
            <span className="ml-[4px] border-solid border-red-400 text-[15px] text-[rgb(113,118,123)] [&>:not(:first-child)]:before:px-[4px] [&>:not(:first-child)]:before:content-['·']">
              <span>@{POST_SAMPLE.User.id}</span>
              <span>{dayjs(POST_SAMPLE.createdAt).fromNow(true)}</span>
            </span>
          </div>
          <div>{POST_SAMPLE.content}</div>
          <div className="my-[12px] flex items-center justify-between">
            <BottomButton
              iconName="comment"
              count={POST_SAMPLE._count.comment}
            />
            <BottomButton iconName="repost" count={POST_SAMPLE._count.repost} />
            <BottomButton iconName="like" count={POST_SAMPLE._count.like} />
            <BottomButton iconName="view" count={POST_SAMPLE._count.view} />
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
