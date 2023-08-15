import React, {useContext} from 'react';
import { useCart, CartContext  } from '../CartProvider/CartProvider';
import './ShoppingCart.css';

function ShoppingCart() {  
  
  const { cart, addToCart, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <div className='cart-items'>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="product-preview" />
            <span>{item.name}</span>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, e.target.value)}
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
}

export default ShoppingCart;
