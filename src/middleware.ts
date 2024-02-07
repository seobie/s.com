import { NextResponse } from 'next/server'

import { auth } from './auth'

export async function middleware() {
  const session = await auth()
  if (!session) {
    return NextResponse.redirect('http://localhost:3000/i/flow/login')
  }
}

// nextjs middleware example 참고
export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
}
