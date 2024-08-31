import './App.css';
import api from './api.json';
import React, { useState } from 'react';

function App() {
  const [Cart, setCart] = useState([]);
  const [QtdItem, setQtdItem] = useState(0);
  const [ItemsValue, setItemsValue] = useState(0);

  function AddItemOnCart(price, index) {
    let newCart = [...Cart];
    let ItemOnCart = newCart.find(item => item.index === index);

    if (ItemOnCart) {
      ItemOnCart.Qtd += 1;
    } else {
      newCart.push({ index: index, price: price, Qtd: 1 });
    }

    setCart(newCart);

    let newQtdItem = newCart.reduce((total, item) => total + item.Qtd, 0);
    let newItemValue = newCart.reduce((total, item) => total + item.price * item.Qtd, 0);

    setQtdItem(newQtdItem);
    setItemsValue(newItemValue);
  }

  return (
    <div className="App">
      <header>
        <h1>
          <a href="/">STORE</a>
          <div className="CartButton">
            <p>🛒</p>
            <button>Cart: {QtdItem} Item(s) - ${ItemsValue.toFixed(2)}</button>
          </div>
        </h1>
      </header>
      <main>
        <div className="Cards">
          <ul>
            {api.map((item) => (
              <li key={item.sku} className="Card">
                <img src={item.image} alt="Imagem de Produto em Cartaz" />
                {item.priceSpecification.oldPrice && (
                  <h3>TO: ${item.priceSpecification.oldPrice} FOR:</h3>
                )}
                <h2>${item.priceSpecification.price}</h2>
                <p>{item.name}</p>
                {item.priceSpecification.discount && (
                  <p>Discount: {item.priceSpecification.discount}%</p>
                )}
                <div className="CartButton">
                  <p>🛒</p>
                  <button
                    onClick={() => AddItemOnCart(item.priceSpecification.price, item.sku)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
