import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Profile (): JSX.Element {
  const [auth] = useState(false)
  const router = useRouter()

  return (
    <div className='profile'>
      Successfull Auth
    </div>
  )
}
