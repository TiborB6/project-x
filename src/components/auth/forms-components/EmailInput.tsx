import React, { useState } from 'react'
import './form-element.scss'

interface Email {
  changeFunction: (value: string) => void
}

type ValidationState = 'valid' | 'invalid' | 'empty'

export default function EmailInput ({ changeFunction }: Email): JSX.Element {
  const [error, setError] = useState('')
  const [validation, setValidation] = useState<ValidationState>('empty')

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value.trim()

    if (value === '') {
      setError('')
      setValidation('empty')
    } else if (!emailPattern.test(value)) {
      setError(' - Enter a correct email address please')
      setValidation('invalid')
    } else if (value.length > 150) {
      setError(' - Max. length 150 characters')
      setValidation('invalid')
    } else {
      setError('')
      setValidation('valid')
      changeFunction(value)
    }
  }

  return (
    <div className="form-wrapper">
      <input type="text" name="email" id="email" onChange={handleEmailChange} className={validation} autoComplete="off"/>
      <div></div>
      <label htmlFor="first-name">Email *
        <span className='error'>{error}</span>
      </label>
    </div>
  )
}
