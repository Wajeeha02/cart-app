import React, { useContext } from "react";
import CartContext from "../context/Cart";

function Cart() {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h1>Cart</h1>
      <ul>
        {cart.items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h5>Total Bill: ${total}</h5>
    </div>
  );
}

export default Cart;
