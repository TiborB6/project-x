import Footer from '@/components/footer/Footer'
import Nav from '@/components/navbar/Nav'
import React from 'react'

export default function Privacy (): JSX.Element {
  return (
    <>
      <Nav />
        <div className='privacy'>
          <h1>Data Privacy Policy</h1>
          <p><strong>1. Data Collection</strong></p>
          <p>We collect personal data that you provide to us when placing an order or registering, such as name, address, email address, phone number, etc.</p>

          <p><strong>2. Use of Data</strong></p>
          <p>The collected data is used for order processing, communication with you, and improvement of our services.</p>

          <p><strong>3. Disclosure to Third Parties</strong></p>
          <p>Your data will be shared with third parties (e.g. shipping service providers, payment processors) only for order fulfillment.</p>

          <p><strong>4. Cookies</strong></p>
          <p>Our website uses cookies to enhance your user experience. Cookies can be disabled in your browser settings.</p>

          <p><strong>5. Data Security</strong></p>
          <p>We implement appropriate technical and organizational measures to protect your data from unauthorized access.</p>

          <p><strong>6. User Rights</strong></p>
          <p>You have the right to access, correct, delete, and object to your stored data. Please contact us via email for this purpose.</p>
        </div>
    <Footer />
    </>
  )
}
