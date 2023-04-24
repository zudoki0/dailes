import React, { useState } from 'react'
import {store} from '../redux/store'
import { product } from '../interfaces/interfaces';
import CartData from '../components/CartData'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'
import '../styles/cart.css'

const Cart = () => {
  const [visible, setVisible] = useState(true);
  const products = store.getState().cart;
  const dispatch = useDispatch();
  const handleRemoveItem = (item:product) => {
      dispatch(removeFromCart(item));
      if(visible === true) setVisible(false); else setVisible(true);
  }

  return (
    <div className='list'>
      <div className='item-total'> Iš viso prekių: {products.totalAmount} vnt. </div>
      <div className='item-total'>  Iš viso kaina: {Math.abs(products.totalPrice).toFixed(2)} € </div>
      {
        products.productList.map((item : product, index) => (
          <div>
            <CartData
              key = {index}
              image= {item.image}
              title={item.title}
              category={item.category}
              price={item.price}
              slur={item.slur}
              description={item.description}
              cartQuantity={item.cartQuantity}
            />
            <button className='cart-button' onClick={() => handleRemoveItem(item)}>
              Pašalinti iš krepšelio
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default Cart