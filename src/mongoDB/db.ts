import mongoose from 'mongoose'

export default async function connectDB (): Promise<void> {
  try {
    await mongoose.connect(process.env.MDB_URI)
    console.log('connected')
  } catch (err) {
    console.error(err)
  }
}
