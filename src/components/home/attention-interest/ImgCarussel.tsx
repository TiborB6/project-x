import React, { useEffect, useState } from 'react'
import { imagesBlack, imagesWhite } from '../../img/IMG_IMPORT_Module'
import { useSelector } from 'react-redux'
import TransitionImage from './img-transition/TransitionImage'

export default function ImgCarussel (): JSX.Element {
  const theme = useSelector((state: { theme: { theme: string } }) => state.theme.theme)

  const [i, setI] = useState(0)

  if (imagesBlack.length !== imagesWhite.length) {
    console.error('images Black not maching images white in home')
  }
  const length = imagesBlack.length

  const handleRightClick = (): void => {
    if (i > length - 2) {
      setI(0)
    } else {
      setI(i + 1)
    }
  }

  const handleLeftClick = (): void => {
    if (i < 1) {
      setI(length - 1)
    } else {
      setI(i - 1)
    }
  }

  useEffect(() => {
    const prevActive = document.querySelector('.activePic')
    prevActive?.classList.remove('activePic')
    const newActive = document.querySelector(`#_${i}`)
    newActive?.classList.add('activePic')

    setTimeout(() => {
      handleRightClick()
    }, 5000)
  }, [i])

  return (
    <div className={'home-content'}>
      <div className="img-carussel">
        {theme === 'light'
          ? (
            <TransitionImage key={imagesWhite[i]} src={imagesWhite[i]} alt="Vape White" />)
          : (
            <TransitionImage key={imagesBlack[i]} src={imagesBlack[i]} alt="Vape Black" />)}
        <button className="left" onClick={handleLeftClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z" strokeWidth="5"/>
          </svg>

        </button>
        <button className="right" onClick={handleRightClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z"/></svg>
        </button>
        <div className="carussel-display">
          {imagesBlack.map((item, index) => (
            <div key={index} id={'_' + index.toString()}></div>
          ))}
        </div>
      </div>
    </div>
  )
}
