import React from 'react'
import VapeWhite from '../../../img/SmallVapeWhite.png'
import VapeBlack from '../../../img/SmallVapeBlack.png'
import { useSelector } from 'react-redux'

interface PreviewDisplayProps {
  id: string
}

export default function PreviewDisplay ({ id }: PreviewDisplayProps): JSX.Element {
  const theme = useSelector((state: { theme: { theme: string } }) => state.theme.theme)

  return (
    <div className="product" id={id}>
      {theme === 'light'
        ? (
        <img src={VapeWhite} alt="Logo White" />
          )
        : (
        <img src={VapeBlack} alt="Logo Black" />
          )}
      <p>XXX die coole Vape</p>
      <p>Hier könnte ihre supermegageile richtig lange Werbung stehn</p>
    </div>
  )
}
