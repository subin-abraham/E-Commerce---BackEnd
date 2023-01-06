// 1 import mongoose

const mongoose = require('mongoose')

//  2 define connection

mongoose.connect('mongodb://localhost:27017/cart', () => {
    console.log('connected to mongoDB');
})
// 3 create model

const Product = mongoose.model('Product', {
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
        rate: Number,
        count: Number
    }
})

// 4 export
module.exports={
    Product
}