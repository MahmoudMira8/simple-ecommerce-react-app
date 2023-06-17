import React, { createContext, useState } from "react";
import { Products } from "../Products";

export const ShopContext = createContext(null);

const getDefaultCarts = () => {
  let cart = {};
  for (let i = 1; i < Products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCarts());

  const updateCountItmes = (newCount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newCount }));
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Products.find((product) => product.id === item);
        if (itemInfo && itemInfo.price) {
          totalPrice += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalPrice;
  };
  
  const contextValues = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCountItmes,
    getTotalPrice,
  };
  return (
    <ShopContext.Provider value={contextValues}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
