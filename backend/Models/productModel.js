const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    price: String,
    description: String,
    rating: String,
    images: [
        {
            image: String
        }
    ],
    category: String,
    seller: String,
    stock: String,
    numOfReviews: String,
    createdAt: Date

});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;