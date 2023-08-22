import Footer from '@/components/footer/Footer'
import Nav from '@/components/navbar/Nav'
import React from 'react'

export default function Store (): JSX.Element {
  return (
    <>
      <Nav />
      <div className='store'>
        <p> Launch on 19. Okt </p>
      </div>
      <Footer />
    </>
  )
}