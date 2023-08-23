import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NameInput from '../auth/form-components/NameInput'
import EmailInput from '../auth/form-components/EmailInput'
import TextAreaInput from '../auth/form-components/TextAreaInput'

export interface CompanyData {
  _id: string
  name: string
  infoEmail: string
  supportEmail: string
  salesEmail: string
  tel: string
  companyForm: string
  office: string
}

export default function SalesContact ({ companyData }: { companyData?: CompanyData }): JSX.Element {
  useEffect(() => {
    console.log(companyData)
  }, [])

  const [error, setError] = useState('')

  const [name, setName] = useState<string>('')
  const handleNameChange = (value: string): void => {
    setName(value)
  }

  const [email, setEmail] = useState<string>('')
  const handleEmailChange = (value: string): void => {
    setEmail(value)
  }

  const [message, setMessage] = useState<string>('')
  const handleMessageChange = (value: string): void => {
    setMessage(value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    try {
      const response = await axios.post('/api/sendContactMail', {
        emailInput: email,
        nameInput: name,
        messageInput: message,
        targetEmail: companyData?.salesEmail
      })

      console.log(response)
    } catch (err: any) {
      setError(err)
    }
  }

  return (
    <div className='sales-contact'>
      <form action="" onSubmit={() => { void handleSubmit }}>
        <NameInput type='name' changeFunction={handleNameChange} />
        <EmailInput changeFunction={handleEmailChange} />
        <TextAreaInput changeFunction={handleMessageChange} label="How can we help you?" />
        <div className='serverError'>{error}</div>
        <button type='submit'> Send </button>
      </form>
    </div>
  )
}
