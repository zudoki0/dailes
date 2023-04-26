import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import { products } from '../assets/data';

const Header = () => {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    let prod = products;
    prod = prod.filter((item) => {
        let temp = item.title.toLowerCase();
        return temp.includes(text);
    })

    const handleTextChange = (event:any) => {
        event.preventDefault();
        const value = event.target.value;
        setText(value.toLowerCase());
    };

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
                            <div className='search-content'>{item.title}</div>
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
                    <div className='links'>
                        Krepšelis
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