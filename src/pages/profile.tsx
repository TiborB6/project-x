import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { type RootState } from '@/redux/store' // Adjust the import path based on your project structure
import { useRouter } from 'next/router'

export default function Profile (): JSX.Element {
  const router = useRouter()
  const auth = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    console.log(auth)
    if (!auth.auth) {
      void router.push('/auth/sign-in')
    }
  }, [auth, router])

  return (
    <div className='profile'>
      Successfully Authenticated
    </div>
  )
}
