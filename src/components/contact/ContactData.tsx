import React from 'react'
import { type GetStaticProps } from 'next'
import connectDB from '@/mongoDB/db'
import mongoose from 'mongoose'

export const getStaticProps: GetStaticProps = async () => {
  try {
    await connectDB() // Await the database connection
    const db = mongoose.connection
    const collection = db.collection('company-data')

    const result = await collection.findOne() // There has to be only one document in this collection at ANY time

    return {
      props: {
        companyData: result // Corrected assignment here
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        companyData: null // You might want to handle the error case here
      }
    }
  }
}

interface CompanyData {
  _id: string
  name: string
  infoEmail: string
  supportEmail: string
  salesEmail: string
  tel: string
  companyForm: string
  office: string
}

interface ContactDataProps {
  companyData: CompanyData // Adjust the type based on your data structure
}

export default function ContactData ({ companyData }: ContactDataProps): JSX.Element {
  return (
    <>
      <p>Contact Data</p>
    </>
  )
}
