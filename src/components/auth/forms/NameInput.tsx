import React, { useState } from 'react'
import './form-element.scss'
interface Name {
  type: 'first-name' | 'second-name'
  changeFunction: (value: string) => void
}

type ValidationState = 'valid' | 'invalid' | 'empty'

export default function NameInput ({ type, changeFunction }: Name): JSX.Element {
  const [error, setError] = useState('')
  const [validation, setValidation] = useState<ValidationState>('empty')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.length < 1) {
      setValidation('empty')
      setError('')
    } else if (event.target.value.length > 100) {
      setValidation('invalid')
      setError(' - max. length 100 character')
    } else {
      setValidation('valid')
      setError('')
      const value = event.target.value
      changeFunction(value)
    }
  }

  return (
    <div className="form-wrapper">
      <input type="text" name={type} id={type} onChange={handleChange} className={validation}/>
      <div></div>
      <label htmlFor="first-name">
        {type === 'first-name' ? 'First Name' : 'Second Name'}
        <span className='error'>{error}</span>
      </label>
    </div>
  )
}
