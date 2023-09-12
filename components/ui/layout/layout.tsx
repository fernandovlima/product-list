import { ReactNode } from 'react'
import { LayoutContainer } from '@/components/ui/layout/layout.styled'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return <LayoutContainer>{children}</LayoutContainer>
}
