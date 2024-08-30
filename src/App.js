import './App.css';
import { card, AddItemOnCart } from './script';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <a href="/">Store</a>
          <p>Cart: ${''} Item(s) - ${''}</p>
        </h1>
      </header>
      <main>
        <div className='Cards'>
          <ul>
            {card.map((item) => (
            <li key={item.sku} className='Card'>
              <img src={item.image} alt="Imagem de Produto em Cartaz"/>
              <h2>${item.priceSpecification.price}</h2>
              <h3>Old Price: ${item.priceSpecification.oldPrice}</h3>
              <p>{item.name}</p>
              {item.priceSpecification.discount && (
                <p>Discount: {item.priceSpecification.discount}%</p>
              )}
              <div className="CartButton">
                <p>🛒</p>
                <button onClick={() => AddItemOnCart(item)}>ADD TO 
                CART</button>
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
