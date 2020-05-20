import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const Update = (props) => {
  const {id} = props;
  const [title, setTitle] = useState();
  const[price, setPrice] = useState();
  const[desc, setDesc] = useState();

  useEffect( () => {
    axios.get('http://localhost:8000/api/products/' + id)
      .then(res => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDesc(res.data.desc);
      })
  }, [])

  const updateProduct = e => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/products/' + id, {
      title,
      price,
      desc
    })
    navigate('/products/'+ id)
  }

  return(
    <div>
      <h1>Update Product</h1>
      <form onSubmit = {updateProduct}>
        <p>
          Product Title:&nbsp;
          <input 
            type="text" 
            value = {title} 
            onChange = { (e) => setTitle(e.target.value)}/>
        </p>
        <p>
          Price:&nbsp; $
          <input 
            value = {price} 
            type="number" step="any" 
            onChange = { (e) => setPrice(e.target.value)}/>
        </p>
        <p>
          Product Description:&nbsp;
          <input 
            value = {desc} 
            type="text" 
            onChange = { (e) => setDesc(e.target.value)}/>
        </p>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Update;