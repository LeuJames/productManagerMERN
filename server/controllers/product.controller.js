const { Product } = require('../models/product.model');

module.exports.createProduct = (req, res) => {
  const {title, price, desc} = req.body;
  Product.create({
    title,
    price,
    desc
  })
  .then(product => res.json(product))
  .catch(err => res.json(err));
}