import React, { useState } from 'react'
import './profile.scss'
import SignIn from '../auth/forms/sign-in/SignIn'

export default function Profile (): JSX.Element {
  const [auth] = useState(false)

  return (
    <div className='profile'>
      {!auth
        ? (
            <div className='profile-sign-in'>
              <SignIn />
            </div>
          )
        : (
            <>
            </>
          )}
    </div>
  )
}
