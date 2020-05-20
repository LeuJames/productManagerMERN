import React, {useEffect, useState } from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const Details = (props) => {
  const [product, setProduct] = useState({})
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/products/'+props.id)
      .then(res => setProduct( {...res.data}))
  }, [product])

  const deleteProduct = (productId) => {
    axios.delete('http://localhost:8000/api/products/' + productId)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    navigate('/');
      }

  return(
    <div>
      <h4> {product.title}</h4>
      <p> Price: ${product.price}</p>
      <p> Description: {product.desc}</p>
      <Link to={"/products/" + product._id + "/edit"}>
        Edit
      </Link>
      &nbsp; | &nbsp;
      <button onClick = { (e) => {deleteProduct(product._id)}}>Delete</button>
    </div>
  )
}

export default Details;