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
import Checkout from './pages/Checkout';

function App() {
  const items = [
    { label: 'Home', icon: 'pi pi-fw pi-home', command: () => { window.location = "/" } },
    { label: 'ShoppingCart', icon: 'pi pi-fw pi-shopping-cart', command: () => { window.location = "/shoppingcart" } }
  ];

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Menubar model={items} />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/bookdetails/:id" element={<BookDetails />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
