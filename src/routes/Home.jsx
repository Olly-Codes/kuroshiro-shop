import dummyProducts from '../products.json';

const Home = () => {
  const top3 = dummyProducts.slice(0, 3);
  return (
    <div className="home-content">
      <section className="hero-section">
        <div className="hero-text-wrapper">
          <h1>The <br /> Collection.</h1>
          <p>View Pieces</p>
        </div>

        <div className="hero-img-wrapper"></div>
      </section>

      <div className="divider">
        <p>Free Delivery on all orders</p>
      </div>
      
      {top3.length > 0 && (
        <section className="showcase-section">
          <ul className="showcase-wrapper">
            {top3.map((product) => {
              return <li key={product.id}>
                <div className="showcase-img-wrapper"></div>
                <p>{product.category}</p>
                <p>{product.title}</p>
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