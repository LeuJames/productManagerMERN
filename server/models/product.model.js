const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema ( {
  title : {
    type : String,
    required : [true, "Product title is required"],
    minlength : [3, "Product title must be at least 3 characters long"]
  },
  price : {
    type :Number,
    required : [true, "Product price is required"],
    min : [0, "Product price must be a positive number"]
  },
  desc : {
    type :String,
    required : [true, "Product description is required"],
    min : [5, "Product price must be at least 5 characters long"]
  }
}, {timestamps : true});

module.exports.Product = mongoose.model('product', ProductSchema);