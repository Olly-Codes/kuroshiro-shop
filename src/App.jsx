import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router'
import Home from './routes/Home'
import Shop from './routes/Shop'
import About from './routes/About'
import Cart from './routes/Cart'

function App() {

  return (
    <div className="app-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
