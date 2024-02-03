'use client'

import { useFormState, useFormStatus } from 'react-dom'

import onSubmit from './signup'
import { Input } from '..'
import { Modal } from '../Modal'
import { CloseButton } from '../Modal/components'

function showMessage(message?: string) {
  if (message === 'no_id') {
    return '아이디를 입력하세요.'
  }
  if (message === 'no_name') {
    return '닉네임을 입력하세요.'
  }
  if (message === 'no_password') {
    return '비밀번호를 입력하세요.'
  }
  if (message === 'no_image') {
    return '이미지를 업로드하세요.'
  }
  if (message === 'user_exists') {
    return '이미 사용 중인 아이디입니다.'
  }
  return ''
}

export default function SignupModal() {
  const [state, formAction] = useFormState(onSubmit, { message: '' })
  const { pending } = useFormStatus()

  return (
    <Modal header={<CloseButton className="-translate-x-2" />}>
      <div className="flex h-full flex-col px-20">
        <h2 className="py-5 text-3xl font-bold">Create your account</h2>
        <form
          className="flex h-full flex-col justify-between"
          action={formAction}>
          <div className="flex flex-col">
            <Input
              label="Id"
              attributes={{ id: 'id', name: 'id', required: true }}
            />
            <Input label="Name" attributes={{ id: 'name', name: 'name' }} />

            <Input
              label="Password"
              attributes={{
                id: 'password',
                name: 'password',
                required: true,
                type: 'password',
              }}
            />
            <Input
              label="Profile"
              attributes={{
                accept: 'image/*',
                id: 'image',
                name: 'image',
                required: true,
                type: 'file',
              }}
            />
          </div>
          <div className="px-20 py-6">
            <button
              type="submit"
              disabled={pending}
              className="h-[50px] w-full rounded-3xl border-none bg-[rgb(15,20,25)] text-base font-bold text-white disabled:opacity-50 dark:bg-white dark:text-black">
              Create
            </button>
            <div className="font-bold text-red-500">
              {showMessage(state?.message)}
            </div>
          </div>
        </form>
      </div>
    </Modal>
  )
}
