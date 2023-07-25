import React, { useState } from 'react'
import NameInput from './forms/NameInput'
import EmailInput from './forms/EmailInput'
import PhoneInput from './forms/PhoneInput'
import './form.scss'
import Nav from '../navbar/Nav'

export default function Form (): JSX.Element {
  const names: any = []

  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleFirstNameChange = (value: string): void => {
    setFirstName(value)
  }

  const handleSecondNameChange = (value: string): void => {
    setSecondName(value)
  }

  const handleEmailChange = (value: string): void => {
    setEmail(value)
  }

  const handlePhoneChange = (value: string): void => {
    setPhone(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    names.push(firstName)
    names.push(secondName)
    names.push(email)
    names.push(phone)
    console.log(names)
  }

  return (
    <>
      <Nav />
      <form action="" onSubmit={(event) => { handleSubmit(event) }} noValidate>
        <NameInput type='first-name' changeFunction={handleFirstNameChange} />
        <NameInput type='second-name' changeFunction={handleSecondNameChange} />
        <EmailInput changeFunction={handleEmailChange} />
        <PhoneInput changeFunction={handlePhoneChange} />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
