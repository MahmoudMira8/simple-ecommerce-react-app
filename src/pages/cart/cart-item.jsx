import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart-item.css";

const CartItem = (props) => {
  const { id, name, price, img } = props.product;
  const {cartItems, addToCart, removeFromCart, updateCountItmes, getTotalPrice} = useContext(ShopContext);


  return (
    <div className="cartItem">
      <div className="product">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="details">
          <div>
            <p>
              <b>{name}</b>
            </p>
            <p>
              price: <b>{price}</b> SAR
            </p>
            <div className="count-handeler">
              <button onClick={() => removeFromCart(id)}>-</button>
              <input type="text" value={cartItems[id]} onChange={(e) => updateCountItmes(Number(e.target.value), id)}/>
              <button onClick={() => addToCart(id)}>+</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
