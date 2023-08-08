import mongoose from 'mongoose'

export default async function connectDB (): Promise<void> {
  try {
    await mongoose.connect(process.env.MDB_URI as string)
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error(err)
  }
}
