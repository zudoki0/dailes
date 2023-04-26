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
  
  const [minValue, setMinValue] = React.useState(0);
  const [maxValue, setMaxValue] = React.useState(1000);

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

  if (filter !== '') {
    prod = prod.filter((item) => item.category === filter);
  }
  else {
    prod = products;
    prod = prod.filter((item) => item.price >= minValue && item.price <= maxValue);
  }

  const changeSortBy = (item:string) => {
    setSortBy(item);
  }

  const changeFilter = (item:string) => {
    setFilter(item);
  }

  const handleMinChange = (event:any) => {
    event.preventDefault();
    const value = parseFloat(event.target.value);
    const newMinVal = Math.min(value, maxValue - 10);
    setMinValue(newMinVal);
  };

  const handleMaxChange = (event:any) => {
    event.preventDefault();
    const value = parseFloat(event.target.value);
    const newMaxVal = Math.max(value, minValue + 10);
    setMaxValue(newMaxVal);
  };

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
      <div className='price-container'>Kaina nuo {minValue} € iki {maxValue} €</div>
      <div className='item-container'>
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
      <div className='range-slider'>
        <div className='slider-min'>{minValue}</div>
        <div className='slider-max'>{maxValue}</div>

        <input
          type="range"
          value={minValue}
          min={0}
          max={1000}
          step={10}
          onChange={handleMinChange}
        />
        <input
          type="range"
          value={maxValue}
          min={0}
          max={1000}
          step={10}
          onChange={handleMaxChange}
        />
      </div>
      <div className='prod-container'>
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
    </div>
    
  )
}

export default Catalogue