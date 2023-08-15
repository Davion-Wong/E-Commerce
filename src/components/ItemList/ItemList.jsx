import React, { useState, useEffect } from 'react';
import { products } from '../../ProductsDB';
import './ItemList.css';
import { Link } from 'react-router-dom';


function ItemList({ searchTerm }) {
  const items = products;
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (searchTerm) {
      const results = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(results);
    } else {
      setFilteredItems(items);
    }
  }, [searchTerm, items]);

  return (
    <div className='search-result'>
        <div className='search-items'>
        {filteredItems.map((item) => (
            <div key={item.id} className="search-item">
            <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} className="product-preview" />
            </Link>
            <span>{item.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${item.price}</span>
            </div>
        ))}
        </div>
    </div>
  );

}

export default ItemList;
