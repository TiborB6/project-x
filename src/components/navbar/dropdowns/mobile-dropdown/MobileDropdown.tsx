import React, { useState } from 'react'
import Link from 'next/link'
// import LanguageSwitchButton from '../../switch-buttons/language/LanguageSwitchButton'
// import ThemeSwitchButton from '../../switch-buttons/theme/ThemeSwitchButton'

export default function MobileDropdown (): JSX.Element {
  const [open, setOpen] = useState(false)

  const handleClick = (event: React.MouseEvent<SVGElement>): void => {
    event.preventDefault()
    setOpen(true)
  }

  const handleClose = (event: React.MouseEvent<SVGElement>): void => {
    event.preventDefault()
    setOpen(false)
  }

  return (
    open
      ? (
          <div className="dropdown">
            <div className="list">
              <svg onClick={(event) => { handleClose(event) }} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
              <Link href="/home">Home</Link>
              <Link href="/store">Store</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/b2b">B2B</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/profile">Profile</Link>
            </div>

            <div className="switches">
{/*           <LanguageSwitchButton />
          <ThemeSwitchButton /> */}
            </div>
          </div>
        )
      : (
          <svg className="menu-btn" onClick={(event) => { handleClick(event) }} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
            <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
          </svg>
        )
  )
}
