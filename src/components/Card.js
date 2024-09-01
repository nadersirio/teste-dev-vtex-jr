function Card({ item, addItemOnCart }) {
  return (
    <li key={item.sku} className="card">
      <img src={item.image} alt="Imagem de Produto em Cartaz" />
      {item.priceSpecification.oldPrice && (
        <h3>TO: ${item.priceSpecification.oldPrice} FOR:</h3>
      )}
      <h2>${item.priceSpecification.price}</h2>
      <p>{item.name}</p>
      {item.priceSpecification.discount && (
        <p>Discount: {item.priceSpecification.discount}%</p>
      )}
      <div className="cartButton">
      <span aria-hidden="true" >🛒</span>
        <button onClick={() => 
          addItemOnCart(item.priceSpecification.price, item.sku)}>
          ADD TO CART
        </button>
      </div>
    </li>
  );
}

export default Card;