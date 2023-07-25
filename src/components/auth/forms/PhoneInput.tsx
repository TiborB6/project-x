import React from 'react'

interface Email {
  changeFunction: (value: string) => void
}

export default function PhoneInput ({ changeFunction }: Email): JSX.Element {
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value
    changeFunction(value)
  }

  return (
    <div className="form-wrapper">
      <input type="tel" name="tel" id="tel" onChange={handleEmailChange}/>
      <div></div>
      <label htmlFor="tel">Phone</label>
    </div>
  )
}
