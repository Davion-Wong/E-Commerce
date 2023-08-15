import React from 'react';
import { Link } from 'react-router-dom';
import './LatestProducts.css';
import { products } from '../../ProductsDB';

function LatestProducts() {
  const latest = products.slice(20, 36);

  return (
    <section className="latest-products-section">
      <h2>Latest Products</h2>
      <div className="products-grid">
        {latest.map((product, index) => (
          <div key={index} className="product-item">
            <Link to={`/product/${product.id}`}>
              <div className='img-container'>
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestProducts;