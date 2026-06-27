import { useState } from 'react';
import dummyProducts from '../products.json';

const Shop = () => {
    const [products, setProducts] = useState(dummyProducts);
    const [inputValue, setInputValue] = useState(0);

    return (
        <div className="shop-content">
            <h1>The Collection</h1>
            <ul className="product-wrapper">
                {dummyProducts.map((product) => {
                    return <li key={product.id}>
                        <div className="product-img">
                            <img style={{ width: 200, height: 200 }} src={product.image} alt={product.title} />
                        </div>
                        <div className="product-details">
                            <p>{product.category}</p>
                            <p>{product.title}</p>
                            <div className="price-rating">
                                <p>R{product.price}</p>
                                <p>{product.rating.rate}</p>
                            </div>
                        </div>
                        <div className="input-wrapper">
                            <button type="button">-</button>
                            <input 
                                type="text" 
                                inputMode="numeric"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                style={{ textAlign: 'center' }}
                             />
                            <button type="button">+</button>
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