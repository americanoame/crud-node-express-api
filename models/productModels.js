const mongoose = require('mongoose');

const productSchema = mongoose(
  {
    name: {
      type: String,
      required: [true, 'please enter a product name'],
    },
    quantity: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('product', productSchema)

module.exports = Product;
