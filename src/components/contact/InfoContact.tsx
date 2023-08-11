import React from 'react'
import { type GetStaticProps } from 'next'
import connectDB from '@/mongoDB/db'
import mongoose from 'mongoose'

interface CompanyData {
  // Define the structure of your companyData object
  name: string
  address: string
  phoneNumber: string
  // ... other fields
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    await connectDB().catch((err) => {
      console.error(err)
    })

    const db = mongoose.connection
    const collection = db.collection('company-data') // Specify the collection name

    const companyData = await collection.findOne() // Fetch the document

    console.log(companyData)

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

export default function InfoContact ({ companyData }: { companyData: CompanyData }): JSX.Element {
  return (
    <div className='info-contact'>
      <div className='left-side'>

      </div>
      <div className='right-side'>
      </div>
    </div>
  )
}
