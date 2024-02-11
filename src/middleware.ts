import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token)
    if (!req.nextauth.token?.name) {
      return NextResponse.redirect('http://localhost:3000/i/flow/login')
    }
  }
)

// nextjs middleware example 참고
export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
}
