import mongoose from 'mongoose'

export interface ProductInterface {
  name: string
  productID: number
  priceEUR: number
  priceUSD: number
  imgPath: string
  description: string
}

const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  priceEUR: { type: Number, require: true },
  priceUSD: { type: Number, require: true },
  imgPath: { type: Array },
  description: { type: String }
})

const Product = mongoose.model('products', productSchema)

export default Product
