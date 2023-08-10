import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

export default function Profile (): JSX.Element {
  const router = useRouter()
  const { auth } = useSelector((state) => state.auth)

  useEffect(() => {
    console.log(auth)
    if (!auth) {
      void router.push('/auth/sign-in')
    }
  }, [auth, router])

  return (
      <div className='profile'>
        Successfull Auth
      </div>
  )
}
