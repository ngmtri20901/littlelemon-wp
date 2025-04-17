'use client'

import { useRouter } from 'next/navigation'
import { FaustProvider } from '@faustjs/next'
import { client } from '@/lib/faustClient'

export default function FaustWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <FaustProvider 
      client={client}
      pageProps={{}}
      useRouter={() => router}
    >
      {children}
    </FaustProvider>
  )
}
