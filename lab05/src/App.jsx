
import './App.css'
import './style/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation';
import BookDetail from './pages/BookDetail';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { CartProvider } from './contexts/CartContext';
import { useState } from 'react';

function App() {

  var [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return(
    <CartProvider>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages/HomePage" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetail addToCart={addToCart} />} />
          <Route path="pages/cart" element={<Cart cart={cart} />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
