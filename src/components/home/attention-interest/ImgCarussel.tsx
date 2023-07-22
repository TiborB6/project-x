import React, { useEffect, useState } from 'react'
import { imagesBlack, imagesWhite } from '../../img/IMG_IMPORT_Module'
import { useSelector } from 'react-redux'
import TransitionImage from './img-transition/TransitionImage'

export default function ImgCarussel (): JSX.Element {
  // Get the current theme from the Redux store using useSelector hook
  const theme = useSelector((state: { theme: string }) => state.theme)

  // State to keep track of the index of the current image
  const [i, setI] = useState(0)

  // Ensure that the number of images in imagesBlack matches imagesWhite
  if (imagesBlack.length !== imagesWhite.length) {
    console.error('images Black not matching images white in home')
  }

  // Get the total number of images
  const length = imagesBlack.length

  // Function to handle clicking the right arrow button
  const handleRightClick = (): void => {
    if (i > length - 2) {
      // If at the end, loop back to the first image
      setI(0)
    } else {
      // Go to the next image
      setI(i + 1)
    }
  }

  // Function to handle clicking the left arrow button
  const handleLeftClick = (): void => {
    if (i < 1) {
      // If at the beginning, loop back to the last image
      setI(length - 1)
    } else {
      // Go to the previous image
      setI(i - 1)
    }
  }

  // Use useEffect to update the active picture and trigger the right arrow click automatically every 5 seconds
  useEffect(() => {
    // Remove the activePic class from the previous active picture
    const prevActive = document.querySelector('.activePic')
    prevActive?.classList.remove('activePic')

    // Add the activePic class to the new active picture
    const newActive = document.querySelector(`#_${i}`)
    newActive?.classList.add('activePic')

    // Automatically trigger the right arrow click after 5 seconds
    setTimeout(() => {
      handleRightClick()
    }, 5000)
  }, [i])

  return (
    <div className={'home-content'}>
      <div className="img-carussel">
        {/* Conditionally render the TransitionImage based on the current theme and the index i */}
        {theme === 'light'
          ? (
          <TransitionImage key={imagesWhite[i]} src={imagesWhite[i]} alt="Vape White" />
            )
          : (
          <TransitionImage key={imagesBlack[i]} src={imagesBlack[i]} alt="Vape Black" />
            )}
        {/* Left arrow button */}
        <button className="left" onClick={handleLeftClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z" strokeWidth="5" />
          </svg>
        </button>
        {/* Right arrow button */}
        <button className="right" onClick={handleRightClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z" />
          </svg>
        </button>
        {/* Carussel display to show dots indicating the current image */}
        <div className="carussel-display">
          {imagesBlack.map((item, index) => (
            <div key={index} id={'_' + index.toString()}></div>
          ))}
        </div>
      </div>
    </div>
  )
}
