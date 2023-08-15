import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProductsSlider.css';
import {products} from '../../ProductsDB';

function FeaturedProductsSlider() {
  // Sample data for featured products
  const featuredProducts = [
    products[1],
    products[3],
    products[5],
    products[7],
    products[9],
    products[11],
    products[13],
    products[15],
    products[17],
    products[19]
    // ... more products
  ];

  return (
    <div className="featured-products-slider">
      <h2>Featured Products</h2>
      <div className="slider">
        {featuredProducts.map((product) => (
          <div key={product.id} className="product">
            <Link to={`/product/${product.id}`}>
              <div className='img-container'>
                <img src={product.image} alt={product.name} />
              </div>
            </Link>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProductsSlider;
