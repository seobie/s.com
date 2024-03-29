import { Inter } from 'next/font/google'

import { AlertProvider, ConfirmProvider, MSWComponent } from '@/components'

import type { Metadata } from 'next'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWComponent />
        <ConfirmProvider>
          <AlertProvider>{children}</AlertProvider>
        </ConfirmProvider>
      </body>
    </html>
  )
}
