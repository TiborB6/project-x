import React from 'react'
import PreviewDisplay from './preview-display/PreviewDisplay'
import { useNavigate } from 'react-router-dom'

export default function StorePreview (): JSX.Element {
  // Function to handle the click event on the selection buttons
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    // Remove the 'displayed' class from the currently displayed button
    const currentDisplayed = document.querySelector('.displayed')
    currentDisplayed?.classList.remove('displayed')

    // Add the 'displayed' class to the clicked button
    const newDisplayed = document.querySelector(`#${event.currentTarget.id}`)
    newDisplayed?.classList.add('displayed')
  }

  // Use the useNavigate hook from react-router-dom to get the navigate function
  const navigate = useNavigate()

  return (
    <div className="preview">
      <div className="header">
        {/* Header with the title and a button to navigate to the store page */}
        <h1>Bestseller</h1>
        <button onClick={() => { navigate('/store') }}>{'More Products >>>'}</button>
      </div>
      <div className="preview-selection">
        {/* Selection buttons for different product types */}
        <button onClick={handleClick} className="displayed" id="e-vape">
          E-Zigaretten
        </button>
        <button onClick={handleClick} id="g-vape">
          Vaporizer
        </button>
        <button onClick={handleClick} id="l-vape">
          Liquids
        </button>
      </div>
      <div className="store-preview">
        {/* Use Array.map to render multiple instances of the PreviewDisplay component */}
        {[...Array(4)].map((_, index) => (
          // Pass a unique key and an id prop to each PreviewDisplay component
          <PreviewDisplay key={index} id={`preview-${index}`} />
        ))}
      </div>
    </div>
  )
}
