import React, { useEffect, useState } from 'react'
interface Psw {
  type: 'password' | 'confirm password'
  matchError: boolean
  changeFunction: (value: string) => void
}

type ValidationState = 'valid' | 'invalid' | 'empty'
type View = 'text' | 'password'

export default function PasswordInput ({ type, matchError, changeFunction }: Psw): JSX.Element {
  const [error, setError] = useState('')
  const [validation, setValidation] = useState<ValidationState>('empty')
  const [view, setView] = useState<View>('password')
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    if (value.length < 1) {
      setValidation('empty')
      setError('')
    } else if (value.length > 100) {
      setValidation('invalid')
      setError(' - max. length 100 character')
    } else if (matchError) {
      setValidation('invalid')
      setError('- passwords do not match')
    } else {
      setValidation('valid')
      setError('')
    }

    changeFunction(value)
  }, [value, matchError])

  const handlePswChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  const handleClick = (): void => {
    if (view === 'password') {
      setView('text')
    } else {
      setView('password')
    }
  }

  return (
    <div className="form-wrapper">
      <input type={view} name="password" id="password" onChange={handlePswChange} className={validation} autoComplete="off"/>
      <div></div>
      <label htmlFor="password">
        {type === 'password' ? 'Password *' : 'Confirm Password * '}
        <span className='error'>{error}</span>
      </label>
      <svg className="input-svg" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" onClick={handleClick}>
        <path d="M480.118-330Q551-330 600.5-379.618q49.5-49.617 49.5-120.5Q650-571 600.382-620.5q-49.617-49.5-120.5-49.5Q409-670 359.5-620.382q-49.5 49.617-49.5 120.5Q310-429 359.618-379.5q49.617 49.5 120.5 49.5Zm-.353-58Q433-388 400.5-420.735q-32.5-32.736-32.5-79.5Q368-547 400.735-579.5q32.736-32.5 79.5-32.5Q527-612 559.5-579.265q32.5 32.736 32.5 79.5Q592-453 559.265-420.5q-32.736 32.5-79.5 32.5ZM480-200q-146 0-264-83T40-500q58-134 176-217t264-83q146 0 264 83t176 217q-58 134-176 217t-264 83Zm0-300Zm-.169 240Q601-260 702.5-325.5 804-391 857-500q-53-109-154.331-174.5-101.332-65.5-222.5-65.5Q359-740 257.5-674.5 156-609 102-500q54 109 155.331 174.5 101.332 65.5 222.5 65.5Z"/>
      </svg>
    </div>
  )
}
