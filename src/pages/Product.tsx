import React from 'react'
import { useLocation } from 'react-router-dom'
import { products } from '../assets/data';
import '../styles/soloproduct.css'

const Product = () => {
  const location = useLocation();
  const value = location.pathname.replace('/catalogue/','')
  const prod : any = products.find((item) => item.slur === value);
  return (
    <div className='product-container2'>
      <div className='image-container2'>
        <img className='image' src={prod.image} alt=''/>
      </div>
      <div className="product-name2">{prod.title}</div>
      <div className="product-price2">{prod.price.toFixed(2)} €</div>
      <div className='product-description2'>{prod.description}</div>
    </div>
  )
}

export default Product