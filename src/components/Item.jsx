import React, { useContext } from "react";
import CartContext from "../context/Cart";

function Item({ name, price }) {
  const cart = useContext(CartContext);

  const handleAddToCart = () => {
    const newItem = { name, price };
    cart.setItems([...cart.items, newItem]);
  };

  return (
    <div className="item-card">
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Item;
