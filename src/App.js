import './App.css';
import api from './api.json';
import Header from './components/Header';
import Card from './components/Card';
import React, { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [qtdItem, setQtdItem] = useState(0);
  const [itemsValue, setItemsValue] = useState(0);

  function addItemOnCart(price, index) {
    let newCart = [...cart];
    let itemOnCart = newCart.find(item => item.index === index);

    if (itemOnCart) itemOnCart.Qtd += 1 
    else newCart.push({ index: index, price: price, Qtd: 1 })

    setCart(newCart);

    let newQtdItem = newCart.reduce((total, item) => total + item.Qtd, 0);
    let newItemValue = newCart.reduce((total, item) => total + item.price * item.Qtd, 0);

    setQtdItem(newQtdItem);
    setItemsValue(newItemValue);
  }

  return (
    <div className="App">
      <Header
        qtdItem={qtdItem}
        itemsValue={itemsValue}
      />
      <main>
        <div className="cards">
          <ul>
            {api.map((item) => (
              <Card 
                key={item.sku}
                item={item}
                addItemOnCart={addItemOnCart}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
