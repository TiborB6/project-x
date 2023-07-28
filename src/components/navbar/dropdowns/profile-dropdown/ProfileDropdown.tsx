import React from 'react'
import ThemeSwitchButton from '../../switch-buttons/theme/ThemeSwitchButton'
import LanguageSwitchButton from '../../switch-buttons/language/LanguageSwitchButton'
import SmallNavLogin from '../../../auth/forms/small-nav-login/SmallNavLogin'
import './profile-dropdown.scss'

export default function ProfileDropdown (): JSX.Element {
  return (
    <div className="profile-dropdown">
      <SmallNavLogin />
      <div className="switches">
        <ThemeSwitchButton />
        <LanguageSwitchButton />
      </div>
    </div>
  )
}
