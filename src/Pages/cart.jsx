// Cart.jsx
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container" style={{ color: 'white' }}>
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p style={{ color: 'white' }}>Price: {item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
