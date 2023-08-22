import React from 'react'
import VapeBlack from '../../../img/SmallVapeBlack.png'
import Image from 'next/image'

interface PreviewDisplayProps {
  id: string
}

export default function PreviewDisplay ({ id }: PreviewDisplayProps): JSX.Element {
  return (
    <div className="product" id={id}>
        <Image src={VapeBlack} alt="Logo Black" />
      <p className='name'>XXX die coole Vape</p>
      <p>Hier könnte ihre supermegageile richtig lange Werbung stehn</p>
    </div>
  )
}
