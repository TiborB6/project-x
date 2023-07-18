import React, { useState } from 'react'
import PreviewDisplay from './preview-display/PreviewDisplay'

export default function StorePreview (): JSX.Element {
  const [productDisplay, setProductDisplay] = useState('E-Zigaretten')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const currentDispayed = document.querySelector('.displayed')
    currentDispayed?.classList.remove('displayed')

    setProductDisplay(event.currentTarget.id)

    const newDispayed = document.querySelector(`#${event.currentTarget.id}`)
    newDispayed?.classList.add('displayed')
  }

  return (
    <div className="preview">
      <h1>Bestseller</h1>
      <div className="preview-selection">
        <button onClick={(event) => { handleClick(event) }} className="displayed" id="e-vape">E-Zigaretten</button>
        <button onClick={(event) => { handleClick(event) }} id="g-vape">Vaporizer</button>
        <button onClick={(event) => { handleClick(event) }} id="l-vape">Liquids</button>
      </div>
      <div className="store-preview">
        <PreviewDisplay name={productDisplay}/>
      </div>
    </div>
  )
}
