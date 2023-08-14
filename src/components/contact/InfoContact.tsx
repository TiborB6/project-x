import React, { useEffect, useState } from 'react'
import { type GetStaticProps } from 'next'
import connectDB from '@/mongoDB/db'
import mongoose from 'mongoose'
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

export const getStaticProps: GetStaticProps = async () => {
  try {
    await connectDB().catch((err) => {
      console.error(err)
    })

    const db = mongoose.connection
    const collection = db.collection('company-data') // Specify the collection name

    const companyData = await collection.findOne()// Fetch the document

    return {
      props: {
        companyData
      }
    }
  } catch (error) {
    console.error(error)

    return {
      props: {
        companyData: null // Handle the error case
      }
    }
  }
}

export default function InfoContact ({ companyData }: { companyData?: CompanyData }): JSX.Element {
  useEffect(() => {
    console.log(companyData)
  }, [])

  const [error, setError] = useState('')

  const [name, setName] = useState<string>('')
  const handleNameChange = (value: string): void => {
    setName(value)
    setError(value)
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
        targetEmail: companyData?.infoEmail
      })

      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='info-contact'>
      <h1>Contact Us</h1>
      <div className="wrapper">
        <div className='left-side'>
          <p>
            If you have any questions or need assistance, feel free to reach out to us.
          </p>
          <ul>
            <li>Email: <a href="mailto:info@fibxstore.com">info@fibxstore.com</a></li>
            <li>Phone: <a href="tel:+1234567890">+123-456-7890</a></li>
            <li>Address: 123 Main St, Cityville, Country</li>
          </ul>
        </div>
        <div className='right-side'>
          <form action="" onSubmit={() => { void handleSubmit }}>
            <NameInput type='name' changeFunction={handleNameChange} />
            <EmailInput changeFunction={handleEmailChange} />
            <TextAreaInput changeFunction={handleMessageChange} label="Message" />
            <div className='serverError'>{error}</div>
            <button type='submit'> Send </button>
          </form>
        </div>
      </div>
    </div>
  )
}
