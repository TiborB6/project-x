import React from 'react'
import ThemeSwitchButton from '../../switch-buttons/ThemeSwitchButton'
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
        <Link href='/sign-up'> Sign-Up</Link>
      </p>
      <div className="switches">
        <ThemeSwitchButton />
        <LanguageSwitchButton />
      </div>
    </div>
  )
}
