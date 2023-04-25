import React, { useState } from 'react'
import { store } from '../redux/store'
import OrderData from '../components/OrderData';
import { product } from '../interfaces/interfaces';
import '../styles/order.css'

const Order = () => {
  const [delivery, setDelivery] = useState('Pristatymas į namus');
  const products = store.getState().cart;

  const changeDelivery = (item: string) => {
    setDelivery(item);
  }

  return (
    <div>
      <div className='user-data-container'>
        Užsakymo duomenys
        <div className='input-container'>Vardas<input className='input-bar'></input></div>
        <div className='input-container'>Pavardė<input className='input-bar'></input></div>
        <div className='input-container'>Mob. telefonas<input className='input-bar'></input></div>
        <div className='input-container'>El. paštas<input className='input-bar'></input></div>
        <div className='input-container'>Nuolaidų kodas (jei yra)<input className='input-bar'></input></div>
        <div className="dropdown2">
        <div className='input-container-2'>Pristatymo būdas</div>
          <button className="dropbtn2">{delivery}</button>
          <div className="dropdown-content2">
            <div onClick={() => changeDelivery('Atsiėmimas parduotuvėje')}>
            Atsiėmimas parduotuvėje
            </div>
            <div onClick={() => changeDelivery('Pristatymas į namus')}>
            Pristatymas į namus
            </div>
          </div>
        </div>
        {
          delivery === 'Pristatymas į namus' ? <div className='input-container'>Pristatymo adresas<input className='input-bar'></input></div> : <div className='input-container-3'>Parduotuvė yra Savanorių pr. 16, Vilnius</div>      }
      </div>
      <div className='item-total'> Iš viso prekių: {products.totalAmount} vnt. </div>
      <div className='item-total'>  Iš viso kaina: {Math.abs(products.totalPrice).toFixed(2)} € </div> 
      <div className='product-total-container'>
        {
          products.productList.map((item:product, index) => (
            <OrderData
              key = {index}
              image= {item.image}
              title={item.title}
              category={item.category}
              price={item.price}
              slur={item.slur}
              description={item.description}
              cartQuantity={item.cartQuantity}
              rating={item.rating}
            />
            ))
          }
      </div>
    </div>
  )
}

export default Order