import React from 'react';
import Cart from './components/Cart';
import Item from './components/Item';

function App() {
  return (
    <div>
      <h1>Cart App Using Context API</h1>
      <Item name="Macbook" price={100000} />
      <Item name="Iphone-15" price={400000} />
      <Item name="Samsung S24" price={500000} />
      <Item name="HP" price={150000} />
      <Cart />
    </div>
  );
}

export default App;
