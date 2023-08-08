import mongoose from 'mongoose'

async function connectDB (): Promise<void> {
  try {
    await mongoose.connect(process.env.MDB_URI as string)
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error(err)
  }
}

const db = connectDB()

export default db
