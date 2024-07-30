// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ContactForm from './components/ContactForm';
import AddProductForm from './components/AddProductForm';
import ScrollToSection from './components/ScrollToSection';
import './styles.css';

const App = () => {
    const [products, setProducts] = useState([
        {
          id: 1,
          title: 'Artisan Coffee Beans',
          description: 'Premium blend of hand-roasted coffee beans sourced from sustainable farms.',
          image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNzgyNzZ8MHwxfGFsbHwxfHx8fHx8fHwxNjEyNzUzNTU0&ixlib=rb-1.2.1&q=80&w=400',
          price: 24.99,
        },
        {
            id: 2,
            title: 'Organic Espresso Beans',
            description: 'Rich and smooth organic espresso beans for the perfect shot.',
            image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNzgyNzZ8MHwxfGFsbHwxfHx8fHx8fHwxNjEyNzUzNTU0&ixlib=rb-1.2.1&q=80&w=400',
            price: 29.99,
        },
        {
            id: 3,
            title: 'Decaf Coffee Beans',
            description: 'Enjoy the taste of coffee without the caffeine. Perfect for evenings.',
            image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwzNzgyNzZ8MHwxfGFsbHwxfHx8fHx8fHwxNjEyNzUzNTU0&ixlib=rb-1.2.1&q=80&w=400',
            price: 19.99,
        },
    ]);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    return (
      <Router>
          <div className="App">
              <header className="hero">
                  <div className="hero-content">
                      <h1>Artisan Coffee Beans</h1>
                      <p>Experience the rich, smooth flavor of our hand-roasted coffee beans.</p>
                      <div className="header-buttons">
                          <Link to="/shop#shop" className="btn">Shop Now</Link>
                          <Link to="/add-product" className="btn">Add Product</Link>
                          <Link to="/contact" className="btn">Contact Us</Link>
                      </div>
                  </div>
              </header>
              <ScrollToSection />
              <Routes>
                  <Route path="/shop" element={
                      <section id="shop" className="shop-section">
                          <ProductList 
                              products={products}
                              selectProduct={setSelectedProduct}
                          />
                      </section>
                  } />
                  <Route path="/add-product" element={
                      <section id="add-product" className="add-product-section">
                          <AddProductForm addProduct={addProduct} />
                      </section>
                  } />
                  <Route path="/contact" element={
                      <section id="contact" className="contact-section">
                          <ContactForm />
                      </section>
                  } />
                  <Route path="/" element={
                      <section className="home-section">
                          <h2>Welcome to Artisan Coffee</h2>
                          <p>Explore our range of premium coffee products.</p>
                      </section>
                  } />
              </Routes>
              <footer>
                  <p>&copy; 2024 Artisan Coffee. All rights reserved.</p>
              </footer>
          </div>
      </Router>
  );
};

export default App;
