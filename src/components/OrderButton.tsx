import React from 'react'
import { Link } from 'react-router-dom'

const OrderButton = () => {
  return (
    <Link to='/order'>
        <button className='order-button'>Užsakyti</button>
    </Link>
  )
}

export default OrderButton