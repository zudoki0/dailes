import React, { useState } from 'react'
import { store } from '../redux/store'
import OrderData from '../components/OrderData';
import { product } from '../interfaces/interfaces';
import '../styles/order.css'
import { Link } from 'react-router-dom';

const Order = () => {
  const [delivery, setDelivery] = useState('Pristatymas į namus');
  const [payment, setPayment] = useState('El. bankininkystė');
  const products = store.getState().cart;
  const [money, setMoney] = useState(4);
  

  const changeDelivery = (item: string) => {
    setDelivery(item);
    if(item === 'Pristatymas į namus') setMoney(4);
    else setMoney(0);
  }

  const changePayment = (item: string) => {
    setPayment(item);
  }

  return (
    <div>
      <div className='user-data-container'>
        Užsakymo duomenys
        <div className='input-container'>Vardas<input className='input-bar'></input></div>
        <div className='input-container'>Pavardė<input className='input-bar'></input></div>
        <div className='input-container'>Mob. telefonas<input className='input-bar' maxLength={16}></input></div>
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
        <div className="dropdown2">
        <div className='input-container-2'>Apmokėjimo būdas</div>
          <button className="dropbtn2">{payment}</button>
          <div className="dropdown-content2">
            <div onClick={() => changePayment('El. bankininkystė')}>
            El. bankininkystė
            </div>
            <div onClick={() => changePayment('Bankinė kortelė')}>
            Bankinė kortelė
            </div>
          </div>
        </div>
        {
          delivery === 'Pristatymas į namus' ? <div className='input-container'>Pristatymo adresas<input className='input-bar'></input></div> : <div className='input-container-3'>Parduotuvė yra Savanorių pr. 16, Vilnius</div>      }
        
        <div className='pay-button-container'>
          <Link to='payment'>
            <button className='pay-button'>Apmokėti</button>
          </Link>
        </div>

      </div>
      <div className='item-total'> Iš viso prekių: {products.totalAmount} vnt. </div>
      <div className='item-total'>  Iš viso kaina: {Math.abs(products.totalPrice + money).toFixed(2)} € </div> 
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