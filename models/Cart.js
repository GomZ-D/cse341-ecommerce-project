const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true, 'User ID is required'],
    
  },
  store_id: {
    type: String, 
    required: [true, 'Store ID is required '],
  },
  items: [
    {
      product_id: {
        type: String,
        required: [true, 'Product ID is required'],
      },
      quantity: {
        type: Number,
        required: [true, 'Quantity is required'],
        min: [1, 'Quantity must be at least 1'],
      },
      price: {
        type: Number,
        required: [true, 'Price is required'],
      }
    }
  ],
  total_price: {
    type: Number,
    default: 0,
  }
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
