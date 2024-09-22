import React, { useContext } from 'react'; 
import { CartContext } from '../components/CartContent';
import { useNavigate } from 'react-router-dom';
import 'primeflex/primeflex.css'; 

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate(); 

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const formattedPrice = totalPrice.toFixed(2); 

  const clearCart = () => {
    cartItems.forEach((item) => removeFromCart(item.id));
  };


  return (
    <div className="shopping-cart p-m-5">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="p-grid p-align-center p-justify-center">
          <ul className="p-col-12 p-md-8 list-none">
            {cartItems.map((book) => (
              <li key={book.id} className="p-grid p-align-center p-mb-3 p-shadow-2 p-p-2">
                <img src={book.imgUrl || 'https://via.placeholder.com/50'} alt={book.title} width="50" className="p-col-2" />
                <div className="p-col-8">
                  <h3>{book.title}</h3>
                  <p>{book.price} TL x {book.quantity} = {book.price * book.quantity} TL</p>
                </div>
                <button className='p-button p-component p-col-2' onClick={() => removeFromCart(book.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h2 className="p-text-center p-mt-4">
            Total: {formattedPrice} TL
          </h2>

         
          <button className="p-button p-component p-mt-4" onClick={() => navigate('/checkout')}>
            Payment
          </button>

          <button className="p-button p-component p-mt-4 p-button-danger" onClick={() => clearCart()}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
