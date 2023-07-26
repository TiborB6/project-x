import React, { useState } from 'react'
import './form-element.scss'
interface Phone {
  changeFunction: (value: string) => void
}

type ValidationState = 'valid' | 'invalid' | 'empty'

export default function PhoneInput ({ changeFunction }: Phone): JSX.Element {
  const [error, setError] = useState('')
  const [validation, setValidation] = useState<ValidationState>('empty')

  const internationalPhoneNumberPattern = /^\+(?:[0-9] ?){6,14}[0-9]$/
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value.trim()

    if (value === '') {
      setError('')
      setValidation('empty')
    } else if (!value.startsWith('+')) {
      setError(' - International country code missing (+)')
      setValidation('invalid')
    } else if (!internationalPhoneNumberPattern.test(value)) {
      setError(' - Enter a correct phone number')
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
      <input type="tel" name="tel" id="tel" onChange={handlePhoneChange} className={validation}/>
      <div></div>
      <label htmlFor="tel">Phone
        <span className='error'>{error}</span>
      </label>
    </div>
  )
}
