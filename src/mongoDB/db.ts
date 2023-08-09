import mongoose from 'mongoose'

export default async function connectDB (): Promise<void> {
  try {
    await mongoose.connect(process.env.MDB_URI as string)
  } catch (err) {
    console.error(err)
  }
}
