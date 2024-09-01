function Header({ qtdItem, itemsValue }) {
  return(
    <header>
    <h1>
      <a href="/">STORE</a>
      <div className="cartButton">
        <span aria-hidden="true" >🛒</span>
        <button>Cart: {qtdItem} Item(s) - ${itemsValue.toFixed(2)}</button>
      </div>
    </h1>
    </header>
  );
}
export default Header