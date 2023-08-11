import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
  userID: { type: String, require: true },
  email: { type: String, require: true },
  tel: { type: String },
  date: { type: Date },
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

const Transaction = mongoose.model('users', transactionSchema)

export default Transaction
