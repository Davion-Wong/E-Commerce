import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PasswordRecovery from './components/PasswordRecovery/PasswordRecovery';
import HomePage from './components/HomaPage/HomaPage';
import { CartProvider } from './components/CartProvider/CartProvider';
import CategoryPage from './components/CategoryPage/CategoryPage';
import DealDetail from './components/DealDetail/DealDetail';
import { UserProvider } from './UserProvider';
import SearchPage from './components/SearchPage/SearchPage';

function App() {

  const cartItems = [
    {
      name: "Milk",
      image: null,
      quantity: 1,
      price: 5
    }
  ]
  
  return (
    <UserProvider>
      <CartProvider>
        <Router basename="/E-Commerce">    
            <Header />
            <Navigation />
            <Routes>          
              <Route path="/" element={<HomePage/>} />
              <Route path="/cart" element={<ShoppingCart cartItems={cartItems} />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/passwordrecovery" element={<PasswordRecovery />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/deal/:dealId" element={<DealDetail />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
            <Footer />
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
