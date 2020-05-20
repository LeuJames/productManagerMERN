import React, {useEffect, useState} from 'react';
import ProductForm from '../Components/ProductForm';
import ProductList from '../Components/ProductList';
import axios from 'axios';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const handleSubmit = (title, price, desc) => {
    axios.post('http://localhost:8000/api/product', {
      title,
      price,
      desc
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }


  useEffect ( () => {
    axios.get('http://localhost:8000/api/products')
    .then(res => {
      setProducts(res.data);
      setLoaded(true);
    });
  }, [products])
  return (
    <div>
      <ProductForm submit = {handleSubmit} />
      <hr/>
      {loaded && <ProductList products={products} />}
    </div>


  )
}

export default Main;