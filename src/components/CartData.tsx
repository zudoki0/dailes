import { Link } from 'react-router-dom'
import '../styles/image.css'
import '../styles/cart.css'
import { product } from '../interfaces/interfaces'
import { useState } from 'react'
import { minusItemToCart, plusItemToCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'


export const CartData = (props : product) => {
  const [count, setCount] = useState(props.cartQuantity);
  const dispatch = useDispatch();

  const increment = () => {
    if (count > 9) return
    setCount(count + 1);
    dispatch(plusItemToCart(props));
  }

  const decrement = () => {
    if (count < 2) return
    setCount(count - 1 );
    dispatch(minusItemToCart(props));
  }

  return (
    <div className="product-container">
        <Link to={`/catalogue/${props.slur}`}>
          <div className='image-container'>
            <img className='image' src={props.image} alt=''/>
          </div>
          <h3 className="product-name">{props.title}</h3>
        </Link>
        <div className="product-price">
            {props.price.toFixed(2)} €
        </div>
        <div className='product-amount'>Kiekis: {props.cartQuantity}</div>
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
        </div>
    </div>
  )
}

export default CartData;