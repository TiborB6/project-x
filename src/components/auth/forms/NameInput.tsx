import React from 'react'

interface Name {
  type: 'first-name' | 'second-name'
  changeFunction: (value: string) => void
}

export default function NameInput ({ type, changeFunction }: Name): JSX.Element {
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value
    changeFunction(value)
  }

  return (
    <div className="form-wrapper">
      <input type="text" name={type} id={type} onChange={handleEmailChange} />
      <div></div>
      <label htmlFor="first-name">{type === 'first-name' ? 'First Name' : 'Second Name'}</label>
    </div>
  )
}
