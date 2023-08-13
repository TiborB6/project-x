import Footer from '@/components/footer/Footer'
import Nav from '@/components/navbar/Nav'
import React from 'react'

export default function AGB (): JSX.Element {
  return (
    <>
      <Nav />
        <div className='AGB'>
          <h1>Terms and Conditions</h1>
          <p>Welcome to our Online Tobacco Store. Please read these terms and conditions carefully before using our website.</p>

          <p><strong>1. General</strong></p>
          <p>By accessing and using our website, you agree to comply with and be bound by these terms and conditions.</p>

          <p><strong>2. Age Restriction</strong></p>
          <p>You must be at least 18 years old to purchase tobacco products from our website. By placing an order, you confirm that you are of legal age.</p>

          <p><strong>3. Product Information</strong></p>
          <p>We strive to provide accurate product descriptions, prices, and availability. However, we do not guarantee the accuracy of such information.</p>

          <p><strong>4. Orders and Payment</strong></p>
          <p>By placing an order, you are making an offer to purchase our products. We reserve the right to accept or decline your order at our discretion.</p>
          <p>Payments must be made through the methods provided on our website.</p>

          <p><strong>5. Shipping and Delivery</strong></p>
          <p>We aim to deliver orders within the specified timeframes. However, delays may occur due to factors beyond our control.</p>

          <p><strong>6. Returns and Refunds</strong></p>
          <p>We accept returns of unopened and unused products within 14 days of delivery. Refunds will be issued within a reasonable timeframe.</p>

          <p><strong>7. Limitation of Liability</strong></p>
          <p>We are not liable for any damages or losses arising from the use of our products or website.</p>

          <p><strong>8. Governing Law</strong></p>
          <p>These terms and conditions are governed by the laws of [Your Country].</p>

          <p>Please contact us if you have any questions or concerns regarding our terms and conditions.</p>
        </div>
    <Footer />
    </>
  )
}
