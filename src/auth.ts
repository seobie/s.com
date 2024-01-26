import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const {
  auth,
  handlers: { GET, POST },
  signIn,
} = NextAuth({
  pages: {
    newUser: '/i/flow/signup',
    signIn: '/i/flow/login',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(`${process.env.AUTH_URL}/api/login`, {
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        })

        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json()
        console.log('user', user)
        return {
          email: user.id,
          image: user.image,
          name: user.nickname,
          ...user,
        }
      },
    }),
  ],
})
