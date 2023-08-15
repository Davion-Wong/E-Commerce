import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./ProductDetail.css";
import { CartContext } from '../CartProvider/CartProvider';
import { UserContext } from '../../UserProvider';
import { products, addToWishlist } from '../../ProductsDB';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const email = user ? user.email : 'defaultEmail';

  useEffect(() => {
    const fetchedProduct = products.find(p => p.id === productId);
    setProduct(fetchedProduct);
  }, [productId]);

  const handleWishlistClick = () => {
    addToWishlist(email, productId);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
      </Link>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      {/* <button onClick={handleWishlistClick}>Add to Wishlist</button> */}
    </div>
  );
}

export default ProductDetail;
