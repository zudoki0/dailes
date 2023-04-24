import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/image.css'
import '../styles/product.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { product } from '../interfaces/interfaces'

export const Product = (props : product) => {
  const [count, setCount] = useState(1);
  const increment = () => {
    if (count > 9) return
     setCount(count + 1)
  }

  const decrement = () => {
    if (count < 2) return
    setCount(count - 1)
  }

  const dispatch = useDispatch();

  const handleAddToCart = (props : product, amount: number) => {
    const temp = {props, amount}
    dispatch(addToCart(temp));
  } 

  return (
    <div className="product-items">
        <Link to={`/catalogue/${props.slur}`}>
          <div className='image-container'>
            <img className='image' src={props.image} alt=''/>
          </div>
          <h3 className="product-name">{props.title}</h3>
        </Link>
        <div className="product-price">
            {props.price.toFixed(2)} €
          </div>
        <div className='item-description'>
            {props.description}
        </div>
        <div className='buttons'>
            <button className='button' onClick={decrement}>
              -
            </button>
            <div className='button'>
              {count}
            </div>
            <button className='button' onClick={increment}>
              +
            </button>
            <button className='button-add' onClick={() => handleAddToCart(props, count)}>
              Įdėti į krepšelį
            </button>
        </div>
    </div>
  )
}

