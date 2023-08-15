import React from 'react';
import { Link } from 'react-router-dom';
import './SpecialOffers.css';
import { deals } from '../../ProductsDB'

function SpecialOffers() {

  return (
    <section className="special-offers-section">
      <h2>Special Offers</h2>
      <div className="offers-grid">
        {deals.map((deal, index) => (
          <div key={index} className="offer-item">
            <Link to={deal.path}>
              <div className='img-container'>
                <img src={deal.image} alt={deal.name} />
              </div>
              <h3>{deal.name}</h3>
              <p className="original-price">${deal.originalPrice}</p>
              <p className="offer-price">${deal.offerPrice}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialOffers;
