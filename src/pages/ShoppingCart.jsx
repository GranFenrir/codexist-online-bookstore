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
        <ul>
          {cartItems.map((book) => (
            <li key={book.id}>
              <img src={book.imgUrl} alt={book.title} width="50" />
              <div>
                <h3>{book.title}</h3>
                <p>{book.price} TL</p>
                <button onClick={() => removeFromCart(book.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
