'use server'

import { redirect } from 'next/navigation'

import { signIn } from '@/auth'

export default async (
  prevState: { message: string } | undefined,
  formData: FormData
) => {
  if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
    return { message: 'no_id' }
  }
  if (!formData.get('name') || !(formData.get('name') as string)?.trim()) {
    return { message: 'no_name' }
  }
  if (
    !formData.get('password') ||
    !(formData.get('password') as string)?.trim()
  ) {
    return { message: 'no_password' }
  }
  if (!formData.get('image')) {
    return { message: 'no_image' }
  }
  let shouldRedirect = false
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        body: formData,
        credentials: 'include',
        method: 'post',
      }
    )
    console.log(response.status)
    if (response.status === 403) {
      return { message: 'user_exists' }
    }
    console.log(await response.json())
    shouldRedirect = true
    await signIn('credentials', {
      password: formData.get('password'),
      redirect: false,
      username: formData.get('id'),
    })
  } catch (err) {
    console.error(err)
    throw new Error('회원가입에 실패했습니다.')
  }

  if (shouldRedirect) {
    redirect('/home') // try/catch문 안에서 X
  }
}
