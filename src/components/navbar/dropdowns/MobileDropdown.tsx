import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

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
            <svg onClick={(event) => { handleClose(event) }} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/store">Store</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/b2b">B2B</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </div>
        )
      : (
          <svg className="menu-btn" onClick={(event) => { handleClick(event) }} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48">
            <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
          </svg>
        )
  )
}
