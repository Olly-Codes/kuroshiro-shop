import { Link, NavLink } from "react-router"

const Navbar = ({ cartCount }) => {
  return (
    <header className="header-content">
        <nav className="nav">
            <div className="nav-logo-wrapper">
                <Link className="nav-logo" to="/">KuroShiro</Link>
            </div>

            <div className="nav-link-wrapper">
                <ul>
                    <li>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/shop">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                </ul>
            </div>

            <div className="nav-cart-wrapper">
                <ul>
                    <li>
                        <NavLink className="nav-cart-link" to="/cart">Cart <span className="cart-count">{cartCount}</span></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar;