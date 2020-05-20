import React from 'react';
import axios from 'axios';
import {Link } from '@reach/router'

const ProductList = (props) => {
  return (
    <div>
      <h2>All Products:</h2>
      <ul>
        {props.products.map(( product, idx) => {
          return (
              <li key={idx}> <Link to= {`/products/${product._id}`}>{product.title}</Link></li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProductList;