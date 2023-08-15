import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ItemList from '../ItemList/ItemList';
import { products } from '../../ProductsDB';
import { useLocation, useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('q');

  // Function to get the search query from URL
  const getSearchTermFromQuery = () => {
    return new URLSearchParams(location.search).get('q') || '';
  };

  // Effect to handle changes in search query
  useEffect(() => {
    const searchTerm = getSearchTermFromQuery();

    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);

  }, [location.search]); // Depend on location.search so that it re-runs when query changes

  return (
    <div>
      <SearchBar />
      <ItemList searchTerm={searchTerm} />
    </div>
  );
}

export default SearchPage;
