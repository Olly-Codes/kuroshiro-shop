import { Link } from "react-router"

const Navbar = () => {
  return (
    <div className="navbar-content">
        <nav className="nav">
            <div className="nav-logo-wrapper">
                <Link to="/">KuroShiro</Link>
            </div>

            <div className="nav-link-wrapper">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>

            <div className="nav-cart-wrapper">
                <ul>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;