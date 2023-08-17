import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../ProductsDB';
import './CategoryPage.css';

function CategoryPage() {
  const { categoryName } = useParams(); // Get category name from URL
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    const sortedProducts = sortProducts(filteredProducts, sortValue);
    setFilteredProducts(sortedProducts);
  };

  const sortProducts = (products, criteria) => {
    switch (criteria) {
      case 'price-asc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'name-asc':
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return products;
    }
  };

  useEffect(() => {
    const categoryProducts = products.filter(product => product.category.toLowerCase() === categoryName.toLowerCase());
    setFilteredProducts(categoryProducts);
  }, [categoryName]);

  return (
    <div className="category-page">
      <h2>{categoryName}</h2>
      <div className="filters">
        <select onChange={handleSortChange}>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
        </select>
      </div>
      <ul className="product-list">
        {filteredProducts.map(product => (          
          <Link to={`/product/${product.id}`} className="product-links">
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CategoryPage;
