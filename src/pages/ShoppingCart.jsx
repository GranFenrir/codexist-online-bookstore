import React, { useContext } from 'react';
import { CartContext } from '../components/CartContent';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((book) => (
              <li key={book.id}>
                <img src={book.imgUrl || 'https://via.placeholder.com/50'} alt={book.title} width="50" />
                <div>
                  <h3>{book.title}</h3>
                  <p>{book.price} TL x {book.quantity} = {book.price * book.quantity} TL</p>
                  <button className='p-button p-component' onClick={() => removeFromCart(book.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)} TL</h2>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
