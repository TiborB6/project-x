import React from 'react'
import { Link } from 'react-router-dom'
import LogoWhite from '../img/Logo-White.png'
import LogoBlack from '../img/Logo-Black.png'
import { useSelector } from 'react-redux'

export default function Footer (): JSX.Element {
  const theme = useSelector((state: { theme: { theme: string } }) => state.theme.theme)

  return (
    <div className="footer">
      <div className="left">
        {theme === 'light'
          ? (
          <img src={LogoWhite} alt="Logo White" />
            )
          : (
          <img src={LogoBlack} alt="Logo Black" />
            )}
      </div>

      <div className="mid">
        <Link to="/impressum">Impressum</Link>
        <Link to="/agb">AGB</Link>
      </div>

      <div className="right">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/b2b">B2B</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    </div>
  )
}
