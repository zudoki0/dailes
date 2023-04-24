import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
  return (
    <div className = "header">
        <div className="header-home">
            <Link to="/">
                <div className='links'>
                Home
                </div>
            </Link>
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