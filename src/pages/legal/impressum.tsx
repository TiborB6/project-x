import Footer from '@/components/footer/Footer'
import Nav from '@/components/navbar/Nav'
import React from 'react'

export default function Impressum (): JSX.Element {
  return (
    <>
      <Nav />
        <div className='impressum'>
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 TMG:</p>
          <p>FibX OG<br />
          Musterstraße 123<br />
          12345 Musterstadt</p>

          <p>Vertreten durch:<br />
          Sebastion Paar, Alfred Czaker, Tibor Balogh (Geschäftsführer)</p>

          <p>Kontakt:<br />
          Telefon: 01234 567890<br />
          E-Mail: <a href="mailto:info@fibxstore.com">info@fibxstore.com</a></p>

          <p>Handelsregister:<br />
          Registergericht: Amtsgericht Wien<br />
          Registernummer: ???</p>

          <p>Umsatzsteuer-ID:<br />
          Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: ???</p>

          <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
            FibX OG</p>
      </div>
    <Footer />
    </>
  )
}
