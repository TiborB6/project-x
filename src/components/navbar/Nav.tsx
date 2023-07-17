import React, { useEffect } from 'react'
import LogoWhite from '../img/Logo-White.png'
import LogoBlack from '../img/Logo-Black.png'
import { NavLink } from 'react-router-dom'
import './nav.scss'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../store'

export default function Nav (): any {
  const dispatch = useDispatch()

  const handleToggleTheme = (): void => {
    dispatch(toggleTheme())
  }

  const theme = useSelector((state: { theme: { theme: string } }) => state.theme.theme)

  useEffect(() => {
    const rootElement = document.querySelector('#root')
    rootElement?.classList.remove('light', 'dark')
    rootElement?.classList.add(theme)
  }, [theme])

  return (
    <div className={'navbar'} >
      <div className="left">
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
          <div className="nav-wrapper">
            <NavLink to="/home" >Home</NavLink>
            <div className="underline-nav"></div>
          </div>
          <div className="nav-wrapper">
            <NavLink to="/store" >Store</NavLink>
            <div className="underline-nav"></div>
          </div>
          <div className="nav-wrapper">
            <NavLink to="/kontakt" >Kontakt</NavLink>
            <div className="underline-nav"></div>
          </div>
          <div className="nav-wrapper">
            <NavLink to="/b2b" >B2B</NavLink>
            <div className="underline-nav"></div>
          </div>
        </div>
        <div className="account">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 -960 960 960">
            <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
