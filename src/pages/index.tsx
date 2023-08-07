import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function RedirectToAnotherPage (): JSX.Element {
  const router = useRouter()

  // Redirect programmatically on the client side
  useEffect(() => {
    void router.push('/home')
  }, [])

  return (
    <>
    </>
  )
}
