import { useState } from 'react';
import dummyProducts from '../products.json';

const Shop = () => {
    const [products, setProducts] = useState(() => {
        return dummyProducts.map((product) => {
            return { ...product, quantity: 0 }
        });
    });

    const handleQuanityChange = (id, newQuantity) => {

        if (!newQuantity || newQuantity === "") {
            newQuantity = 0;
            return;
        }

        setProducts((prevProducts) => {
            return prevProducts.map((p) => {
                if (p.id === id) {
                    return { ...p, quantity: parseInt(newQuantity) }
                }
                return p;
            });
        });
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

     const handleDecrement = (id) => {
        setProducts((prevProducts) => {
            return prevProducts.map((p) => {
                if (p.id === id) {
                    if (p.quantity === 0) {
                        return p;
                    }
                    return { ...p, quantity: p.quantity - 1 }
                }
                return p;
            });
        });
    }

    return (
        <div className="shop-content">
            <h1>The Collection</h1>
            <ul className="product-wrapper">
                {products.map((product) => {
                    return <li key={product.id}>
                        {/* <div className="product-img">
                            <img style={{ width: 200, height: 200 }} src={product.image} alt={product.title} />
                        </div> */}
                        <div className="product-details">
                            <p>{product.category}</p>
                            <p>{product.title}</p>
                            <div className="price-rating">
                                <p>R{product.price}</p>
                                <p>{product.rating.rate}</p>
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <button 
                                type="button"
                                onClick={() => handleDecrement(product.id)}
                            >-</button>
                            <input 
                                type="number"
                                min={0} 
                                value={products.find((p) => p.id === product.id).quantity}
                                onChange={(e) => handleQuanityChange(product.id, e.target.value)}
                                style={{ textAlign: 'center' }}
                             />
                            <button 
                                type="button"
                                onClick={() => handleIncrement(product.id)}
                            >
                                +
                            </button>
                        </div>
                        <div className="button-wrapper">
                            <button type="button">Add to Cart</button>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Shop;