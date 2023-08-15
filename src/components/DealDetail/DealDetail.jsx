import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./DealDetail.css"
import { CartContext } from '../CartProvider/CartProvider';
import { deals } from '../../ProductsDB';
import './DealDetail.css';


function DealDetail() {
  const { dealId } = useParams(); // Get product ID from URL
  const [deal, setDeal] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchedProduct = deals.find(p => p.id === dealId);
    setDeal(fetchedProduct);
  }, [dealId]);

  if (!deal) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <Link to={`${deal.path}`}>
          <img src={deal.image} alt={deal.name} />
      </Link>
      <h2>{deal.name}</h2>
      <p><span className='original-price'>${deal.originalPrice}</span> - <span className='offer-price'>${deal.offerPrice}</span></p>
      <button onClick={() => addToCart(deal)}>Add to Cart</button>
    </div>
  );
}
  
export default DealDetail;