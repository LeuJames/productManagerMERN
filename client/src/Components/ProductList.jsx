import React from 'react';
import axios from 'axios';
import {Link } from '@reach/router'

const ProductList = (props) => {

  const deleteProduct = (productId) => {
    axios.delete('http://localhost:8000/api/products/' + productId)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      }

  return (
    <div>
      <h2>All Products:</h2>
      {props.products.map(( product, idx) => {
        return (
            <p key={idx}> 
              <Link to= {`/products/${product._id}`}>{product.title}</Link>
              &nbsp; | &nbsp;
              <button onClick = { (e) => {deleteProduct(product._id)}}>Delete</button>
            </p>
        )
      })}
    </div>
  )
}

export default ProductList;