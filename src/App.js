import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Home from './pages/Home';
import BookDetails from './components/BookDetails';
import ShoppingCart from './pages/ShoppingCart';
import { CartProvider } from './components/CartContent';

function App() {
  const items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', command: () => { window.location = "/" } },
    { label: 'ShoppingCart', icon: 'pi pi-fw pi-shopping-cart', command: () => { window.location = "/shoppingcart" } }
  ];

  const initialBooks = [
    { 
      id: 1, 
      title: 'The Great Gatsby', 
      author: 'F. Scott Fitzgerald', 
      price: 253.92, 
      rating: 5, 
      imgUrl: 'https://example.com/greatgatsby.jpg'
    },
    { 
      id: 2, 
      title: '1984', 
      author: 'George Orwell', 
      price: 287.70, 
      rating: 4, 
      imgUrl: 'https://example.com/1984.jpg'
    },
    { 
      id: 3, 
      title: 'To Kill a Mockingbird', 
      author: 'Harper Lee', 
      price: 565.43, 
      rating: 4, 
      imgUrl: 'https://example.com/mockingbird.jpg'
    },
  ];

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Menubar model={items} />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home books={initialBooks} />} />
              <Route path="/bookdetails/:id" element={<BookDetails books={initialBooks} />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
