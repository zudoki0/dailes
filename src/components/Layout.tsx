import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Routing from '../routes/Rounting'
import { BrowserRouter } from 'react-router-dom'

const Layout = () => {
  return (
    <BrowserRouter>
        <div>
        <div className="container">
            <Header/>
            <div className="main">
                <Routing/>
            </div>
            <Footer/>
        </div>
        </div>
    </BrowserRouter>
  )
}

export default Layout