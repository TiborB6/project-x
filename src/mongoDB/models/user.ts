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

export const User = mongoose.model('User', userSchema)

async function getUserByEmail (email: string): Promise<UserInterface | null> {
  try {
    const user = await User.findOne({ email }).lean().exec()
    return user as UserInterface | null
  } catch (error) {
    console.error('Error fetching user:', error)
    return null
  }
}

async function createUser (newUserObj: UserInterface): Promise<void> {
  const newUser = new User(newUserObj)

  try {
    const savedUser = await newUser.save()
    console.log('User saved:', savedUser)
  } catch (error) {
    console.error('Error saving user:', error)
  }
}

export {
  getUserByEmail,
  createUser
}
