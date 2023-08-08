import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
  userID: { type: String, require: true },
  email: { type: String, require: true },
  tel: { type: String },
  date: { type: Date },
  billingAdress: { type: Object },
  shippingAdress: { type: Object }
})

const Transaction = mongoose.model('users', transactionSchema)

export default Transaction
