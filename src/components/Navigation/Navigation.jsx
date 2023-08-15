import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/passwordrecovery">Password recovery</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
