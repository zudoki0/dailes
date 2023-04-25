import React from 'react'
import { product } from '../interfaces/interfaces'
import '../styles/orderprod.css'

const OrderData = (props : product) => {
  return (
    <div>
        <div className='order-item-container'>
            <div>{props.title}</div>
            <div className='order-quantity'>Kiekis: {props.cartQuantity}</div>
        </div>
    </div>
  )
}

export default OrderData