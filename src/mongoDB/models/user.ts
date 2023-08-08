import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, require: true },
  tel: { type: String },
  password: { type: String, require: true },
  createDate: { type: Date }
})

const User = mongoose.model('users', userSchema)

export default User
