import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import { products } from '../assets/data';
import { useSelector } from 'react-redux';
import { store } from '../redux/store';

const Header = () => {
    useSelector((state:any) => state.cart)
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const amount = store.getState().cart.totalAmount;
    let prod = products;
    prod = prod.filter((item) => {
        let temp = item.title.toLowerCase();
        return temp.includes(text);
    })

    const handleTextChange = (event:any) => {
        event.preventDefault();
        const value = event.target.value;
        setText(value.toLowerCase());
        setIsTyping(true);
    };

    useEffect(() => {

        const closeDropdown = (event:any) => {
            setIsTyping(false);
        }
        document.body.addEventListener('click', closeDropdown);

        return () => document.body.removeEventListener('click', closeDropdown);
    }, [])

  return (
    <div className = "header">
        <div className="header-home">
            <Link to="/">
                <div className='links'>
                Pradžia
                </div>
            </Link>
            <div className='search-bar-container'>
                <input className='search-bar' type="text" placeholder="Ieškoti.." onChange={handleTextChange}/>
                {
                    isTyping ? <div className='search-content-container'>
                    {
                        prod.map((item, index) => (
                            <div className='search-content'>
                                <Link to={`/catalogue/${item.slur}`}>
                                <div className='search-content'>{item.title}</div>
                                </Link>
                            </div>
                        ))
                    }
    
                    </div> : ''
                }
            </div>
            <div className='header-links'>
                <Link to='/catalogue'>
                    <div className='links'>
                        Katalogas
                    </div>
                </Link>

                <Link to='/cart'>
                    <div className='cart-image'>
                        {
                        amount === 0 ? '' : <div className='badge'>{amount}</div>
                        }
                        <img src='https://cdn-icons-png.flaticon.com/512/34/34627.png' alt='Krepšelis'/>
                    </div>
                </Link>
            </div>
        </div>
        <div>
                <div className="contact">parduotuve@muse.lt</div>
                <div className="contact">+37060600600</div>
            </div>
    </div>
  )
}

export default Header