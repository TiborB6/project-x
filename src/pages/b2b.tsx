import SalesContact from '@/components/contact/SalesContact'
import Footer from '@/components/footer/Footer'
import Nav from '@/components/navbar/Nav'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import SmallVapeWhite from '../img/SmallVapeWhite.png'
import SmallVapeBlack from '../img/SmallVapeBlack.png'

export default function B2B (): JSX.Element {
  const theme = useSelector((state: { theme: string }) => state.theme)

  return (
    <>
      <Nav />
        <div className="b2b">
          <h1>Talk to our Sales team</h1>

          <div className="product-display">
            <div className="product-image">
              {theme === 'light'
                ? (
                    <Image src={SmallVapeWhite} alt="Vape Box Display"/>
                  )
                : (
                    <Image src={SmallVapeBlack} alt="Vape Box Display"/>
                  )}
            </div>
          </div>

          <SalesContact />
        </div>
      <Footer />
    </>
  )
}
