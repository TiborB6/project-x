import mongoose from 'mongoose'

export default async function connectDB (): Promise<void> {
  const mdbUri = process.env.MDB_URI ?? ''

  try {
    await mongoose.connect(mdbUri)
    console.log('connected')
  } catch (err) {
    console.error(err)
  }
}
