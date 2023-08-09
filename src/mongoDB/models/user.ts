import mongoose from 'mongoose'

export interface UserInterface {
  name?: string
  email: string
  tel?: string
  password: string
  createDate?: Date
  billingAdress?: {
    plz?: number
    city?: string
    street?: string
  }
  shippingAdress?: {
    plz?: number
    city?: string
    street?: string
  }
}

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, require: true },
  tel: { type: String },
  password: { type: String, require: true },
  createDate: { type: Date },
  billingAdress: {
    plz: { type: Number },
    city: { type: String },
    street: { type: String }
  },
  shippingAdress: {
    plz: { type: Number },
    city: { type: String },
    street: { type: String }
  }
})

const User = mongoose.model('users', userSchema)

async function getUserByEmail (email: string): Promise<UserInterface | null> {
  try {
    const user = await User.findOne({ email }).lean().exec()
    return user as UserInterface | null
  } catch (error) {
    console.error('Error fetching user:', error)
    return null
  }
}

async function addNewUser (data: UserInterface): Promise<void> {
  try {
    // implement logic
  } catch (error) {
    console.error('Error fetching user:', error)
  }
}

export {
  getUserByEmail,
  addNewUser
}

export default User
