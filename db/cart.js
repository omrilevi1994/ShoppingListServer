// Create mongoose connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://omrilevi:Aa123456@cluster0.etvftjw.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

// Create mongoose schema
const cartSchema = new mongoose.Schema(
    { 
        products: [{
        name: String,
        price: Number,
        quantity: Number,
        }],
        total: Number,
});

// Create mongoose model
const Cart = mongoose.model('Cart', cartSchema);

// Query the database
const addCart = async (cart) => {
    return await Cart.insertMany(cart);
}

module.exports = {
    addCart,
}

