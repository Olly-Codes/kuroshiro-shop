
const Cart = ({ cart, handleIncrementCart, handleDecrementCart, handleRemoveFromCart }) => {
  const subtotal = Number((cart.reduce((subtotal, product) => subtotal + (product.quantity * product.price), 0)).toFixed(2));
  const tax = Number((cart.reduce((subtotal, product) => subtotal + (product.quantity * product.price), 0) * 0.15).toFixed(2));
  const total = Number((subtotal + tax).toFixed(2));
  return (
    <div className="cart-content">
      <h1>Your Cart</h1>
      <div className="cart-details">
        <div className="cart-items">
          <ul>
            {cart.map((product) => {
              return <li key={product.id}>
                {/* <div className="cart-img-wrapper">
                  <img src={product.image} alt={product.title} />
                </div> */}
                <div className="cart-product-info-wrapper">
                  <p>{product.category}</p>
                  <p>{product.title}</p>
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
                  <p>{product.price}</p>
                  <button 
                    type="button"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            })}
          </ul>
        </div>

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
      </div>
    </div>
  )
}

export default Cart;