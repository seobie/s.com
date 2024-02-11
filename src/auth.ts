import { type NextAuthOptions, getServerSession } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ account, token }) {
      let newToken = { ...token }
      if (account && account.type === 'credentials') {
        newToken = {
          ...token,
          userId: account.providerAccountId,
        } // this is Id that coming from authorize() callback
      }
      return newToken
    },
    async session({ session, token }) {
      const newSession = {
        ...session,
        user: { ...session.user, id: token.userId },
      }
      return newSession
    },
  },
  pages: {
    newUser: '/i/flow/signup',
    signIn: '/i/flow/login',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const authResponse = await fetch(
          `${process.env.NEXTAUTH_URL}/api/login`,
          {
            body: JSON.stringify({
              id: credentials?.username,
              password: credentials?.password,
            }),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
          }
        )
        // Return null if user data could not be retrieved
        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json()
        console.log('user', user)
        // If no error and we have user data, return it
        return {
          email: user.id,
          image: user.image,
          name: user.nickname,
          ...user,
        }
      },

      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        password: {
          label: 'Password',
          placeholder: 'username',
          type: 'password',
        },
        username: { label: 'Username', placeholder: 'username', type: 'text' },
      },
      // The name to display on the sign in form (e.g. 'Sign in with...')
      // name: 'Credentials',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
}

export const getServerAuthSession = () => getServerSession(authOptions)
