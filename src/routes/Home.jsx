import { Link } from 'react-router';
import dummyProducts from '../products.json';
import heroImg from "../assets/luffy.jpg"

const Home = () => {
  const top3 = dummyProducts.slice(0, 3);
  return (
    <div className="home-content">
      <section className="hero-section">
        <div className="hero-text-wrapper">
          <h1>The <br /> Collection.</h1>
          <Link className="hero-link" to="/shop">View Pieces</Link>
        </div>

        <div className="hero-img-wrapper">
          <img src={heroImg} alt="Luffy in a suit" />
        </div>
      </section>

      <div className="divider">
        <p>Free Delivery on all orders &bull; Season 45 Live Now</p>
      </div>
      
      {top3.length > 0 && (
        <section className="showcase-section">
          <ul className="showcase-wrapper">
            {top3.map((product) => {
              return <li key={product.id}>
                <div className="showcase-img-wrapper"></div>
                <div className="showcase-details-wrapper">
                  <p className="showcase-category">{product.category}</p>
                  <p className="showcase-title">{product.title}</p>
                </div>
              </li>
            })}
          </ul>
      </section>
      )}

      <section className="info-section">
        <div className="info-left">
          <p>Single run.</p>
          <p>No reprints.</p>
        </div>

        <div className="info-right">
          <p>Pieces manufactured by KuroShiro come in a single numbered run. Once it's gone, it's gone. That's what makes the purchase worth it</p>
        </div>
      </section>
    
    </div>
  )
}

export default Home;