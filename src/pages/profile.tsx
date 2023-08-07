import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Profile (): JSX.Element {
  const [auth] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!auth) {
      void router.push('/auth/sign-in')
    }
  }, [])

  return (
    <div className='profile'>
      Successfull Auth
    </div>
  )
}
