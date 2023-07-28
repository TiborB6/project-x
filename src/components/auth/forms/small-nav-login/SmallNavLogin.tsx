import React, { useState } from 'react'
import EmailInput from '../../forms-components/EmailInput'
import PasswordInput from '../../forms-components/PasswordInput'
import './small-nav-login.scss'

export default function SmallNavLogin (): JSX.Element {
  const output: string[] = []

  const [email, setEmail] = useState('')
  const [psw, setPsw] = useState('')

  const handleEmailChange = (value: string): void => {
    setEmail(value)
  }

  const handlePswChange = (value: string): void => {
    setPsw(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    output.push(email)
    output.push(psw)
    console.log(output)
  }

  return (
    <form className='small-login' onSubmit={handleSubmit}>
      <EmailInput changeFunction={handleEmailChange} />
      <PasswordInput type='password' changeFunction={handlePswChange} matchError={false} />
      <button type="submit">Submit</button>
    </form>
  )
}
