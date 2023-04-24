import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Catalogue from '../pages/Catalogue'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const Rounting = () => {
  return (
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/category" element={<Catalogue/>}></Route>
          <Route path="/category/:slug" element={<Catalogue/>}></Route>
          <Route path="/catalogue/:slug" element={<Product/>}></Route>
          <Route path="/catalogue" element={<Catalogue/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
  )
}

export default Rounting