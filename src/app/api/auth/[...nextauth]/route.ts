// [...nextauth] 는 catch-all route로서, next-auth에서 제공하는 기능을 사용하기 위한 route이다.
// http://localhost:3000/api/auth/signin 이런식으로 사용할 수 있다.
// http://localhost:3000/api/auth/아/무/거/나 이런식으로 사용할 수 있다.

import NextAuth from 'next-auth/next'

import { authOptions } from '@/auth'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
