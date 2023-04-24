import React, { useState } from 'react'
import {products} from '../assets/data'
import {Product} from '../components/ProductData'
import '../styles/catalogue.css'
import '../styles/filters.css'
import { categories } from '../assets/categories'
import { product } from '../interfaces/interfaces'
import { Link } from 'react-router-dom'

const Catalogue = () => {
  let prod = products;
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('Populiariausios prekės');
  
  const changeProduct = (item:string) => {
    switch(item) {
      case 'Populiariausios prekės':
        prod.sort((a:product, b:product)=> {
          return b.rating - a.rating
        });
        break;
      case 'Kaina nuo mažiausios':
        prod.sort((a:product, b:product)=> {
          return a.price - b.price
        });
        break;
      case 'Kaina nuo didžiausios':
        prod.sort((a:product, b:product)=> {
          return b.price - a.price
        });
        break;
    }
  }

  changeProduct(sortBy);

  if (filter !== '') prod = prod.filter((item) => item.category === filter);
  else prod = products;

  const changeSortBy = (item:string) => {
    setSortBy(item);
  }

  const changeFilter = (item:string) => {
    setFilter(item);
  }

  return (
    <div className='catalogue-body'>
      <div className='catalogue-container'>
        {
          categories.map((item) => (
            <Link to={'../category/'+item.categorySlug}>
              <label className='category' onClick={() => changeFilter(item.categorySlug)}>
              <div>{item.display}</div>
              </label>
            </Link>
          ))
        }
      </div>
      <div className="list">
      <div className="dropdown">
        <button className="dropbtn">{sortBy}</button>
        <div className="dropdown-content">
          <div onClick={() => changeSortBy('Populiariausios prekės')}>
            Populiariausios prekės
          </div>
          <div onClick={() => changeSortBy('Kaina nuo mažiausios')}>
            Kaina nuo mažiausios
          </div>
          <div onClick={() => changeSortBy('Kaina nuo didžiausios')}>
            Kaina nuo didžiausios
          </div>
        </div>
      </div>
      {
        prod.map((item, index) => (
          <Product
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

export default Catalogue