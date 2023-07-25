import React from 'react'

interface Email {
  changeFunction: (value: string) => void
}

export default function EmailInput ({ changeFunction }: Email): JSX.Element {
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value
    changeFunction(value)
  }

  return (
    <div className="form-wrapper">
      <input type="text" name="email" id="email" onChange={handleEmailChange}/>
      <div></div>
      <label htmlFor="first-name">Email *</label>
    </div>
  )
}
