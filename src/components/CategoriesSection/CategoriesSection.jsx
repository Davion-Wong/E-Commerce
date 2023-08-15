import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesSection.css';
import { categories } from '../../ProductsDB';

function CategoriesSection() {  

  return (
    <section className="categories-section">
      <h2>Explore Categories</h2>
      <ul className="categories-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <Link to={category.path}>
              <div className='img-container'>
                <img src={category.image} alt={category.name} />
              </div>
              <h3>{category.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CategoriesSection;
