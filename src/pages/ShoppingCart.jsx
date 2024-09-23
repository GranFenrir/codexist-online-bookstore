import React, { useContext } from 'react';
import { CartContext } from '../components/CartContent';
import { useNavigate } from 'react-router-dom';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const formattedPrice = totalPrice.toFixed(2);

  return (
    <div className="shopping-cart p-m-6 p-shadow-5 ">
      <h1 className="p-text-center p-text-4xl p-mb-6 font-bold text-gray-800">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="p-text-center p-text-xl text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="p-grid">
          <div className="p-col-12 p-md-8">
            <ul className="list-none p-p-0">
              {cartItems.map((book) => (
                <li key={book.id} className="p-grid p-align-center p-mb-3 p-shadow-2 p-p-3">
                  <img
                    src={book.imgUrl || 'https://via.placeholder.com/150'}
                    alt={book.title}
                    width="100"
                    className="p-col-12 p-md-3"
                  />
                  <div className="p-col-12 p-md-6">
                    <h3 className="p-mb-1 text-gray-800">{book.title}</h3>
                    <p className="p-text-secondary">
                      {book.price} TL x {book.quantity} = {(book.price * book.quantity).toFixed(2)} TL
                    </p>
                  </div>
                  <button
                    className="p-button p-button-danger p-col-12 p-md-3 p-button-outlined mb-5"
                    onClick={() => removeFromCart(book.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-col-12 p-md-4">
            <div className="">
              <hr />
              <h2 className="p-text-2xl p-mb-3 font-semibold text-gray-700">Order Summary</h2>
              <div className="p-grid p-align-center p-justify-between p-my-2">
                <span className="p-text-xl p-text-bold text-gray-700">Total:</span>
                <span className="p-text-xl p-text-bold text-gray-800">{formattedPrice} TL</span>
              </div>
              <button
                className="p-button p-button-success p-mt-4 p-button-raised"
                onClick={() => navigate('/checkout')}
                style={{ width: '250px', margin: '0 auto' }}
              >
                Proceed to Checkout
              </button>
              <button
                className="p-button p-button-danger p-mt-2 p-button-raised"
                onClick={() => clearCart()}
                style={{ width: '250px', margin: '0 auto' }}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;