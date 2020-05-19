const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productManager', {
  useNewUrlParser : true,
  useUnifiedTopology : true
})
  .then( () => console.log('You are now connected to the database!'))
  .catch( err => console.log('Something failed miserably upon attempt to connect to the database', err));