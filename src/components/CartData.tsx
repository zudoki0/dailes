import { Link } from 'react-router-dom'
import '../styles/image.css'
import '../styles/cart.css'
import { product } from '../interfaces/interfaces'

export const CartData = (props : product) => {
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
    </div>
  )
}

export default CartData;

