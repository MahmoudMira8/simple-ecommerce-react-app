import React, { useContext } from "react";
import { Products } from "../../Products";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./cart-item";
import "./cart-item.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalPrice } = useContext(ShopContext);
  let totalPrice = getTotalPrice();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem key={product.id} product={product} />;
          }
        })}
      </div>
      {totalPrice > 0 ? 
      <div className="checkout">
        <p>
          Sub total: <b>{totalPrice}</b> SAR
        </p>
        <div className="checkout-btns">
          <button onClick={() => navigate("/")} className="continue-shopping-btn">Continue Shopping</button>
        </div>
      </div>
    : <div>Your Cart is empty</div>}
    </div>
  );
};

export default Cart;
