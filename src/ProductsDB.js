// ProductsDB.js
// import exampleImage from '../public/example.jpg';

export const categories = [
  { name: 'Electronics', path: '/category/electronics', image: '/E-Commerce/images/categories/Electronics.jpg' },
  { name: 'Fashion', path: '/category/fashion', image: '/E-Commerce/images/categories/Fashion.jpg' },
  { name: 'Home & Garden', path: '/category/home-garden', image: '/E-Commerce/images/categories/Home & Garden.jpg' },
  { name: 'Accessories', path: '/category/accessories', image: '/E-Commerce/images/categories/Accessories.jpg' },
  { name: 'Health & Fitness', path: '/category/health-fitness', image: '/E-Commerce/images/categories/Health & Fitness.jpg' },
  { name: 'Outdoor & Sports', path: '/category/outdoor-sports', image: '/E-Commerce/images/categories/Outdoor & Sports.jpg' },
  { name: 'Books', path: '/category/books', image: '/E-Commerce/images/categories/Books.jpg' },
  { name: 'Beauty', path: '/category/beauty', image: '/E-Commerce/images/categories/Beauty.jpg' },
  { name: 'Games', path: '/category/games', image: '/E-Commerce/images/categories/Games.jpg' },
  { name: 'Hobbies', path: '/category/hobbies', image: '/E-Commerce/images/categories/Hobbies.jpg' },
  { name: 'Music', path: '/category/music', image: '/E-Commerce/images/categories/Music.jpg' },
];

export const products = [
  { id: '1', name: 'Smartphone', category: 'Electronics', price: 500, image: '/E-Commerce/images/products/Smartphone.jpg', description: 'Latest model with high-resolution camera' },
  { id: '2', name: 'Laptop', category: 'Electronics', price: 800, image: '/E-Commerce/images/products/Laptop.jpg', description: 'Powerful laptop with fast processor' },
  { id: '3', name: 'Headphones', category: 'Electronics', price: 100, image: '/E-Commerce/images/products/Headphones.jpg', description: 'Wireless headphones with great sound quality' },
  { id: '4', name: 'Jacket', category: 'Fashion', price: 60, image: '/E-Commerce/images/products/Jacket.jpg', description: 'Stylish winter jacket' },
  { id: '5', name: 'Jeans', category: 'Fashion', price: 40, image: '/E-Commerce/images/products/Jeans.jpg', description: 'Comfortable blue jeans' },
  { id: '6', name: 'Sneakers', category: 'Fashion', price: 50, image: '/E-Commerce/images/products/Sneakers.jpg', description: 'Sports sneakers for running' },
  { id: '7', name: 'Sofa', category: 'Home & Garden', price: 300, image: '/E-Commerce/images/products/Sofa.jpg', description: 'Comfortable three-seater sofa' },
  { id: '8', name: 'Coffee Table', category: 'Home & Garden', price: 150, image: '/E-Commerce/images/products/Coffee Table.jpg', description: 'Wooden coffee table' },
  { id: '9', name: 'Lawn Mower', category: 'Home & Garden', price: 250, image: '/E-Commerce/images/products/Lawn Mower.jpg', description: 'Efficient lawn mower for your garden' },
  { id: '10', name: 'Watch', category: 'Accessories', price: 250, image: '/E-Commerce/images/products/Watch.jpg', description: 'Elegant wristwatch' },
  { id: '11', name: 'Handbag', category: 'Accessories', price: 70, image: '/E-Commerce/images/products/Handbag.jpg', description: 'Leather handbag' },
  { id: '12', name: 'Sunglasses', category: 'Accessories', price: 90, image: '/E-Commerce/images/products/Sunglasses.jpg', description: 'Stylish UV-protected sunglasses' },
  { id: '13', name: 'Fitness Tracker', category: 'Health & Fitness', price: 120, image: '/E-Commerce/images/products/Fitness Tracker.jpg', description: 'Track your fitness activities' },
  { id: '14', name: 'Dumbbells', category: 'Health & Fitness', price: 100, image: '/E-Commerce/images/products/Dumbbells.jpg', description: 'Set of adjustable dumbbells' },
  { id: '15', name: 'Yoga Mat', category: 'Health & Fitness', price: 30, image: '/E-Commerce/images/products/Yoga Mat.jpg', description: 'Comfortable and non-slip yoga mat' },
  { id: '16', name: 'Bicycle', category: 'Outdoor & Sports', price: 300, image: '/E-Commerce/images/products/Bicycle.jpg', description: 'Mountain bike for outdoor trails' },
  { id: '17', name: 'Tent', category: 'Outdoor & Sports', price: 100, image: '/E-Commerce/images/products/Tent.jpg', description: '4-person waterproof tent' },
  { id: '18', name: 'Basketball', category: 'Outdoor & Sports', price: 25, image: '/E-Commerce/images/products/Basketball.jpg', description: 'Professional-grade basketball' },
  { id: '19', name: 'Novel', category: 'Books', price: 15, image: '/E-Commerce/images/products/Novel.jpg', description: 'Bestselling fiction novel' },
  { id: '20', name: 'Cookbook', category: 'Books', price: 20, image: '/E-Commerce/images/products/Cookbook.jpg', description: 'Recipes from renowned chefs' },
  { id: '21', name: 'Makeup Kit', category: 'Beauty', price: 75, image: '/E-Commerce/images/products/Makeup Kit.jpg', description: 'Complete makeup kit with various shades' },
  { id: '22', name: 'Perfume', category: 'Beauty', price: 55, image: '/E-Commerce/images/products/Perfume.jpg', description: 'Floral and fresh fragrance' },
  { id: '23', name: 'Shampoo', category: 'Beauty', price: 10, image: '/E-Commerce/images/products/Shampoo.jpg', description: 'Organic shampoo for all hair types' },
  { id: '24', name: 'Video Game', category: 'Games', price: 60, image: '/E-Commerce/images/products/Video Game.jpg', description: 'Latest action-adventure video game' },
  { id: '25', name: 'Board Game', category: 'Games', price: 40, image: '/E-Commerce/images/products/Board Game.jpg', description: 'Fun family board game' },
  { id: '26', name: 'Puzzle', category: 'Games', price: 15, image: '/E-Commerce/images/products/Puzzle.jpg', description: '1000-piece scenic puzzle' },
  { id: '27', name: 'Drone', category: 'Hobbies', price: 200, image: '/E-Commerce/images/products/Drone.jpg', description: 'Remote-controlled drone with camera' },
  { id: '28', name: 'Paint Set', category: 'Hobbies', price: 30, image: '/E-Commerce/images/products/Paint Set.jpg', description: 'Watercolor paint set with brushes' },
  { id: '29', name: 'Guitar', category: 'Music', price: 300, image: '/E-Commerce/images/products/Guitar.jpg', description: 'Acoustic guitar for beginners' },
  { id: '30', name: 'Piano Keyboard', category: 'Music', price: 250, image: '/E-Commerce/images/products/Piano Keyboard.jpg', description: 'Digital piano keyboard with various features' },
  { id: '31', name: 'Tablet', category: 'Electronics', price: 300, image: '/E-Commerce/images/products/Tablet.jpg', description: '10-inch tablet with HD display' },
  { id: '32', name: 'Desktop Computer', category: 'Electronics', price: 1000, image: '/E-Commerce/images/products/Desktop Computer.jpg', description: 'Powerful desktop with gaming capabilities' },
  { id: '33', name: 'Bluetooth Speaker', category: 'Electronics', price: 80, image: '/E-Commerce/images/products/Bluetooth Speaker.jpg', description: 'Portable Bluetooth speaker' },
  { id: '34', name: 'Digital Camera', category: 'Electronics', price: 400, image: '/E-Commerce/images/products/Digital Camera.jpg', description: '20-megapixel digital camera with zoom lens' },
  { id: '35', name: '4K TV', category: 'Electronics', price: 600, image: '/E-Commerce/images/products/4K TV.jpg', description: '55-inch 4K UHD Smart TV' },
  { id: '36', name: 'Game Console', category: 'Electronics', price: 400, image: '/E-Commerce/images/products/Game Console.jpg', description: 'Latest gaming console with 4K support' },
  { id: '37', name: 'Skirt', category: 'Fashion', price: 30, image: '/E-Commerce/images/products/Skirt.jpg', description: 'Elegant pencil skirt' },
  { id: '38', name: 'Dress', category: 'Fashion', price: 70, image: '/E-Commerce/images/products/Dress.jpg', description: 'Summer floral dress' },
  { id: '39', name: 'Scarf', category: 'Fashion', price: 20, image: '/E-Commerce/images/products/Scarf.jpg', description: 'Warm knitted scarf' },
  { id: '40', name: 'Boots', category: 'Fashion', price: 80, image: '/E-Commerce/images/products/Boots.jpg', description: 'Leather ankle boots' },
  { id: '41', name: 'Socks', category: 'Fashion', price: 10, image: '/E-Commerce/images/products/Socks.jpg', description: 'Pack of 5 cotton socks' }
];

