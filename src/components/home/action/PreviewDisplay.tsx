import React from 'react'
import VapeWhite from '../../../img/SmallVapeWhite.png'
import VapeBlack from '../../../img/SmallVapeBlack.png'
import { useSelector } from 'react-redux'
import Image from 'next/image'

interface PreviewDisplayProps {
  id: string
}

export default function PreviewDisplay ({ id }: PreviewDisplayProps): JSX.Element {
  const theme = useSelector((state: { theme: string }) => state.theme)

  return (
    <div className="product" id={id}>
      {theme === 'light'
        ? (
        <Image src={VapeWhite} alt="Logo White" />
          )
        : (
        <Image src={VapeBlack} alt="Logo Black" />
          )}
      <p>XXX die coole Vape</p>
      <p>Hier könnte ihre supermegageile richtig lange Werbung stehn</p>
    </div>
  )
}
