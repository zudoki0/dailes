import React from 'react'
import {products} from '../assets/data'
import {Product} from '../components/ProductData'
import '../styles/catalogue.css'
import { categories } from '../assets/categories'
import { Link } from 'react-router-dom'

const Catalogue = () => {
  return (
    <div className='catalogue-body'>
      <div className='catalogue-container'>
        {
          categories.map((item) => (
            <Link to={item.categorySlug}>
              <label className='category'>
              <div>{item.display}</div>
              </label>
            </Link>
          ))
        }
      </div>
      <div className="list">
      {
        products.map((item, index) => (
          <Product
            key = {index}
            image= {item.image}
            title={item.title}
            category={item.category}
            price={item.price}
            slur={item.slur}
            description={item.description}
            cartQuantity={item.cartQuantity}
          />
        ))
      }
      </div>
    </div>
    
  )
}

export default Catalogue