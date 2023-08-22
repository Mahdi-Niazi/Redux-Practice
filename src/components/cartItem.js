const CartItem = ({ id, title, price, amount }) => {
  return (
    <article className="cart-item">
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <p className="amount">{amount}</p>
      </div>
    </article>
  );
};

export default CartItem;
