import React from 'react'
import HomeWhite from '../img/Home-White.png'
import HomeBlack from '../img/Home-Black.png'
import Nav from '../navbar/Nav'
import { useSelector } from 'react-redux'
import './home.scss'

export default function Home (): JSX.Element {
  const theme = useSelector((state: { theme: { theme: string } }) => state.theme.theme)

  return (
    <>
      <Nav />
      <div className={'home-content'}>
        <div className="img-carussel">
          {theme === 'light'
            ? (
            <img src={HomeWhite} alt="Vape White" />
              )
            : (
            <img src={HomeBlack} alt="Vape Black" />
              )}

        </div>
      </div>
    </>
  )
}
