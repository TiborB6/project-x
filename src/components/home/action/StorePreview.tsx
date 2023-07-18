import React from 'react'
import PreviewDisplay from './preview-display/PreviewDisplay'
import { useNavigate } from 'react-router-dom'

export default function StorePreview (): JSX.Element {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const currentDisplayed = document.querySelector('.displayed')
    currentDisplayed?.classList.remove('displayed')

    const newDisplayed = document.querySelector(`#${event.currentTarget.id}`)
    newDisplayed?.classList.add('displayed')
  }

  const navigate = useNavigate()

  return (
    <div className="preview">
      <div className="header">
        <h1>Bestseller</h1>
        <button onClick={() => { navigate('/store') }}>{'More Products >>>'}</button>
      </div>
      <div className="preview-selection">
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
        {[...Array(4)].map((_, index) => (
          <PreviewDisplay key={index} id={`preview-${index}`} />
        ))}
      </div>
    </div>
  )
}
