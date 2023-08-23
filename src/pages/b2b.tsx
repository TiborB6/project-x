import SalesContact from '@/components/contact/SalesContact'
import Footer from '@/components/footer/Footer'
import Nav from '@/components/navbar/Nav'
import Image from 'next/image'
import React from 'react'
import SmallVapeBlack from '../img/SmallVapeBlack.png'

export default function B2B (): JSX.Element {
  return (
    <>
      <Nav />
        <div className="b2b">
          <h1>Talk to our sales team</h1>

          <div className="b2b-wrapper">
              <div className="product-image">
                <Image src={SmallVapeBlack} alt="Vape Box Display"/>
              </div>
              <div className='product-description'>
                <h2>Our newest products shipped to you</h2>
                <SalesContact />
              </div>
            </div>
          </div>
      <Footer />
    </>
  )
}
