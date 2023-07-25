import React, { useState } from 'react'
import NameInput from './forms/NameInput'

export default function Form (): JSX.Element {
  const names: any = []

  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')

  const handleFirstNameChange = (value: string): void => {
    setFirstName(value)
  }

  const handleSecondNameChange = (value: string): void => {
    setSecondName(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    names.push(firstName)
    names.push(secondName)
    console.log(names)
  }

  return (
    <>
      <form action="" onSubmit={(event) => { handleSubmit(event) }}>
        <NameInput type='first-name' changeFunction={handleFirstNameChange} />
        <NameInput type='second-name' changeFunction={handleSecondNameChange} />

        <div className="form-wrapper">
          <input type="email" name="email" id="email"/>
          <div></div>
          <label htmlFor="email">Email</label>
        </div>

        <div className="form-wrapper">
          <input type="tel" name="tel" id="tel"/>
          <div></div>
          <label htmlFor="tel">Phone</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
