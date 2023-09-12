'use client'
import { Toaster as ToasterProvider } from 'react-hot-toast'
import { useEffect, useState } from 'react'

export function Toaster() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return <ToasterProvider />
}
