import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { products } from '../assets/data';
import '../styles/soloproduct.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { product } from '../interfaces/interfaces';

const Product = () => {
  const location = useLocation();
  const value = location.pathname.replace('/catalogue/','')
  const prod : any = products.find((item) => item.slur === value);
  const dispatch = useDispatch();
  
  const [count, setCount] = useState(1);
  const increment = () => {
    if (count > 9) return
     setCount(count + 1)
  }

  const decrement = () => {
    if (count < 2) return
    setCount(count - 1)
  }

  const handleAddToCart = (props : product, amount: number) => {
    const temp = {props, amount}
    dispatch(addToCart(temp));
  }

  return (
    <div className='product-container2'>
      <div className='image-container2'>
        <img className='image' src={prod.image} alt=''/>
      </div>
      <div className="product-name2">{prod.title}</div>
      <div className="product-price2">{prod.price.toFixed(2)} €</div>
      <div className='product-description2'>{prod.description}</div>
      <div className='button-container2'>
            <button className='button2' onClick={decrement}>
              -
            </button>
            <div className='button2'>
              {count}
            </div>
            <button className='button2' onClick={increment}>
              +
            </button>
            <button className='button-add2' onClick={() => handleAddToCart(prod, count)}>
              Įdėti į krepšelį
            </button>
        </div>
    </div>
  )
}

export default Product