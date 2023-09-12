import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/styles/GlobalStyles'
import { Header } from '@/components/header/header'
import { Toaster } from '@/providers/toaster'
import { Layout } from '@/components/ui/layout/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Products',
  description: 'A simple product listing'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Layout>
            <Header />
            {children}
          </Layout>
          <Toaster />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
