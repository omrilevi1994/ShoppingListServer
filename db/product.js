// Create mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://omrilevi:Aa123456@cluster0.etvftjw.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

// Create mongoose schema
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    description: String,
    image: String,
});

// Create mongoose model
const Product = mongoose.model('Product', productSchema);

// Query the database

const getAllProducts = async () => {
    return await Product.find();
}

module.exports = {
    getAllProducts,
}

