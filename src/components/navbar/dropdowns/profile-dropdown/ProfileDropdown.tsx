import React from 'react'
import ThemeSwitchButton from '../../switch-buttons/theme/ThemeSwitchButton'
import LanguageSwitchButton from '../../switch-buttons/language/LanguageSwitchButton'
import SmallNavLogin from '../../../auth/forms/small-nav-login/SmallNavLogin'
import './profile-dropdown.scss'
import { Link } from 'react-router-dom'

export default function ProfileDropdown (): JSX.Element {
  return (
    <div className="profile-dropdown">
      <h1>Sign-In</h1>
      <SmallNavLogin />
      <p>
        Dont have an account:
        <Link to='/sign-up'> Sign-Up</Link>
      </p>
      <div className="switches">
        <ThemeSwitchButton />
        <LanguageSwitchButton />
      </div>
    </div>
  )
}
