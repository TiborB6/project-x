import React, { useState } from 'react'

interface TextAreaProps {
  label: string
  changeFunction: (value: string) => void
}

type ValidationState = 'valid' | 'invalid' | 'empty'

export default function TextAreaInput ({ label, changeFunction }: TextAreaProps): JSX.Element {
  const [error, setError] = useState('')
  const [validation, setValidation] = useState<ValidationState>('empty')

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (event.target.value.length < 1) {
      setValidation('empty')
      setError('')
    } else if (event.target.value.length > 300) {
      setValidation('invalid')
      setError(' - max. length 300 characters')
    } else {
      setValidation('valid')
      setError('')
      const value = event.target.value
      changeFunction(value)
    }
  }

  return (
    <div className="form-wrapper">
      <textarea
        name={label}
        id={label}
        onChange={handleChange}
        className={validation}
        autoComplete="off"
      ></textarea>
      <label htmlFor={label}>
        {label}
        <span className='error'>{error}</span>
      </label>
    </div>
  )
}
