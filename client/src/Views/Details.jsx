import React, {useEffect, useState } from 'react';
import axios from 'axios';

const Details = (props) => {
  const [product, setProduct] = useState({})
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/products/'+props.id)
      .then(res => setProduct( {...res.data}))
  }, [])

  return(
    <div>
      <h4> {product.title}</h4>
      <p> Price: ${product.price}</p>
      <p> Description: {product.desc}</p>
    </div>
  )
}

export default Details;