import React, { useState } from 'react'
import { imagesBlack, imagesWhite } from '../img/IMG_IMPORT_Module'
import Nav from '../navbar/Nav'
import { useSelector } from 'react-redux'
import './home.scss'

export default function Home (): JSX.Element {
  const theme = useSelector((state: { theme: { theme: string } }) => state.theme.theme)

  const imagesLight = imagesWhite as string[]
  const imagesDark = imagesBlack as string[]

  const [i] = useState(0)

  console.log(imagesLight)

  return (
    <>
      <Nav />
      <div className={'home-content'}>
        <div className="img-carussel">
          {theme === 'light'
            ? (
            <img src={imagesLight[i]} alt="Vape White" />
              )
            : (
            <img src={imagesDark[i]} alt="Vape Black" />
              )}
          <button></button>
          <button></button>
        </div>
      </div>
    </>
  )
}
