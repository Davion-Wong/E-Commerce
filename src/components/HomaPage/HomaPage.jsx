import React from 'react';
import './HomaPage.css'
import FeaturedProductsSlider from '../FeaturedProductsSlider/FeaturedProductsSlider';
import CategoriesSection from '../CategoriesSection/CategoriesSection';
import LatestProducts from '../LatestProducts/LatestProducts';
import SpecialOffers from '../SpecialOffers/SpecialOffers';
import SearchBar from '../SearchBar/SearchBar';

function HomePage() {
  return (
    <div className="home-page">
      <SearchBar />
      <FeaturedProductsSlider />
      <CategoriesSection />
      <LatestProducts />
      <SpecialOffers />
    </div>
  );
}

export default HomePage;
