import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  priceEUR: { type: Number, require: true },
  priceUSD: { type: Number, require: true },
  imgPath: { type: Array },
  description: { type: String }
})

const Product = mongoose.model('products', productSchema)

export default Product
