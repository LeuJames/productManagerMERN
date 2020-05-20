import React, {useState} from 'react';

const ProductForm = (props) => {
  const [title, setTitle] = useState('');
  const[price, setPrice] = useState('');
  const[desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit( title, price, desc);
    setTitle('');
    setPrice('');
    setDesc('');
  }
  
  return(
    <div className='jumbotron'>
      <h1>Enter Product Details</h1>
      <form onSubmit={handleSubmit}>
        <p>
          Product Title:&nbsp;
          <input type="text" value = {title} onChange = { (e) => setTitle(e.target.value)}/>
        </p>
        <p>
          Price:&nbsp; $
          <input value = {price} type="number" step="any" onChange = { (e) => setPrice(e.target.value)}/>
        </p>
        <p>
          Product Description:&nbsp;
          <input value = {desc} type="text" onChange = { (e) => setDesc(e.target.value)}/>
        </p>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default ProductForm;