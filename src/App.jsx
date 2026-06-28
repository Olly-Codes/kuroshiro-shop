import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router'
import Home from './routes/Home'
import Shop from './routes/Shop'
import About from './routes/About'
import Cart from './routes/Cart'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (id, image, category, title, price, quantity) => {
    if (!quantity || quantity === 0) {
      return;
    }
    const cartProduct = { id, image, category, title, price, quantity };
    const inCart = cart.find((product) => product.id === id);
    
    if (inCart) {
      setCart((prevCart) => {
        return prevCart.map((p) => {
          if (p.id === id) {
            return { ...p, quantity: p.quantity + quantity}
          }
          return p;
        });
      });
    } else {
      setCart((prevCart) => {
        return [...prevCart, cartProduct]
      });
    }
  }

  const handleIncrementCart = (id) => {
    setCart((prevCart) => {
      return prevCart.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: p.quantity + 1 }
        }
        return p;
      });
    });
  }

  const handleDecrementCart = (id) => {
    setCart((prevCart) => {
      return prevCart.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: p.quantity - 1 }
        }
        return p;
      });
    });
  }

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => {
      return prevCart.filter((p) => p.id !== id)
    })
  }

  const handleIncrement = (id) => {
        setProducts((prevProducts) => {
            return prevProducts.map((p) => {
                if (p.id === id) {
                    return { ...p, quantity: p.quantity + 1 }
                }
                return p;
            });
        });
    }

  return (
    <div className="app-content">
      <Navbar cartCount={new Set(cart.map((cartProduct) => cartProduct.id)).size}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop handleAddToCart={handleAddToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" 
          element={
            <Cart cart={cart}
                  handleIncrementCart={handleIncrementCart} 
                  handleDecrementCart={handleDecrementCart}
                  handleRemoveFromCart={handleRemoveFromCart}
            />
          } 
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
