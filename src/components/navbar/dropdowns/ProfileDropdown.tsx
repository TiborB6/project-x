import React from 'react'
import ThemeSwitchButton from '../switch-buttons/theme/ThemeSwitchButton'
import LanguageSwitchButton from '../switch-buttons/language/LanguageSwitchButton'

export default function ProfileDropdown (): JSX.Element {
  return (
    <div className="profile-dropdown">
      {/* Login */}
      <div className="switches">
        <ThemeSwitchButton />
        <LanguageSwitchButton />
      </div>
    </div>
  )
}
