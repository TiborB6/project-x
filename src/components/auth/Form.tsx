import React, { useEffect, useState } from 'react'
import NameInput from './forms/NameInput'
import EmailInput from './forms/EmailInput'
import PhoneInput from './forms/PhoneInput'
import './form.scss'
import Nav from '../navbar/Nav'
import PasswordInput from './forms/PasswordInput'

export default function Form (): JSX.Element {
  const names: any = []

  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [firstPassword, setFirstPassword] = useState('')
  const [secondPassword, setSecondPassword] = useState('')
  const [password, setPassword] = useState('')
  const [matchError, setMatchError] = useState(false)

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

  const handle1PswChange = (value: string): void => {
    setFirstPassword(value)
  }

  const handle2PswChange = (value: string): void => {
    setSecondPassword(value)
  }

  useEffect(() => {
    if (secondPassword === firstPassword) {
      setMatchError(false)
      setPassword(firstPassword)
    } else {
      setMatchError(true)
    }
  }, [secondPassword])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    names.push(firstName)
    names.push(secondName)
    names.push(email)
    names.push(phone)
    names.push(password)
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
        <PasswordInput type={'password'} changeFunction={handle1PswChange} matchError={false}/>
        <PasswordInput type={'confirm password'} changeFunction={handle2PswChange} matchError={matchError}/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
