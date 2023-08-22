import React from 'react'
import LanguageSwitchButton from '../../switch-buttons/LanguageSwitchButton'
import './profile-dropdown.module.scss'
import Link from 'next/link'
import SmallNavLogin from '../../../auth/small-nav-login/SmallNavLogin'

export default function ProfileDropdown (): JSX.Element {
  return (
    <div className="profile-dropdown">
    <h1>Sign-In</h1>
      <SmallNavLogin />
      <p>
        Dont have an account:
        <Link href='/auth/sign-up'> Sign-Up</Link>
      </p>
      <div className="switches">
        <LanguageSwitchButton />
      </div>
    </div>
  )
}
