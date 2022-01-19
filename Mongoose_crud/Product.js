const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:String,
    isActive: Boolean,
    price: Number
})

module.exports = mongoose.model("Product", productSchema)
 