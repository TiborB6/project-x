import mongoose from 'mongoose'
import { MDB_URI } from '../../config'

export default async function connectDB (): Promise<void> {
  try {
    await mongoose.connect(MDB_URI)
    console.log('connected')
  } catch (err) {
    console.error(err)
  }
}
