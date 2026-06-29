
const Cart = ({ cart, handleIncrementCart, handleDecrementCart, handleRemoveFromCart }) => {
  const subtotal = Number((cart.reduce((subtotal, product) => subtotal + (product.quantity * product.price), 0)).toFixed(2));
  const tax = Number((cart.reduce((subtotal, product) => subtotal + (product.quantity * product.price), 0) * 0.15).toFixed(2));
  const total = Number((subtotal + tax).toFixed(2));
  return (
    <div className="cart-content">
      <h1>Your Cart</h1>
      <div className="cart-details">
        <div className="cart-items">
            {cart.length > 0 ? (
              <ul>
                {cart.map((product) => {
                  return <li className="cart-item" key={product.id}>
                    <div className="cart-img-wrapper">
                      {/* <img src={product.image} alt={product.title} /> */}
                    </div>
                    <div className="cart-product-info-wrapper">
                      <p className="cart-category">{product.category}</p>
                      <p className="cart-title">{product.title}</p>
                    <div className="cart-buttons-wrapper">
                      <button 
                        className="cart-decrement-btn"
                        onClick={() => handleDecrementCart(product.id)}
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button 
                        className="cart-increment-btn"
                        onClick={() => handleIncrementCart(product.id)}
                      >
                        +
                      </button>
                    </div>
                    </div>
                    <div className="cart-price-btn-wrapper">
                      <p className="cart-price">R {product.price}</p>
                      <button 
                        type="button"
                        onClick={() => handleRemoveFromCart(product.id)}
                        className="cart-remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                })}
              </ul>
            ) : (
              <ul className="cart-none-wrapper">
                <li>There are no products in your cart yet</li>
              </ul>
            )}
            
        </div>

        {cart.length > 0 && (
          <>
          <div className="cart-summary">
            <h2>Order summary</h2>
              <ul>
                <li>Subtotal <span>R {subtotal}</span></li>
                <li>Shipping <span>Free</span></li>
                <li>Tax <span>R {tax}</span></li>
                <li>Total <span>R {total}</span></li>
              </ul>

            <div className="cart-checkout-btn-wrapper">
              <button type="button">Proceed to checkout</button>
            </div>
          </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart;