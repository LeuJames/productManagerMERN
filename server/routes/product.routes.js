const ProductController = require('../controllers/product.controller');

module.exports = function(app){
  app.post('/api/product', ProductController.createProduct);
  app.get('/api/products/', ProductController.allProducts);
  app.get('/api/products/:id', ProductController.getProduct);
}