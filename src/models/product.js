const moment = require('moment');
const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    created_at: { type: String, default: () => moment.utc().format() },
    updated_at: { type: String,  default: () => moment.utc().format()},
})

const Product = mongoose.model("product", productSchema);

module.exports = Product;

