import Footer from '@/components/footer/Footer'
import Nav from '@/components/navbar/Nav'
import { type CartArray } from '@/redux/cartSlice'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

export default function Cart (): JSX.Element {
  const cart = useSelector((state: { cart: CartArray }) => state.cart)

  console.log(cart)

  const router = useRouter()

  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedOption(event.target.value)
  }

  return (
    <div className="cart">
      <Nav />
      <div className="cart-wrapper">
        <div className="left">
        {cart.length > 1
          ? (
              cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <Image src={item.imgPath} alt="product image" />
                  <p>{item.name}</p> {/* Use curly braces for interpolation */}
                  <p>{item.priceUSD}</p> {/* Use curly braces for interpolation */}
                  <p>{item.quantity}</p> {/* Use curly braces for interpolation */}
                </div>
              ))
            )
          : (
              <>
                <h1>Your Cart is empty</h1>
                <button onClick={() => { void router.push('/store') }}>
                  Browse Products
                  <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M530-481 332-679l43-43 241 241-241 241-43-43 198-198Z"/></svg>
                </button>
              </>
            )}
          </div>
        <div className="shipping">
          <div>
            <h2>Select an Option:</h2>
            <br />
            <label>
              <input
                type="radio"
                name="options"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={handleOptionChange}
              />

            </label>
            <br />
            <label>
              <input
                type="radio"
                name="options"
                value="option3"
                checked={selectedOption === 'option3'}
                onChange={handleOptionChange}
              />
              Option 3
            </label>
            <br />
            <p>Selected Option: {selectedOption}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
