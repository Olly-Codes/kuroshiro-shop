
const Cart = ({ cart, handleIncrementCart, handleDecrementCart }) => {
  return (
    <div className="cart-content">
      <h1>Your Cart</h1>
      <div className="cart-content">
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
                <button>Remove</button>
              </div>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Cart;