export const deals = [
  { id: '1', name: 'Dishes', path: '/deal/1', image: '/E-Commerce/images/deals/Dishes.jpg', originalPrice: '32.99', offerPrice: '26.99' },
  { id: '2', name: 'Drinks', path: '/deal/2', image: '/E-Commerce/images/deals/Drinks.jpg', originalPrice: '21.99', offerPrice: '15.99' },
  { id: '3', name: 'Furniture', path: '/deal/3', image: '/E-Commerce/images/deals/Furniture.jpg', originalPrice: '129.99', offerPrice: '109.99' },
  { id: '4', name: 'Handbags', path: '/deal/4', image: '/E-Commerce/images/deals/Handbags.jpg', originalPrice: '359.99', offerPrice: '249.99' },
  { id: '5', name: 'Makeup', path: '/deal/5', image: '/E-Commerce/images/deals/Makeup.jpg', originalPrice: '59.99', offerPrice: '43.99' },
  { id: '6', name: 'Smartphone', path: '/deal/6', image: '/E-Commerce/images/deals/Smartphone.jpg', originalPrice: '458.99', offerPrice: '398.99' },
];

export const users = [
  { username: 'john', password: 'password123', email: 'john@example.com' },
];

export const wishlists = {
  // Keyed by username, each user's wishlist is an array of product IDs
  defaultEmail: [],
};

export const addToWishlist = (email, productId) => {
  wishlists[email] = wishlists[email] || [];
  if (!wishlists[email].includes(productId)) {
    wishlists[email].push(productId);
  }
};

export const removeFromWishlist = (email, productId) => {
  if (wishlists[email]) {
    wishlists[email] = wishlists[email].filter((id) => id !== productId);
  }
};

export const isProductInWishlist = (email, productId) => {
  return wishlists[email] && wishlists[email].includes(productId);
};