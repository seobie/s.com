'use client'

import type { ChangeEvent, FormEventHandler } from 'react'
import { useState } from 'react'

import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

import { DynamicIcon } from '@/components'

import { Input } from '.'
import { Modal } from './Modal'
import { CloseButton } from './Modal/components'

export default function LoginModal() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setMessage('')
    try {
      const response = await signIn('credentials', {
        password,
        redirect: false,
        username: id,
      })
      if (!response?.ok) {
        setMessage('아이디와 비밀번호가 일치하지 않습니다.')
      } else {
        router.replace('/home')
      }
    } catch (err) {
      console.error(err)
      setMessage('아이디와 비밀번호가 일치하지 않습니다.')
    }
  }

  const onClickClose = () => {
    router.back()
  }

  const onChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <Modal
      header={
        <div className="relative flex w-full">
          <CloseButton className="-translate-x-2" onClick={onClickClose} />
          <div className="absolute left-2/4 flex h-full -translate-x-2/4 items-center justify-center">
            <DynamicIcon
              name="logo"
              size={30}
              className="fill-black dark:fill-white"
            />
          </div>
        </div>
      }>
      <div className="flex h-full flex-col items-center">
        <div className="flex min-w-[364px] max-w-[364px] flex-1 flex-col px-8 pb-12">
          <h1 className="my-5 text-3xl font-bold">Sign in to S</h1>
          <form onSubmit={onSubmit}>
            <div>
              <Input
                label="id"
                attributes={{ id: 'id', onChange: onChangeId, value: id }}
              />
              <Input
                label="password"
                attributes={{
                  id: 'password',
                  onChange: onChangePassword,
                  type: 'password',
                  value: password,
                }}
              />
            </div>
            <div>{message}</div>
            <div className="px-20 py-6">
              <button
                type="submit"
                className="h-[50px] w-full rounded-3xl border-none bg-[rgb(15,20,25)] text-base font-bold text-white disabled:opacity-50 dark:bg-white dark:text-black">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}
