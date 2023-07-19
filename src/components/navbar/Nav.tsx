import React, { useEffect } from 'react'
import LogoWhite from '../img/Logo-White.png'
import LogoBlack from '../img/Logo-Black.png'
import { NavLink } from 'react-router-dom'
import './nav.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../store'

export default function Nav (): JSX.Element {
  const dispatch = useDispatch()

  // Function to toggle the theme when logo is clicked
  const handleToggleTheme = (): void => {
    dispatch(toggleTheme())
  }

  // Get the current theme from the Redux store using useSelector hook
  const theme = useSelector((state: { theme: { theme: string } }) => state.theme.theme)

  // Use useEffect to update the class of root element based on the theme
  useEffect(() => {
    const rootElement = document.querySelector('#root')
    rootElement?.classList.remove('light', 'dark')
    rootElement?.classList.add(theme)
  }, [theme])

  return (
    <div className={'navbar'}>
      <div className="left">
        {/* Conditionally render the logo based on the current theme */}
        {theme === 'light'
          ? (
          <img onClick={handleToggleTheme} src={LogoWhite} alt="Logo White" />
            )
          : (
          <img onClick={handleToggleTheme} src={LogoBlack} alt="Logo Black" />
            )}
      </div>
      <div className="right">
        <div className="links">
          {/* Navigation links */}
          <div className="nav-wrapper">
            <NavLink to="/home">Home</NavLink>
            <div className="underline-nav"></div>
          </div>
          <div className="nav-wrapper">
            <NavLink to="/store">Store</NavLink>
            <div className="underline-nav"></div>
          </div>
          <div className="nav-wrapper">
            <NavLink to="/kontakt">Kontakt</NavLink>
            <div className="underline-nav"></div>
          </div>
          <div className="nav-wrapper">
            <NavLink to="/b2b">B2B</NavLink>
            <div className="underline-nav"></div>
          </div>
        </div>
        <div className="account">
          {/* SVG icons for user account */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            {/* ... */}
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 -960 960 960">
            {/* ... */}
          </svg>
        </div>
      </div>
    </div>
  )
}
