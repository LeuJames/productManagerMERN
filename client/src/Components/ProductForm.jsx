import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const[price, setPrice] = useState();
  const[desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/product', {
      title,
      price,
      desc
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
  
  return(
    <div>
      <h1>Enter Product Details</h1>
      <form onSubmit={handleSubmit}>
        <p>
          Product Title:&nbsp;
          <input type="text" onChange = { (e) => setTitle(e.target.value)}/>
        </p>
        <p>
          Price:&nbsp;
          <input type="number" onChange = { (e) => setPrice(e.target.value)}/>
        </p>
        <p>
          Product Description:&nbsp;
          <input type="text" onChange = { (e) => setDesc(e.target.value)}/>
        </p>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default ProductForm;