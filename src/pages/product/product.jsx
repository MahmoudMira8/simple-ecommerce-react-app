import React, { useContext } from "react";
import "../shop/shop.css";
import { ShopContext } from "../../context/shop-context";
const Product = (props) => {
  const { id, name, price, img } = props.product;

  const { cartItems, addToCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
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
        </div>
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
